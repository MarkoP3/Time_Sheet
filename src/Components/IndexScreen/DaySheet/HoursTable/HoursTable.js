import React from "react";
import Header from "./Header/Header";
import Row from "./Row/Row";

function HoursTable() {
  return (
    <table class="default-table">
      <tbody>
        <Header></Header>
        <Row
          clients={["Client 1"]}
          projects={["Project 1"]}
          categories={["Category 1"]}
        ></Row>
      </tbody>
    </table>
  );
}

export default HoursTable;
