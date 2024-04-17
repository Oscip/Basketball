import image from "../Court_Photo.jpg"
export default function history({history, onReset}) {


    return (
        <>
            <div>
                <img src={image} alt="Dieses Bild is nicht verfügbar"/>
                <label>History</label>

                <ul>{history.map((value,index) => <li key={index}>{value}</li>)}</ul>
                <input type="button" value="reset" onClick={() => onReset()}/>
            </div>
        </>
    );
}

