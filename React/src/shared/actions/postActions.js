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


//User Active
export function rantVote(token,voteobj) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Token':token },
        body: JSON.stringify(voteobj)     
    };
         
    return fetch(actionType.POST_VOTE_UP_URL,requestOptions)     
            .then(res => res.json())
            .then(resPostVoteobj => {                                       
             	console.log(resPostVoteobj);
            
               return resPostVoteobj;  
            })
            .catch(error => {
              return error;
            });         
}