import { useState } from "react";
import Navbar from "../components/NavBar/NavBar"

function HomePage({handleOverlay}){

    return(
        <>
            <h1>Home Page</h1>
            <Navbar handleOverlay={handleOverlay}/>
        </>
    )
}

export default HomePage