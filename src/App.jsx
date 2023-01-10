import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import lizard from './resources/lizard.jpg'

function App() {
  return (
    <div className="App">
      <img className='w-full  fixed top-0 left-0 z-[-1]' src={lizard} alt="" />
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
