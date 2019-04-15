import * as actionType from './actionType';

//User Active
export function userActive(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
         
    return fetch(actionType.USER_ACTIVATE_URL,requestOptions)     
            .then(res => res.json())
            .then(resUserobj => {                                       
             	 console.log(resUserobj);

               actionType.setLocalStorage('logged-in', JSON.stringify(resUserobj));

               return resUserobj;  
            })
            .catch(error => {
              return error;
            });         
}


//User Deactive
export function userDeActive(token) { 

    console.log("token from local stroge ",token); 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Token':token },
        body: ""
    };
         
    return fetch(actionType.USER_DEACTIVATE_URL,requestOptions)     
            .then(res => res.json())
            .then(resUserobj => {                                                      
               return resUserobj;  
            })
            .catch(error => {
              return error;
            });         
}
