import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({components, className}) => {
  return (
    <ul className={`navigation ${className}`}>
      {
        components.map( name => {
          return (
            <li key={name}>
              <a href={`#${name}`}>{name}</a>
            </li>
          );
        })
      }
    </ul>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  components: PropTypes.array.isRequired
};

export default Navigation;
