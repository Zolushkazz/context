import React, { useState } from "react";
import Two from "./Two";

function One(props) {
  
  const { na } = props;

  return (
    <div>
      <Two na={na} />
    </div>
  );
}

export default One;
