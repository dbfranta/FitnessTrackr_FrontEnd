import { useEffect, useState } from "react";
import {fetchActivities, createActivity} from '../api';
import ActivitiesCard from '../components/ActivitiesCard';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [activityName, setActivityName] = useState('');
    const [activityDescription, setActivityDescription] = useState('');
    useEffect (async () => {
        const response = await fetchActivities()
        setActivities(response)
    }, [])
    return (
        <div id="activites">
            {!localStorage.getItem('token') ? 
            <p></p> :
            <form id="createActivity"
            onSubmit={async (event) => {
            event.preventDefault();

            try {
            const results = await createActivity(activityName, activityDescription);
            location.reload() 
            console.log(results)
            results.message ?
            alert(results.message)
            : alert(results.error.message)
            } catch (error) {
                console.error(error);
            } finally {
            } document.getElementById("createActivity").reset()
        }}>
        <h2>Create New Activity:</h2>
        <fieldset>
            <label><b>Activity Name</b></label>
            <input 
            id="activityName" 
            placeholder="Enter Activity Name" 
            onChange={(event) => setActivityName(event.target.value)}/>
        </fieldset>
        <fieldset>
            <label><b>Activity Description</b></label>
            <input 
            id="activityDescription" 
            placeholder="Enter Activity Description" 
            onChange={(event) => setActivityDescription(event.target.value)}/>
        </fieldset>
        <button>Create Activity</button>
        </form>}
            <hr></hr>
            <h2>Current Activites List:</h2>
            <hr></hr>
            <div id='activities'>
                {activities.map((activity, idx) => {
                    return (
                        <ActivitiesCard key={ idx } activity={ activity }/>
                    )})
                }
            </div>
        </div>
    )
}

export default Activities