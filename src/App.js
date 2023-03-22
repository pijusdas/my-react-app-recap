import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
        {/* <Counter></Counter> */}
       <ExternalUsers></ExternalUsers>
    </div>
  );
}


function ExternalUsers (){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h1>External Users</h1>
      {
        users.map(user => <Users name ={user.name} email= {user.email}></Users>)
      }
    </div>
    
  )
}

function Users(props){
  return(
    <div style={{border:"3px solid red",margin:'20px'}}>
      <h1>Name:{props.name}</h1>
      <p>Email:{props.email}</p>
    </div>
  )
}

{/* <Product name="Phone" price="76000"></Product>
       <Product name="laptop" price="76000"></Product>
       <Product name="Watch" price="76000"></Product> */}

function Counter(){
  const [count,setCount] = useState(55)
  const Increase = ()=> setCount(count+1)

  return(
    <div>
     <h1> Number:{count}</h1>
     <button onClick={Increase}>Increase</button>
    </div>
  )
}

function Product (props){
  return (
    <div className='product'>
      <h1>Name:{props.name}</h1>
      <p>Price:{props.price}</p>
    </div>
  )
}
export default App;
