import React, {useEffect, useState} from 'react';
import style from './greeting.module.css';
import Cart from "../Cart/Cart";
import uniqid from "uniqid";
import Reserv from "../reservation/Reserv";

function Greeting(props) {
    const [data, setData] = useState([]);
    const [shownData, setShownData] = useState([]);
    const [modal, setModal] = useState(false);
    const [clickedId, setClickedId] = useState();

    useEffect(() => {
        fetch("https://mocki.io/v1/1a11e17d-a605-4d77-86e0-f1d0d621f840")
            .then(x => x.json())
            .then(res => {
                setData(res);
                setShownData(res);
            });
    }, []);

    const resSearch = (e) => {
        if (e.target.value) {
            setShownData(data.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase() || item.title.toLowerCase() === e.target.value.toLowerCase())))
        } else {
            setShownData(data);
        }
    }

    const clicked = (id)=>{
        setModal(true);
        setClickedId(id);
    }
    return (<div className={style.mainDiv}>
        <div className={style.heading}>
            <h1>Pick a Restaurant</h1>
            <input type="text" onChange={resSearch}/>
        </div>
        <div className={style.cardsWrap}>
            {shownData.map((x,i) => (<Cart onClick={clicked} key={uniqid()} img={x.imageUrl} title={x.title} location={x.location} id={i}/>))}
        </div>
        {modal && (<Reserv setModal={setModal} res={shownData[clickedId]}/>)}
    </div>);
}

export default Greeting;
