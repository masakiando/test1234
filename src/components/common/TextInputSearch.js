import React, {PropTypes} from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

const TextInputSearch = ({
  name,
  placeholder,
  value,
  onChange
}) => {
  return (
    <FormSearch>
      <label htmlFor="js-search-input"></label>
      <div>
        <FormInput
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-control"
          type="text"/>
        <SearchButton type="submit">
          <ButtonIcon className="fa fa-search fa-2x" aria-hidden="true"/>
        </SearchButton>
      </div>
    </FormSearch>
  );
};

TextInputSearch.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};
const FormSearch = styled.div`
width: 100%;
background-color: #fff;
border-radius: 5px;
`;
const FormInput = styled.input`
background-color: #fff;
padding: 10px;
font-size: 16px;
border: 2px solid #FFF;
width: 87%;
outline: 0;
border-radius: 5px;
`;
const SearchButton = styled.button`
font-size: 16px;
background-color: #f74d18;
color: #FFF;
border: 2px solid #f74d18;
border-radius: 1px;
min-width: 60px;
max-width: 190px;
border-radius: 50px;

&:hover {
  opacity: 0.7;
}
`;
const ButtonIcon = styled.i`
font-size: 16px;
background-color: #f74d18;
color: #FFF;
border: 2px solid #f74d18;
min-width: 60px;
max-width: 190px;

&:hover {
  opacity: 0.7;
}
`;
export default TextInputSearch;
