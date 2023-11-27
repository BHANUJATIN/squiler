import React from "react";

function PredefinedQuery({ setDefaults, setValue }) {
  const qurtyValue = [
    {
      query: "select * from customers;",
      default: 1,
    },
    {
      query:
        "select contact_name, address,city,postal_code, country from customers limit 18;",
      default: 4,
    },
    {
      query: "select * from products;",
      default: 2,
    },
    {
      query: "select * from suppliers;",
      default: 3,
    },
  ];
  return (
    <div>
      <div className="mx-auto flex items-center font-bold justify-center mt-2 py-2 h-11 px-4 rounded text-white font-mono w-56 text-lg md:text-xl">
        React SQL Editor
      </div>
      <div className=" p-4 text-blue-700">
        <div className="flex justify-center items-center">
         
          <p className="font-bold text-md text-white bg-blue-700 p-1 rounded-md">Available Queries</p>
        </div>

        <div className="h-52 lg:h-48 overflow-auto scrollbar-hide mb-6 lg:mb-0">
          {qurtyValue.map((item, index) => (
            <p
              key={index}
              className="cursor-pointer bg-gray-700 text-blue-200 hover:bg-gray-900 font-mono hover:text-white p-2 text-center text-sm rounded-sm my-4"
              onClick={() => {
                setDefaults(`${item.default}`);
                setValue(`${item.query}`);
              }}
            >
              {item.query}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PredefinedQuery;
