const RoutineCard = ({routine}) => {
    return (
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
    )
}

export default RoutineCard;

