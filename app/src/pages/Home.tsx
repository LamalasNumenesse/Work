import React from "react";
import { Link } from "react-router-dom";

function Home(){
  return(
    <>
      <body>
        <h1>Hello, Welcome to my Website!</h1>
        <center><Link to='/input'>CLICK ME!</Link></center>
      </body>
    </>
  );
}

export default Home;