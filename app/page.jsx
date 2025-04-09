'use client'

import React, { useState } from 'react'

const page = () => {
  const itemsPerPage = 5;

  const data = [
    {name: 'John', age : 30},
    {name: 'John', age : 30},
    {name: 'John', age : 30},
    {name: 'Aftab', age : 30},
    {name: 'Aftab', age : 30},
    {name: 'Aftab', age : 30},
    {name: 'Usman', age : 30},
    {name: 'Usman', age : 30},
    {name: 'Usman', age : 30},
    {name: 'Zeeshan', age : 30},
    {name: 'Zeeshan', age : 30},
    {name: 'Zeeshan', age : 30},
    {name: 'Ahmed', age : 30},
    {name: 'Ahmed', age : 30},
  ]

  const numberOfPages = Math.ceil(data.length / itemsPerPage)
  const pageIndex = Array.from({length : numberOfPages}, (_, index) => index + 1) // for showing all pages

  const [currentPage,setCurrentPage] = useState(0);
  
  const rows = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (

    <div>
      {
        rows.map((row,index) =>{
          return (
            <div key={index} className='row flex gap-4'>
              <div className='cell'>{row.name}</div> /
              <div className='cell'>{row.age}</div>
            </div>
          )
        })
      }
      <button onClick={()=> handlePageChange(currentPage -1)} className='ms-6'>&lt;</button>
      {/* {
        pageIndex
      } */}
      {
        pageIndex.slice(
          Math.max(0, currentPage - 2),
          Math.min(numberOfPages, currentPage + 3)
        ).map(
          page => <button key={page} onClick={() => handlePageChange(page - 1 )} className={page === currentPage + 1 ? "active" : ""}> {page} </button>
        )
      }
      <button onClick={()=> handlePageChange(currentPage +1)}>&gt;</button>
    </div>
  )
}

export default page
