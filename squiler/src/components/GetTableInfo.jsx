import { useEffect, useState } from "react";

export default function useGetTableInfo(data) {
  const [infoStore, setInfoStore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let tempData = null;
        if (data === 1) {
          tempData = await import("../data/customers.json");
        } else if (data === 2) {
          tempData = await import("../data/suppliers.json");
        } else if (data === 3) {
          tempData = await import("../data/products.json");
        } else if (data === 4) {
          tempData = await import("../data/select_customer.json");
        }

        setInfoStore(tempData.default); // Use .default to access the module's default export
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [data]);

  let tableHeaders = [];
  let tableRows = [];

  // Ensure infoStore is not null before iterating
  if (infoStore) {
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
  }

  return { tableHeaders, tableRows, loading };
}
