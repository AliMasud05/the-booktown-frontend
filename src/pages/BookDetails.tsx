import React from 'react'

const BookDetails = () => {
  return(
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          Name
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">Author </h1>
          <p className="text-xl">Genre</p>
          <ul className="space-y-1 text-lg">
            Comment
          </ul>
          <button>Edit Book</button>
          <button>Delete Book</button>
        </div>
      </div>
      
    </>
  );
}

export default BookDetails