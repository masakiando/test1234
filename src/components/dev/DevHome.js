import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import {Button, Popover, Position, Tooltip,Card, Elevation} from "@blueprintjs/core";
import styled from 'styled-components';

const DevHome = () => {
  return (
    <div className="">
      <h2> 開発DEMO </h2>
      <Dvi>
        <DviItem>
          <Card interactive elevation={Elevation.TWO}>
              <h5><Link to="/bootstrapGrid">bootstrapGrid</Link></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card
            interactive elevation={Elevation.TWO}>
              <h5><a href="#">Card heading</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card interactive elevation={Elevation.TWO}>
              <h5><a href="#">Card heading</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card interactive elevation={Elevation.TWO}>
              <h5><a href="#">Card heading</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
      </Dvi>
    </div>
  );
};
const Dvi = styled.div`
margin: 10px 40px;
width: 1200px;
display: grid;
grid-gap: 0px;
grid-template-columns: repeat(4, 300px);//è¡Œ
`;
const DviItem = styled.div`
padding: 10px 5px 0px 5px;
`;
export default DevHome;
