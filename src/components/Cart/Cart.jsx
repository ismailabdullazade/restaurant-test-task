import React from "react";
import style from "./cart.module.css";

export default function Cart({img, title, location, onClick, id}) {
    const clickHandle = (cartId) =>{
        onClick(id)
    }

    return <div onClick={clickHandle} className={style.cartDiv} >
        <img src={img} alt={title}/>
        <h4>{title}</h4>
        <p><img src={'/img.png'} alt="location"/> {location}</p>
    </div>;
}
