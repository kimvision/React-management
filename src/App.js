import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './component/Customer';


const customer={
  name:'홍길동',
  birthday:'1234555',
  gender:'남자',
  job:'대학생'
}

function App() 
{
  return (
    <div>
      <Customer name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job}/>
    </div>
  );
}


export default App;





/*
function App() 
{
  return (
    <div className="gray-background">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello ..
          asdfsaD
        </p>
   
      </header>
    </div>
  );
}*/
