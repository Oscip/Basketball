//import {useState} from 'react';
// eslint-disable-next-line react/prop-types,no-unused-vars
export default function Team({label, name, setName, points, setPoints,disabled}) {
    /*const [formValues, setFormValues] = useState({
        points: 0
    });*/
    function onClickButtonEvent() {
        // Generate random points between 1 and 3 with 50% probability
        const randomPoints = Math.random() > 0.5 ? Math.floor(Math.random() * 3) + 1 : 0;
        setPoints(points + randomPoints)
    }

    return (
        <>
            <label>{label}</label>
            <input type="text" value={name} onChange={(e) => setName = e.target.value}/>
            <input type="number" value={points} readOnly/>
            <input type="submit" value="werfen" disabled={disabled} onClick={() => onClickButtonEvent()}/>
        </>
    );
}
