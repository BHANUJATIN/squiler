import customers from "../data/customers";
import suppliers from "../data/suppliers";
import products from "../data/products";
import select_customer from "../data/select_customer";

export default function GetTableInfo(data) {
    let infoStore = null;
    if (data === 1) {
      infoStore = customers;
    } else if (data === 2) {
      infoStore = suppliers;
    } else if (data === 3) {
      infoStore = products;
    } else if (data === 4) {
      infoStore = select_customer;
    }
    let tableHeaders = [];
    let tableRows = [];
    for (var i = 0; i < infoStore.length; i++) {
      const row = infoStore[i];
      if (i === 0) {
        for (const item in row) {
          tableHeaders.push(row[item]);
        }
      } else {
        let temp = [];
        for (const item in row) {
          temp.push(row[item]);
        }
        tableRows.push(temp);
      }
    }
    return { tableHeaders, tableRows };
  }
  