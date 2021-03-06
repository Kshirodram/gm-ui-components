import React from "react";
import { shallow } from "enzyme";

import Table from "./Table";

describe("Table", () => {
  let TableWrapper;

  beforeEach(() => {
    TableWrapper = shallow(<Table columns={columns} data={data} />);
  });

  test("matches snapshot", () => {
    expect(TableWrapper).toMatchSnapshot();
  });

  test("renders the correct amount of columns and rows", () => {
    expect(TableWrapper.find("TableColumn")).toHaveLength(4);
    expect(TableWrapper.find("TableRow")).toHaveLength(3);
  });

  test("creates columns with the proper widths", () => {
    TableWrapper.find("TableColumn").forEach((column, i) => {
      expect(column.props().colWidth).toBe(columns[i].width);
    });
  });

  test("passes the correct props to children", () => {
    expect(
      TableWrapper.find("TableColumn")
        .at(0)
        .props()
    ).toHaveProperty("colWidth");

    expect(
      TableWrapper.find("TableRow")
        .at(0)
        .props()
    ).toMatchObject({ columns, data: data[0] });

    expect(TableWrapper.find("TableHeader").props()).toMatchObject({ columns });
  });
});

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "50%",
    onSort: () => console.log("onSort was called")
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: "20%",
    onSort: () => console.log("onSort was called")
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: "10%",
    onSort: () => console.log("onSort was called")
  },
  {
    title: "Food",
    dataIndex: "favfood",
    key: "favfood",
    width: "10%",
    onSort: () => console.log("onSort was called")
  }
];

const data = [
  {
    key: "1",
    name:
      "Adolph Blaine Charles David Earl Frederick Gerald Hubert Irvin John Kenneth Lloyd Martin Nero Oliver Paul Quincy Randolph Sherman Thomas Uncas Victor William Xerxes Yancy Wolfeschlegelsteinhausenbergerdorff, Senior",
    age: 32,
    address: "New York No. 1 Lake Park",
    favfood: "Hotdogs"
  },
  {
    key: "2",
    name: "Jane Green",
    age: 42,
    address: "London No. 1 Lake Park",
    favfood: "Amatriciana"
  },
  {
    key: "3",
    name: "Jenny Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    favfood: "Grilled Cheese"
  }
];
