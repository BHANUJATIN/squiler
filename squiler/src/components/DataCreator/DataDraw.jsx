import React from "react";
import TableStructure from "./TableStructure";
import customers from "../../data/customers.json";
import products from "../../data/products.json";
import suppliers from "../../data/suppliers";

function DataDraw() {
  
  return (
    <div className="w-full h-screen overflow-auto scrollbar-hide py-4">
      <TableStructure
        tableHead={customers[0]}
        tableName="customers"
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={suppliers[0]}
        tableName="suppliers"
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={products[0]}
        tableName="products"
      />
    </div>
  );
}

export default DataDraw;
