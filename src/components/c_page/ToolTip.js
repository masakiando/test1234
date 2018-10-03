import React, {PropTypes} from 'react';
import {
  Button, Popover, Position, Tooltip,
  Card, Elevation
 } from "@blueprintjs/core";
 import styled from 'styled-components';
 const Dvi = styled.div`
 margin: 10px 40px;
 width: 1200px;
 display: grid;
 grid-gap: 0px;
 grid-template-columns: repeat(4, 300px);//行
 `;
 const DviItem = styled.div`
 padding: 10px 5px 0px 5px;
 `;


const C_Page = () => {
  return (
    <div className="">
      <h3> blueprintjs </h3>
      <Popover content={<h1>Popover!</h1>} position={Position.RIGHT}>
          <Tooltip content="I has a popover!" position={Position.RIGHT}>
              <Button>Hover and click me</Button>
          </Tooltip>
      </Popover>

      <Dvi>
        <DviItem>
          <Card interactive={true} elevation={Elevation.TWO}>
              <h5><a href="#">Card heading</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card
            interactive={true} elevation={Elevation.TWO}>
              <h5><a href="#">Card heading</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card interactive={true} elevation={Elevation.TWO}>
              <h5><a href="#">Card heading</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
        <DviItem>
          <Card interactive={true} elevation={Elevation.TWO}>
              <h5><a href="#">Card heading</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </DviItem>
      </Dvi>

    </div>
  );
};
export default C_Page;
