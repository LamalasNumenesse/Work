import React from "react";
import { Link } from "react-router-dom";

function Home(){
  return(
    <>
      <body>
        <h1>Hello, Welcome to my Website!</h1>
        <h2><center><Link to='/input'>CLICK ME!</Link></center></h2>
      </body>
    </>
  );
}

export default Home;