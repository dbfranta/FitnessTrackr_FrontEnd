import {useState, useEffect} from 'react'
import {updateRoutine, deleteRoutine, addActivity, updateRoutineActivity, deleteRoutineActivity} from '../api';

const MyRoutineCard = ({routine, activities}) => {

    const [routineName, setRoutineName] = useState(routine.name);
    const [routineGoal, setRoutineGoal] = useState(routine.goal);
    const [isPublic, setIsPublic] = useState(routine.isPublic);
    const [activitySelectionId, setActivitySelectionId] = useState(activities)
    const [activityCount, setActivityCount] = useState(0)
    const [activityDuration, setActivityDuration] = useState(0)
    const [routineActivityCount, setRoutineActivityCount] = useState()
    const [routineActivityDuration, setRoutineActivityDuration] = useState()

    return (
        <div id="myRoutinesDisplay" key={routine.id}>
            <p>Routine Name: {routine.name}</p>
            <p>Routine Creator: {routine.creatorName}</p>
            <p>Routine Goal: {routine.goal}</p>
            <p>Public Routine? {routine.isPublic ? "Yes" : "No"} </p>
            <div>{
                routine.activities.map((activity, idx) => {
                    return (
                        <div>
                        <p>Activity: {activity.name}; Description: {activity.description}; Duration: {activity.duration}; Count: {activity.count}</p>
                        <form id="updateRoutineActivity"
                            onSubmit={async (event) => {
                                event.preventDefault();
                                try {
                                const results = await updateRoutineActivity(activity.routineActivityId, routineActivityCount, routineActivityDuration); // -need parameters
                                location.reload() 
                                console.log(results)
                                results.message ?
                                alert(results.message)
                                : alert(results.error.message)
                                } catch (error) {
                                    console.error(error);
                                } finally {
                                } document.getElementById("updateRoutine").reset()
                            }}>
                            <fieldset>
                                <label><b>Change Activity Count</b></label>
                                <input 
                                id="routineActivityCount" 
                                placeholder="Enter New Count" 
                                onChange={(event) => setRoutineActivityCount(event.target.value)}/>
                            </fieldset>
                            <fieldset>
                                <label><b>Change Activity Duration</b></label>
                                <input 
                                id="routineActivityDuration" 
                                placeholder="Enter New Duration" 
                                onChange={(event) => setRoutineActivityDuration(event.target.value)}/>
                            </fieldset>
                            <button>Update This Routine Activity</button>
                        </form>
                        <button onClick={()=>{deleteRoutineActivity(activity.routineActivityId);
                            alert(`Routine Activity "${activity.name}" will be deleted`)
                            location.reload()}}>Delete this Activity from Routine?</button>
                        </div>
                    )
                })
            }
            </div>
            <form id="updateRoutine"
                onSubmit={async (event) => {
                event.preventDefault();
                try {
                const results = await updateRoutine(routine.id, routineName, routineGoal, isPublic); 
                location.reload() 
                results.message ?
                alert(results.message)
                : alert(results.error.message)
                } catch (error) {
                    console.error(error);
                } finally {
                } document.getElementById("updateRoutine").reset()
            }}>
            <fieldset>
                <label><b>Change Name</b></label>
                <input 
                id="routineName" 
                placeholder="Enter New Name" 
                onChange={(event) => setRoutineName(event.target.value)}/>
            </fieldset>
            <fieldset>
                <label><b>Change Goal</b></label>
                <input id="routineGoal" 
                placeholder="Enter Routine Goal"
                onChange={(event) => setRoutineGoal(event.target.value)}/>
            </fieldset>
            <fieldset>
                <label>Make Public?</label>
                <input type="checkbox"                     
                onChange={ () => {
                    isPublic
                    ? setIsPublic(false)
                    : setIsPublic(true)
                }}
                ></input>
            </fieldset>
            <button>Edit Routine</button>
            </form> 
            <form id="addActivity"
                onSubmit={async (event) => {
                event.preventDefault();
                try {
                const results = await addActivity(routine.id, activitySelectionId, activityCount, activityDuration); // -need parameters -removed:routine.id, routineName, routineGoal, isPublic
                location.reload() 
                console.log(results)
                results.message ?
                alert(results.message)
                : alert(results.error.message)
                } catch (error) {
                    console.error(error);
                } finally {
                } document.getElementById("addActivity").reset()
            }}>
            <fieldset>
                <label><b>Add Activity</b></label>
                <select 
                name="Activity"
                id="select-activity"
                value={activitySelectionId} 
                onChange={(event) =>  setActivitySelectionId(event.target.value)}>
                <option value="any">Click to Select an Activity</option>
                {activities.map(activity => {
                    return <option value={activity.id}>{activity.name}</option>
                })}
                </select>
            </fieldset>
            <fieldset>
                <label><b>Activity Count</b></label>
                <input 
                id="activityCount" 
                placeholder="Enter Activity Count" 
                onChange={(event) => setActivityCount(event.target.value)}/>
            </fieldset>
            <fieldset>
                <label><b>Activity Duration</b></label>
                <input id="activityDuration" 
                placeholder="Enter Activity Duration"
                onChange={(event) => setActivityDuration(event.target.value)}/>
            </fieldset>
            <button>Add Activity</button>
            </form>
        <button onClick={()=>{deleteRoutine(routine.id);
        alert(`Routine "${routine.name}" will be deleted`)
        location.reload()}}>Delete this Routine?</button>
        <hr></hr>
        </div>
    )
}

export default MyRoutineCard;

