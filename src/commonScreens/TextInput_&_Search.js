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
    <div>
      <label htmlFor="js-search-input"></label>
      <InputWithSearchButtonFrame>
        <Input
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type="text"
          />
          <SearchButton type="submit">
            <IconButton className="fa fa-search fa-2x" aria-hidden="true"/>
          </SearchButton>
      </InputWithSearchButtonFrame>
    </div>
  );
};

TextInputSearch.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

const InputWithSearchButtonFrame = styled.div`
background-color: #fff;
border: 2px solid #FFF;
border-radius: 5px;
`;

const Input = styled.input`
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
const IconButton = styled.i`
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

const Label = styled.label`
`;
export default TextInputSearch;
