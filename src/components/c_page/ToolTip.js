import React, {PropTypes} from 'react';
import { Button, Popover, Position, Tooltip } from "@blueprintjs/core";

const C_Page = () => {
  return (
    <div>
      <h3> C_Page </h3>
      <Popover content={<h1>Popover!</h1>} position={Position.RIGHT}>
          <Tooltip content="I has a popover!" position={Position.RIGHT}>
              <Button>Hover and click me</Button>
          </Tooltip>
      </Popover>
    </div>

  );
};
export default C_Page;
