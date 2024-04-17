import Team from "./Components/team.jsx";
import History from "./Components/History.jsx"
import "./mvp.css"
import {useState} from 'react';

function App() {
    const [guestName, setGuestName] = useState("Firefox")
    const [homeName, setHomeName] = useState("Linux")
    const [guestPoints, setGuestPoints] = useState(0)
    const [homePoints, setHomePoints] = useState(0)
    const [history, setHistory] = useState(["Game starts"])
    const [disabled, setDisabled] = useState(false);
    const onReset = () => {
        setGuestPoints(0);
        setHomePoints(0);
        setHistory(["new Game"])
        setDisabled(false)
    }

    const onAddHomePoints = (newPoints) => {
        setHomePoints(newPoints);
        history.push("Home throws, new points: " + newPoints)
    if(newPoints >= 12){
        setDisabled(true)
        history.push("Home wins")
    }
    }


    return (

        <>
            <section>
                <aside>
                    <Team
                        label="Home team"
                        name={homeName}
                        setName={setHomeName}
                        points={homePoints}
                        setPoints={onAddHomePoints}
                        disabled={disabled}
                    />
                </aside>
                <aside>
                    <History
                    history={history}
                    onReset={onReset}/>
                </aside>
                <aside>
                    <Team
                        label="Guest team"
                        name={guestName}
                        setName={setGuestName}
                        points={guestPoints}
                        setPoints={setGuestPoints}
                        disabled={disabled}
                    />
                </aside>
            </section>
        </>
    )
}

export default App