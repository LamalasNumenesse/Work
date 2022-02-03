import React from 'react';
import { MdDeleteForever } from "react-icons/md";

function Buttons(_id){
  const onDelete = async() => {
    const response = await fetch(`http://localhost:3000/persons/${_id}`, {method: 'DELETE'});
    if(response.status === 204){
      alert("Successfully deleted the Person!");
      window.location.reload();
    } else {
      alert(`Failed to delete Person, status code = ${response.status}`);
    }
  }
  return (
    <div>
      <MdDeleteForever onClick={onDelete} />
    </div>
  );
}

function List({data}){
  return(
  <div className="list-item">
        <center><table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => 
              <tr>
                <td key={i}>{data.name}</td>
                <td key={i}>{data.age}</td>
                <td key={i}>{data.phone}</td>
                <td key={i}>{Buttons(data._id)}</td>
              </tr>
            )}
          </tbody>
        </table></center>
      </div>
    );
}

export default List;