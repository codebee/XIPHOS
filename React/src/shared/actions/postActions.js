import * as actionType from './actionType';

//User Active
export function getRantList(token) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'X-Token':token }       
    };
         
    return fetch(actionType.POST_LIST_URL,requestOptions)     
            .then(res => res.json())
            .then(resPostListobj => {                                       
             	console.log(resPostListobj);
            
               return resPostListobj;  
            })
            .catch(error => {
              return error;
            });         
}