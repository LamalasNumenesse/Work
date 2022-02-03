import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import List from "../code/List_Name";

function Results(){
  const [person, setPerson] = useState([]);

  const loadExercises = async () => {
    const responce = await fetch(`http://localhost:3000/persons/`, {method: 'GET'});
    const data = await responce.json();
    setPerson(data);
  }
  useEffect(() => {
    loadExercises();
  }, []);
  return(
    <>
      <body>
        <table id='home_table'>
          <tr>
            <th id="home_table"><center><Link to='/'>Go back to home</Link></center></th>
          </tr>
        </table> 
        <h1>Here are your Results!</h1>
        <List data={person}></List>
        <h2><center><Link to='/input'>Input Another Person</Link></center></h2>
      </body>
    </>
  );
}

export default Results;