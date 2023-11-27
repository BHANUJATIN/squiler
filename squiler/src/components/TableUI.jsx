
function TableUI({ headers, rows }) {
  return (
    <div className="w-full h-80 max-w-[100vw] overflow-scroll scrollbar-hide">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row_value, index) => (
            <tr key={index}>
              {row_value.map((cell_value, index) => (
                <td
                  key={index}
                  className="border-t-2 border-white px-4 py-2 text-sm text-gray-300"
                >
                  {cell_value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableUI;
