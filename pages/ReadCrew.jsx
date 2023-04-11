import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';


const ReadCrew = (props) => {

    const [crew, SetCrew] = useState([]);

    useEffect(() => {
        SetCrew(props.data);
    }, [props]);
    
    return (
        <div className="ReadCrew">
            {
                crew && crew.length > 0 ?
                crew.map((crew) => 
                   <Card key={crew.id} id={crew.id} name={crew.name} age={crew.age} skillLevel={crew.skillLevel} color={crew.color}/>
                ) : <h3>No Crew Members</h3>
            }
        </div>  
    )
}

export default ReadCrew;