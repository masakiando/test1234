import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import {Button, Popover, Position, Tooltip,Card, Elevation} from "@blueprintjs/core";

const PopularList  = ({
  products,
  imageUrl,
  onError,
  itemNumber
}) => {
  return (
    <div>
      <div className="columns">
      {products.slice(0,itemNumber).map(product =>
        <div className="column" key={product.id}>

            <Card
              interactive elevation={Elevation.TWO}>
                <figure className="image is-256x256 is-5by4 is-marginless">
                { /* <img style={{backgroundSize: "100% 100%"}} src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image"/> */ }
                <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image"/>
                </figure>
                <div className="content">
                  <table className="table-profile has-text-dark">
                    <tr>
                      <th colSpan="1"></th>
                      <th colSpan="2"></th>
                    </tr>
                    <tr>
                      <td>Address:</td>
                      <td>Guru's Lab</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>0123-456789</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>minion@despicable.me</td>
                    </tr>
                  </table>
                </div>
                <br/>
                <div className="buttons has-addons is-centered">
                  <a href="#" className="button is-link">Github</a>
                  <Link className="button is-link" to={`/singleproduct/${product.id}`}>
                    LinkedIn
                  </Link>
                  <a href="#" className="button is-link">CodeTrace</a>
                </div>
            </Card>
        </div>
      )}
    </div>
    </div>

  );
};

PopularList.propTypes = {
  products: PropTypes.array,
  imageUrl: PropTypes.string,
  onError: PropTypes.func,
  itemNumber: PropTypes.number.isRequired
};

export default PopularList;
