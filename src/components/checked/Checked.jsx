import React from 'react';

function Checked({res, date, time, number, imgClass}) {
    return (
        <>
            <img src="/success.png" alt="success" className={imgClass} />
            <h2>{res.title} restoraninda <br/> {date} tarixinde <br/>
                {time} vaxtinda <br/> {number} - neferlik yer reserv olundu!
            </h2>
        </>);
}

export default Checked;