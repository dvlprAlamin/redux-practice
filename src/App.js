import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/Postform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostForm />
        <hr />
        <Posts />
        {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;
