import React from "react";
import DetailView from "../components/DetailView";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailCrew = ({ data }) => {
    const { id } = useParams();
    const [crew, setCrew] = useState({
        id: null,
        name: "",
        age: "",
        skillLevel: "",
        color: "",
      });
    
      useEffect(() => {
          const result = data.filter((item) => String(item.id) === id)[0];
        setCrew({
          name: result.name,
          age: result.age,
          skillLevel: result.skillLevel,
          color: result.color,
        });
      }, [data, id]);

    return ( 
        <DetailView name={crew.name} age={crew.age} skillLevel={crew.skillLevel} color={crew.color}/>
    );
  };
  
  export default DetailCrew;