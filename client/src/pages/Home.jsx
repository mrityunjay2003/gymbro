import { useState, useEffect } from "react";
import axios from "axios";

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/workouts", {
          withCredentials: true,
        });
        const workouts = response.data;

        setWorkouts(workouts);
      } catch (error) {
        console.error("Error fetching workouts: ", error);
      }
    };
    fetchWorkouts();
  }, [workouts]);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm/>
    </div>
  );
};

export default Home;
