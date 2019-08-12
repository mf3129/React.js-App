import React from 'react'; 

const Card = ({ name, email, id, keyValue }) => { //Destructuring to use name/email instead of prop.name and email

    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' key={'${id}'} src={'https://robohash.org/${id}'} height='200' width='200'/>
            <div>
                <h2> {name} </h2> 
                <p> {email} </p>
            </div>
        </div>
    );  
}
//Because this is javascript expression, we must wrap the props in curly braces. Thats
//the way it works in JSX. 
 export default Card;  