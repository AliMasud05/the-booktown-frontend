import React from 'react'
import BookCart from '../components/BookCart';
export type IBook = {
  title: string;
  author: string;
  genre: string;
  reviews: string[];
};

export const Book = () => {

  const bookData = [
    {
      title: "Nature Future",
      author: "Habib Nahid",
      genre: "Fiction",
      publishDate: "1 february",
      review: "['good book']",
    },
    {
      title: "Nature Future",
      author: "Kayali",
      genre: "Fiction",
      publishDate: "1 february",
      review: "['good book']",
    },
    {
      title: "Nature Future",
      author: "Wahid",
      genre: "Fiction",
      publishDate: "1 february",
      review: "['good book']",
    },
    {
      title: "Nature Future",
      author: "nasib sajjad",
      genre: "Fiction",
      publishDate: "1 february",
      review: "['good book']",
    }
  ];

  return (
    <div className='grid grid-cols-2'>
        {
            bookData.map((book)=>
                <BookCart book={book}/>
            )
        }
    </div>
  )
}
