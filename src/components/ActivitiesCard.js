import {useState, useEffect} from 'react'
import {fetchRoutines} from '../api/index'

const ActivitiesCard = ({activity}) => {
    return (
        <div key={activity.id}>
            <p>Activity Name: {activity.name}</p>
            <p>Activity Description: {activity.description}</p>
            <hr></hr>
        </div>
    )
}

export default ActivitiesCard;
