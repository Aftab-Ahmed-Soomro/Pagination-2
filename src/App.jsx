import React, { useState } from "react";

const dummyData = [
  { name: "Aftab", age: 21 },
  { name: "Aftab", age: 21 },
  { name: "Aftab", age: 21 },
  { name: "Aftab", age: 21 },
  { name: "Aftab", age: 21 },
  { name: "Ahmed", age: 21 },
  { name: "Ahmed", age: 21 },
  { name: "Ahmed", age: 21 },
  { name: "Ahmed", age: 21 },
  { name: "Ahmed", age: 21 },
  { name: "Rafay", age: 21 },
  { name: "Rafay", age: 21 },
  { name: "Rafay", age: 21 },
  { name: "Rafay", age: 21 },
  { name: "Rafay", age: 21 },
  { name: "Sharjeel", age: 21 },
  { name: "Sharjeel", age: 21 },
  { name: "Sharjeel", age: 21 },
  { name: "Sharjeel", age: 21 },
  { name: "Sharjeel", age: 21 },
];

const App = () => {
  const totalCounts = dummyData.length;
  const itemPerPage = 5;
  const totalPages = Math.ceil(totalCounts / itemPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemPerPage;
  const lastIndex = startIndex + itemPerPage;
  const paginatedData = dummyData.slice(startIndex, lastIndex);

  const pageIndex = Array.from({length : totalPages}, (_,index) => index + 1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">User Data</h1>

        {/* Paginated Data */}
        <div className="grid gap-4">
          {paginatedData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-blue-50 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex gap-2">
                <p className="text-lg font-medium text-gray-700">Name:</p>
                <p className="text-lg text-gray-900">{item.name}</p>
              </div>
              <div className="flex gap-2">
                <p className="text-lg font-medium text-gray-700">Age:</p>
                <p className="text-lg text-gray-900">{item.age}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}

        {/* Previous */}
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50 hover:bg-blue-700 transition"
          >
            Previous
          </button>

          {/* Page Index */}
          {
            pageIndex
            .slice(Math.max(0, currentPage - 2), Math.min(totalPages, currentPage + 1))
            .map((page) => {
              return (
                <button 
                  key={page} 
                  onClick={() => handlePageChange(page)} 
                  className={`px-4 py-2 rounded-md transition ${page === currentPage ? "bg-blue-500 text-white font-semibold" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`} 
                >
                  {page}
                </button>
              )
            })
          }  

          {/* Next */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50 hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
