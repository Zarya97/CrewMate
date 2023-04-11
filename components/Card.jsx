import React from "react";
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className="Card" style={{ backgroundColor: props.color }}>
      <img className = "mateImg" src="../mate.png"/>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <Link to={'edit/' + props.id}><button className="editButton">Edit</button></Link>
      <Link to={'/'+ props.id}><button className="editButton">More Info</button></Link>
    </div>
  );
};

export default Card;