import { getMe, registerUser } from "../api"
import { useState} from 'react'
import { createRoutine } from '../api'; 


import { useEffect} from "react";
import {fetchMyRoutines} from '../api';
import  MyRoutineCard  from '../components/MyRoutineCard';
import {fetchActivities} from '../api';

const CreateRoutine = () => { 

const [routineName, setRoutineName] = useState('');
const [routineGoal, setRoutineGoal] = useState('');
const [isPublic, setIsPublic] = useState(false);

const [routines, setRoutines] = useState([]);
const [me, setMe] = useState();
useEffect (async () => {
    const response = await getMe()
    setMe(response)
    const response2 = await fetchMyRoutines(response.username)
    setRoutines(response2)
    //console.log(routines)

}, [])



const [activities, setActivities] = useState([]);
useEffect (async () => {
    const response = await fetchActivities()
    setActivities(response)
    console.log('activities', response)
}, [])


return (
    <div id="myRoutines">
        <form id="createRoutine"
                onSubmit={async (event) => {
                event.preventDefault();
                console.log(routineName, routineGoal)
                try {
                const results = await createRoutine(routineName, routineGoal, isPublic);
                location.reload() 
                console.log(results)
                results.message ?
                alert(results.message)
                : alert(results.error.message)
                } catch (error) {
                    console.error(error);
                } finally {
                } document.getElementById("createRoutine").reset()
            }}>
            <h2>Create A New Routine:</h2>
            <fieldset>
                <label><b>Routine Name</b></label>
                <input 
                id="routineName" 
                placeholder="Enter Routine Name" 
                onChange={(event) => setRoutineName(event.target.value)}/>
            </fieldset>
            <fieldset>
                <label><b>Routine Goal</b></label>
                <input id="routineGoal" 
                placeholder="Enter Routine Goal"
                onChange={(event) => setRoutineGoal(event.target.value)}/>
            </fieldset>
            <fieldset>
                    <label>Public Routine?</label>
                    <input type="checkbox"                     
                    onChange={ () => {
                        isPublic
                        ? setIsPublic(false)
                        : setIsPublic(true)
                    }}
                    ></input>
                </fieldset>
            <button
            disabled={ routineName && routineGoal ? false : true}
            >Create Routine!</button>
        </form>
        <hr></hr>
        <div id='myRoutinesList'>
            <h2>My Routines:</h2>
        <hr></hr>
            {routines ?
            routines.map((routine, idx) => {
                if (routine.creatorId === me.id) {
                return (
                    <MyRoutineCard key={ idx } routine={ routine } activities={ activities }/>
                )}}) : <p></p>}
        </div>
    </div>
    )
}

export default CreateRoutine

