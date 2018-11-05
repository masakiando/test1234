import React, {PropTypes} from 'react';
import ListRow from './ListRow';

const List = ({
  courses, onDelete, saving
}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
        <th>管理</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <ListRow
          key={course.id}
          course={course}
          onDelete={onDelete}
          saving={saving}
        />
      )}
      </tbody>
    </table>
  );
};

List.propTypes = {
  courses: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default List;
