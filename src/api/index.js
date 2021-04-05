export async function getMe() {
  try {
      const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        }).then(response => response.json())
          .catch(console.error);
          return response
  } catch(error){
      throw error
  }
}

export async function fetchMyRoutines(userName) {
  try {
      const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${userName}/routines`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
        }).then(response => response.json())
          .catch(console.error);
          return response
  } catch(error){
      throw error
  }
}

export async function fetchRoutines() {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(response => response.json())
            .catch(console.error);
            return response
    } catch(error){
        throw error
    }
}

export async function fetchActivities() {
  try {
      const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => response.json())
          .catch(console.error);
          return response
  } catch(error){
      throw error
  }
}

export async function registerUser(userName, userPassword) {
  console.log(userName, userPassword)
  try{ 
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: userName,
          password: userPassword
      })
    }); const data = await response.json();
      console.log(data)
      return data
  } catch (error) {
    throw error;
  }
}

export async function userLogin(userName, userPassword) {
  try {
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: userName,
          password: userPassword
      })
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error);
  }
}

export async function createRoutine(routineName, routineGoal, isPublic) {
  try{
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        name: routineName,
        goal: routineGoal,
        isPublic: isPublic
      })
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error);
  }
}

export async function updateRoutine(routineId, routineName, routineGoal, isPublic) {
  console.log(routineId, routineName, routineGoal, isPublic)
  try{ 
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
          name: routineName,
          goal: routineGoal,
          isPublic: isPublic
      })
    }); const data = await response.json();
      console.log(data)
      return data
  } catch (error) {
    throw error;
  }
}

export async function deleteRoutine(routineId) {
  console.log(routineId)
  try{ 
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }); const data = await response.json();
      console.log(data)
      return data
  } catch (error) {
    throw error;
  }
}

export async function addActivity(routineId, activityId, count, duration) {
  console.log(routineId, activityId, count, duration)
  try{ 
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}/activities`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
          activityId: activityId,
          count: count,
          duration: duration
      })
    }); const data = await response.json();
      console.log(data)
      return data
  } catch (error) {
    throw error;
  }
}

export async function updateRoutineActivity(routineActivityId, count, duration) {
  console.log(routineActivityId, count, duration)
  try{ 
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${routineActivityId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        count: count,
        duration: duration
      })
    }); const data = await response.json();
      console.log(data)
      return data
  } catch (error) {
    throw error;
  }
}

export async function deleteRoutineActivity(routineActivityId) {
  console.log(routineActivityId)
  try{ 
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${routineActivityId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }); const data = await response.json();
      console.log(data)
      return data
  } catch (error) {
    throw error;
  }
}

export async function createActivity(activityName, activityDescription) {
  try{
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        name: activityName,
        description: activityDescription
      })
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error);
  }
}