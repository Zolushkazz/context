import React from "react";
import Three from "./Three";

function Two(props) {
  const { na } = props;
  return (
    <div>
      <Three na={na} />
    </div>
  );
}

export default Two;
