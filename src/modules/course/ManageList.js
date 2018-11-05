import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import * as Actions from './actions/Actions';
import List from './screens/List';

class ManageList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      saving: false
    };

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  deleteCourse(courseId) {
    this.setState({saving: true});
    this.props.actions.deleteCourse(courseId)
    .then(() => this.redirect(courseId));
  }

  redirect(courseId) {
    this.setState({saving: false});
    // toastr.success('Course deleted');
    toastr.options = {
      "positionClass": "toast-bottom-full-width",
      "closeButton": true,
      "progressBar": true
    };
    toastr["success"]("success",`ID:${courseId}は削除されました。`);
  }

  render() {
    const {courses} = this.props;
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2">
        <h1>Courses</h1>
          <input
            type="submit"
            value="Add Course"
            className="btn btn-primary"
            onClick={this.redirectToAddCoursePage}/>
          <List
            courses={courses}
            onDelete={this.deleteCourse}
            saving={this.state.saving}/>
        </div>
      </div>
    );
  }
}

ManageList.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//storeの更新後、storeがreducerから受け取った複製ステートをここでももらう!!! courses!!!
//コンポーネントはReduxストアの更新をサブスクライブします。
// コンポーネントの小道具にマージされる単純なオブジェクト* でなければなりません。
// このコンポーネントpropsにcoursesを作る
// このコンポーネントthis.props.coursesが利用できる。
//ownPropsでいろいろもらう
function mapStateToProps(state, ownProps) {

  return {
    courses: state.courses
    };
}
//connectしてmapDispatchToPropsにMapすればこのComponentの
//PropsにcreateCourseが登録される。
function mapDispatchToProps(dispatch) {

  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course))
    // All ctionsにオートdispatchしてくれる。
    actions: bindActionCreators(Actions, dispatch)
  };
}
//Component(React)とReduxの接続
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);

export default connect(mapStateToProps, mapDispatchToProps)(ManageList);
