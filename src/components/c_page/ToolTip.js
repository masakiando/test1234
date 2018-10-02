import React, {PropTypes} from 'react';
import {
  Button, Popover, Position, Tooltip,
  Card, Elevation
 } from "@blueprintjs/core";

const C_Page = () => {
  return (
    <div className="container">
      <h3> blueprintjs </h3>
      <Popover content={<h1>Popover!</h1>} position={Position.RIGHT}>
          <Tooltip content="I has a popover!" position={Position.RIGHT}>
              <Button>Hover and click me</Button>
          </Tooltip>
      </Popover>

      <div className="row">
        <div className="">
          <Card interactive={true} elevation={Elevation.TWO}>
              <h5><a href="#">Card heading</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </div>
        <div className="" style={{width: '300px'}}>
          <Card
            interactive={true} elevation={Elevation.TWO}>
              <h5><a href="#">Card heading</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </div>
        <div className="">
          <Card interactive={true} elevation={Elevation.TWO}>
              <h5><a href="#">Card heading</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </div>
        <div className="">
          <Card interactive={true} elevation={Elevation.TWO}>
              <h5><a href="#">Card heading</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
          </Card>
        </div>

      </div>
    </div>
  );
};
export default C_Page;
