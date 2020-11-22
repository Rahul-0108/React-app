import React from "react";

function CustomButton(props)
{

    if(props.isRented)
    return <button style={{borderColor:"white"}} disabled>Rent</button>

    else
    return <button style={{borderColor:"white"}} onClick={props.onClick} >Rent</button>
}

export default CustomButton;