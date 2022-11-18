import React from "react";
import ReactToPrint from "react-to-print";
import Button from "@material-ui/core/Button";
import { Forms } from "./forms";

const tabStyle = {
  height: 500,
  maxHeight: 300,
  
  //backgroundColor: "blue"
};

console.log("FROM FORMS");

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div style={tabStyle}>
        <table className="printElement1">
          <thead>
            <th>vwhicle.</th>
            <th>column 2</th>
            <th>column 3</th>
          </thead>
          <tbody>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
          </tbody>
        </table>
        <table className="printElement1"></table>
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => <Button href="#">Print this out!</Button>}
          content={() => this.componentRef}
          bodyClass={"printElement1"}
         
        />
      </div>
    );
  }
}

export default Example;
