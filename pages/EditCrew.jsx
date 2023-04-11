import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../src/client";
import "../src/App.css"


const EditCrew = ({ data }) => {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCrew((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateCrew = async (event) => {
    event.preventDefault();
    const { error } = await supabase
      .from("CrewMate")
      .update({
        name: crew.name,
        age: crew.age,
        skillLevel: crew.skillLevel,
        color: crew.color,
      })
      .eq("id", id);

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

  const deleteCrew = async (event) => {
    event.preventDefault();
    const { error } = await supabase.from("CrewMate").delete().eq("id", id);

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

  return (
    <div>
      <form>
        <label>Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          value={crew.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Age</label>
        <br />
        <input
          type="text"
          id="age"
          name="age"
          value={crew.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Skill Level</label>
        <br />
        <input
          type="text"
          id="skillLevel"
          name="skillLevel"
          value={crew.skillLevel}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Color</label>
        <br />
        <input
          type="text"
          id="color"
          name="color"
          value={crew.color}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" onClick={updateCrew}>
            Update
        </button>
        <button type="submit" className="deleteButton" onClick={deleteCrew}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditCrew;