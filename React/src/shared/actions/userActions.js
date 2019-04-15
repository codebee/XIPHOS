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
               return resUserobj;  
            })
            .catch(error => {
              return error;
            });         
}


//User Deactive
export function userDeActive() {  
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Token':'WCdSSzNPf5siyxoRPp1T9J' },
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
