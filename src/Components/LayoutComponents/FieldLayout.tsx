import * as React from "react";
//import "../src/Styles/main.css";
import Field from "../Field/Field";

class FieldLayout extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Field transformation={0} />
        <p className="grey">Robots on our field: 8</p>
        <p className="grey">Playing as: yellow</p>
      </div>
    );
  }
}

export default FieldLayout;
