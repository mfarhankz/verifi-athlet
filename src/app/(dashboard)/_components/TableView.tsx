import React from "react";
import { Button, Dropdown, Flex, Input } from "antd";
import { Sortable } from "@/app/dndkit/presets/Sortable/Sortable";

export default function TableView() {
  const dropdownContent = () => (
    <div className="table-view">
      <h5>Table Column Options</h5>
      <p>
        Add or remove columns, To change the column order, drag and drop fields
      </p>
      <div className="input-field">
        <Input type="text" placeholder="Search Player..." />
        <i className="icon-search-normal-1 text-xl flex"></i>
      </div>

      <ul>
        <li>
          <Input type="text" placeholder="Column name" />
          <Sortable
            removable
            handle
          />
        </li>
      </ul>
    </div>
  );
  return (
    <Flex>
      <Dropdown dropdownRender={dropdownContent} trigger={["click"]}>
        <Button className="select-dropdown">
          <i className="icon-setting-4"></i> Table View{" "}
          <i className="icon-arrow-down-1"></i>
        </Button>
      </Dropdown>
    </Flex>
  );
}
