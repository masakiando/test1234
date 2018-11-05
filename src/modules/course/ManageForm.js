import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions/Actions';
import * as Selector from './selectors/AuthorsSelector';
import Form from './screens/Form';
var commonValidations =  require('./validations/Validator');

import toastr from 'toastr';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      this.setState({
        course: Object.assign({}, nextProps.course)
      });
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  CourseFormIsValid() {
    let formIsValid = true;
    const { errors, isValid } = commonValidations(this.state.course);

    if (!isValid) {
      this.setState({ errors: errors });
      formIsValid = false;
    }
    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();
    if(!this.CourseFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {

    this.setState({saving: false});
    toastr.success('Course saved');
    //React classはprops,contextを継承している
    //context関数を使用してrouterと接続する
    this.context.router.push('/courses');
  }
  render() { //propTypes, constructor state, bind(this) 検証
    //React classのpropsを使用しauthorsオブジェクトをプロパティにする
    //React classはprops,contextを継承している
    return (
      <Form
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        allAuthors={this.props.authors}
        course={this.state.course}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}
// this.props.course authors actionsの検証 renderで使用
// mapStateToProps,mapDispatchToPropsで所得したもの
ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
//ルータをthis.context.routerで利用できるように、 "React Router"コンテキストをプルします。
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};
//state.courses, courseIdを受け取りfilterでcourse.idとidが一致する
// ものをcourse変数に入れる。if (course) trueなら
// 配列courseにはObjectが入っていてそのindex0をreturnする。
// 内容が描画される
function getCourseById(courses, id) {

  const course = courses.filter(course => course.id == id);

  if (course) return course[0];
  return null;
}

//stateからPropを作る
//状態が変わるたびにストアからアプリケーション状態を受け取り、そのデータからそのデータをコンポーネントに利用できるようにしpropsます。
function mapStateToProps(state, ownProps) {

  // ownPropsはObjectを多数持っていてその中のparams:Objectを使用する
  const courseId = ownProps.params.id; // from the path `/course/:id`

  let course = {
                id: '',
                watchHref: '',
                title: '',
                authorId: '',
                length: '',
                category: ''
              };
  // return { course: course,が処理されてcourseがこのcomponentのstateになってから
  // この式が成立するようにstate.courses.length > 0をする。
  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authors = Selector.authorsSelector(state.authors);
  //下記がPropになる
  return {
    course: course,
    authors: authors
  };
}

//component内ののブラウザイベントを機にcourseActionsをdispatchする
//自動でactions functionへ繋いでくれる
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
    //this.props.actions.saveCourse(this.state.course);と書くとreduxのbindActionCreatorsは
    //store.dispatch(courseActions.saveCourse(this.state.course));
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
