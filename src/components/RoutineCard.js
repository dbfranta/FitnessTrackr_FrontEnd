import {useState, useEffect} from 'react'
import {fetchRoutines} from '../api/index'

const RoutineCard = ({routine}) => {
    return (
        routine.activities[0]
        ?
        <div key={routine.id}>
            <p>Routine Name: {routine.name}</p>
            <p>Routine Creator: {routine.creatorName}</p>
            <div>{
                routine.activities.map((activity, idx) => {
                    return (
                        <p>Activity: {activity.name}; Description: {activity.description}; Duration: {activity.duration}; Count: {activity.count}</p>
                    )
                })
            }
            </div>
            <hr></hr>
        </div>
        :
        <div></div>
    )
}

export default RoutineCard;