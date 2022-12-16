import React from "react";
import Classes from "../LoadingPage/LoadingPage.module.css"
const LoadingPage = (props) => {
    
    return(
        <div className={Classes.MainContainer}>
            <img className={Classes.Img} src="\Materials\CharmanderGif.gif" alt="" />
        </div>
    )
}

export default LoadingPage;