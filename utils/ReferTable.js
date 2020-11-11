import React, { Component } from "react";
import { View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

class ReferTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["DATE", "NAME", "EMAIL", "NUMBER"],
      tableData: [
        ["07-11-20", "Abid", "3", "4"],
        ["07-11-20", "Arif", "c", "d"],
        ["07-11-20", "Ali", "3", "4"],
        ["07-11-20", "Umer", "c", "d"],
      ],
    };
  }

  render() {
    const { state } = this;
    return (
      <View>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={state.tableHead} textStyle={{ fontWeight: "bold", padding: 4 }} />
          <Rows data={state.tableData} textStyle={{ marginLeft: 4 }} />
        </Table>
      </View>
    );
  }
}
export default ReferTable;
