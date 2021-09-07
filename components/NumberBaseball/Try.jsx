import React from "react";

const Try = React.memo(({ tryInfo }) => {
  return (
    <div>
      <div>
        {tryInfo.try} - {tryInfo.result}
      </div>
    </div>
  );
});

export default Try;
