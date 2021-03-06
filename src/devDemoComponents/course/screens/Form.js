import React, {PropTypes} from 'react';
import TextInput     from '../../../commonScreens/recycle/Form/Input/TextInput';
import SelectInput   from '../../../commonScreens/recycle/Form/Select/SelectInput';

const CourseForm = ({
  onChange,
  onSave,
  allAuthors,
  course,
  errors,
  saving
}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        placeholder="コースのタイトルを入力してください"
        value={course.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Save...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

CourseForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  allAuthors: PropTypes.array,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};

export default CourseForm;
