import React from 'react';
import BooksList from './components/BookList';
import RegisterUser from './components/RegisterUser';

const App = () => {
  return (
    <div>
      <h1>Book Buddy</h1>
      <RegisterUser />
      <BooksList />
    </div>
  );
};

export default App;
