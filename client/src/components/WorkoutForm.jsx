import axios from "axios";
import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/api/workouts", {
        title,
        load,
        reps,
      })
      .then((result) => {
        setTitle("");
        setLoad("");
        setReps("");
        setError(null);
        console.log("New Workout Added", result);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  };
  return (
    <div className="form-bg">
      <form className="create" onSubmit={handleSumbit}>
        <h3>Add a new Workout</h3>

        <label>Exercise Title:</label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />

        <label>Load(in Kg):</label>
        <input
          type="number"
          onChange={(e) => {
            setLoad(e.target.value);
          }}
          value={load}
        />

        <label>Reps:</label>
        <input
          type="number"
          onChange={(e) => {
            setReps(e.target.value);
          }}
          value={reps}
        />

        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default WorkoutForm;
