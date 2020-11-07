import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

class ReferTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["DATE","NAME", "EMAIL",  "NUMBER"],
      tableData: [
        ["07-11-20", "Abid", "3", "4"],
        ["07-11-20", "Arif", "c", "d"],
        ["07-11-20", "Ali", "3", "4"],
        ["07-11-20", "Umer", "c", "d"],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 1}}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}
export default ReferTable;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 10 },
  head: {
    height: 40,
  },
  text: {
    margin: 6,
  },
});
