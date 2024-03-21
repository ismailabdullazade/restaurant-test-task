import React, {useRef, useState} from 'react';
import style from './reserv.module.css';
import Checked from "../checked/Checked";


function Reserv({setModal, res}) {
    const dateInp = useRef();
    const timeInp = useRef();
    const numberInp = useRef();

    const [err, setErr] = useState(false);
    const [checked, setChecked] = useState(false);
    const [reservData, setReservData] = useState({
        date: "",
        time: "",
        number: ""
    });
    const sbmt = (e) => {
        e.preventDefault()
        if (dateInp.current.value === "" ||
            timeInp.current.value === "" || numberInp.current.value === "") {
            setErr(true);
            return;
        }
        setChecked(true);
        setReservData({
            date: dateInp.current.value,
            time: timeInp.current.value,
            number: numberInp.current.value
        })
    }
    const close = () => {
        setModal(false)
    }
    return (
        <div className={style.myModal}>
            <div className={style.popUp}>
                <img onClick={close} className={style.close} src="/close.png" alt="close"/>
                {checked ? (<Checked res={res} date={reservData.date} time={reservData.time}
                                     number={reservData.number} imgClass={style.success}/>) : (
                    <>
                        <form onSubmit={sbmt}>
                            <label>Tarix</label>
                            <input ref={dateInp} type="date"/>
                            <label>Saat</label>
                            <input ref={timeInp} type="time"/>
                            <label>Şəxs sayı</label>
                            <input ref={numberInp} type="number"/>
                            {err && (<p>Xanalar boş olmamalidir!</p>)}
                            <button>Rezerv elə</button>
                        </form>
                    </>)}
            </div>

        </div>
    );
}

export default Reserv;