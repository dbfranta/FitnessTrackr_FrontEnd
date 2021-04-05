import { useEffect, useState } from "react";
import {fetchRoutines} from '../api';
import RoutineCard from '../components/RoutineCard';

const Routines = () => {
    const [routines, setRoutines] = useState([]);
    useEffect (async () => {
        const response = await fetchRoutines()
        setRoutines(response)
    }, [])
    return (
        <div id='routines'>
            <h2>Current Routines List:</h2>
            <hr></hr>
            {routines.map((routine, idx) => {
                return (
                    <RoutineCard key={ idx } routine={ routine }/>
                )})
            }
        </div>
    )
}

export default Routines