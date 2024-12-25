import React from "react";


function MainContent() {
  return (
    <div>
      <header>
        <h1>WE Terminal Hotel</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">ประเภทห้องพัก</a>
          <a href="#">จองห้องพัก</a>
        </nav>
      </header>
    </div>
  );
}

function App() {
  return <MainContent />;
}

export default App;
