import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';  // 전역 스타일 (옵션)

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Welcome to DM Frontend</h2>
        <p>This is a sample application.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
