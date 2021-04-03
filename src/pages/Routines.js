import { useEffect, useState } from "react";
import {fetchRoutines} from '../api';
import RoutineCard from '../components/RoutineCard';

const Routines = () => {
    const [routines, setRoutines] = useState([]);
    useEffect (async () => {
        const response = await fetchRoutines()
        //console.log('resonse', response)
        //const RoutinesArray = Object.entries(response)
        //console.log(RoutinesArray)
        setRoutines(response)
        console.log('routines', routines)
    }, [])
    return (
        <div id='routines'>
            {routines.map((routine, idx) => {
                return (
                    <RoutineCard key={ idx } routine={ routine }/>
                )})
                
                /* <div className='routine'>
                {response.map((routine, idx) => {
                    return (
                        <RoutineCard key={idx} routine={routine}/>
                    )
                })}
            </div> */}
        </div>
    )
}

export default Routines