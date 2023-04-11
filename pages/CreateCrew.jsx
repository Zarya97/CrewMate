import React from "react";
import { useState } from "react";
import { supabase } from "../src/client";
import "../src/App.css";

const CreateCrew = () => {
  const [crew, setCrew] = useState({
    name: "",
    age: "",
    skillLevel: "",
    color: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCrew((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createCrew = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("CrewMate")
      .insert({
        name: crew.name,
        age: crew.age,
        skillLevel: crew.skillLevel,
        color: crew.color,
      })
      .select();

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
        <button type="submit" onClick={createCrew}>
            Create
        </button>
      </form>
    </div>
  );
};

export default CreateCrew;