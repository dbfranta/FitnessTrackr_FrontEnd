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