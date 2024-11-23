'use client'
import React, { useEffect, useState } from "react";
import Card from "./Card"; // Assuming Card is your component for rendering book data
import { getBooks } from "@/services/books";
import { useSession } from 'next-auth/react';
import SearchBar from "@/components/user/search";

const Books = () => {
  const [books, setBooks] = useState([]);
  const {data: session} = useSession();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks(session?.user?.token);
        setBooks(response.data || []);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      }
    };

    fetchBooks();
  }, []);

  return (
   <> 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {books.length > 0 ? (
        books.map((book) => (
          <Card
            key={book.id}
            title={book.title}
            author={book.author}
            type={book.type}
            status={book.status}
            description={book.description}
            physically={book.physically}
            cover={book.cover}
          />
        ))
      ) : (
        <p>No books found</p>
      )}
    </div>
</>
  );
};

export default Books;

