import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Input(){
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const history = useNavigate();

  const AddExercise = async () => {
    const newPerson = JSON.stringify({name, age, phone});
    console.log(newPerson);
    const response = await fetch('http://localhost:3000/persons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
        body: newPerson
    });
    if(response.status === 201){
        alert("Successfully added the Person!");
    } else {
        alert(`Failed to add Person, status code = ${response.status}`);
    }
    history("/results");
  };

  return(
    <>
      <body>
        <table id="home_table">
          <tr>
            <th id="home_table"><center><Link to='/'>Go back to home</Link></center></th>
          </tr>
        </table> 
        <h1>Hello! Please fill out the info!</h1>
        <center>
        <div><input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={e => setName(e.target.value)} /></div>
        <div><input
            type="number"
            value={age}
            placeholder="Enter Age"
            onChange={e => setAge(e.target.value)} /></div>
        <div><input
            type="number"
            placeholder="Enter Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)} /></div>
        <button
            onClick={AddExercise}
        >Add</button>
        </center>
      </body>
    </>
  );
}

export default Input;