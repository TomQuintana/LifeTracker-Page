import React from 'react'
import Card from './Card'

const Books = () => {

const books = [
    {
      id: '1',
      title: 'Book Title 1',
      author: 'Author Name 1',
      status: 'Read',
      type: 'Fiction',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      title: 'Book Title 2',
      author: 'Author Name 2',
      status: 'Read',
      type: 'Fiction',
      image: 'https://via.placeholder.com/150',
    },
{
      id: '2',
      title: 'Book Title 2',
      author: 'Author Name 2',
      status: 'Read',
      type: 'Fiction',
      image: 'https://via.placeholder.com/150',
    },
{
      id: '2',
      title: 'Book Title 2',
      author: 'Author Name 2',
      status: 'Read',
      type: 'Fiction',
      image: 'https://via.placeholder.com/150',
    },
{
      id: '2',
      title: 'Book Title 2',
      author: 'Author Name 2',
      status: 'Read',
      type: 'Fiction',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {books.map((book) => (
        <Card
          key={book.id}
          title={book.title}
          author={book.author}
          image={book.image} // Asegúrate de que los datos incluyen una URL de imagen
          type={book.type}
          status={book.status}
        />
      ))}
      </div>
  )
}

export default Books 
