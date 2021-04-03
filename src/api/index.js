export async function fetchRoutines() {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(response => response.json())
            
            //.then(result => {
              //console.log(result);
            //})
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