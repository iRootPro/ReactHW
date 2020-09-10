import React from "react";
import preloader from "./../../../assets/img/preloader.svg"

const Preloader = React.memo(() => {
    return (
        <img src={preloader} alt="preloader"/>
    )
})

export default Preloader