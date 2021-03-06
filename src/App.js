import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './component/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '나동빈',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': '960305',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '921205',
    'gender': '남자',
    'job': '디자이너'
  }
  ]
  

function App() 
{
  return (
    <div>
      {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.name} gender={c.gender} job={c.job}/> ); }) }
    </div>
  );
}


export default App;


  

// const customer={
//   name:'홍길동',
//   birthday:'1234555',
//   gender:'남자',
//   job:'대학생'
// }

// function App() 
// {
//   return (
//     <div>
//       <Customer name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job}/>
//     </div>
//   );
// }