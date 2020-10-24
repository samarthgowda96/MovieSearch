import React,{useState,useEffect} from 'react';

function GitHub({user}){
    const[data, setData]= useState(null);
    useEffect(()=>{
        fetch(`https://api.github.com/users/${user}`)
        .then(response=> response.json())
        .then(setData)
        .catch(console.error);
    },[] );
console.log({data})
    if(data ){
        return( 
        <div> 
            <h1>{data.login} </h1>
            <h2>{data.public_repos}</h2>
            <img src={data.avatar_url} width={200}/>
        </div>
    
        )
    }
    else return null;

}
function Api(){
    return <GitHub user="samarthgowda96"/>
}

export default Api;