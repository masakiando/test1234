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
              <h5><Link to="/Test_Grid">TestGrid</Link></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card
            interactive elevation={Elevation.TWO}>
              <h5><a href="/bulma1">bulma1</a></h5>
              <p>bulma_1</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card interactive elevation={Elevation.TWO}>
              <h5><a href="/bulma2">bulma2</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card interactive elevation={Elevation.TWO}>
              <h5><a href="/bulma3">bulma3</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card interactive elevation={Elevation.TWO}>
              <h5><a href="/bulma4">bulma4</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card interactive elevation={Elevation.TWO}>
              <h5><a href="/bounce">bulma4</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card interactive elevation={Elevation.TWO}>
              <h5><a href="/tooltip">tooltip</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card interactive elevation={Elevation.TWO}>
              <h5><a href="/courses">courses</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card interactive elevation={Elevation.TWO}>
              <h5><a href="/imageUploadSaveLocal">imageUploadSaveLocal</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card interactive elevation={Elevation.TWO}>
              <h5><a href="/devgooglesignin">googlesignin</a></h5>
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
