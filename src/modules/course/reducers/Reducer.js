// commonReducers
import initialState from '../../../reducers/initialState';
/* actionTypes  */ const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
/* actionTypes  */ const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
/* actionTypes  */ const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';
/* actionTypes  */ const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS';
/* actionTypes  */ const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {

    case LOAD_COURSES_SUCCESS:
      return action.courses;

    //returnの第１引数で現在の...state複製する
    //第２引数で新しいcourse作る
    //第１、２引数合わせたObjectを返す
    case CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    //returnの第一引数で現在の...stateから、
    //UPDATEするcourse以外のcoursesをfilterして取得する。そして全く新しい配列を作る。
    //そして、Object.assignを使用して渡されたコースのコピーを作成し、最終的に戻す配列にaction.courseを含めます。
    //  スプレッド演算子、マップ、フィルタ、およびObject.assignを使用して処理を行うことがよくあります。 これらの4つのツールを理解すると、状態を変えることなく本当に強力なタスクを達成できます。
    case UPDATE_COURSE_SUCCESS:

      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    //missing id use!!!!
    case DELETE_COURSE_SUCCESS:

      // return action.courses;
      return [
        ...state.filter(a => a.id !== action.courseId)
      ];

      default:
        return state;
  }
}
