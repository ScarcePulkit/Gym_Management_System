import React, { useState, useEffect } from "react";
import WorkoutService from "../../services/ManagerService";
import { Link, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import image from "../../Images/home.jpg"


const WorkoutList = () => {

  const [workout, setWorkout] = useState([]);
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchMem_Name, setSearchMem_Name] = useState("");

  useEffect(() => {
    retrieveWorkouts();
  }, []);

  const onChangeSearchMem_Name = e => {
    const searchMem_Name = e.target.value;
    setSearchMem_Name(searchMem_Name);
  };

  const retrieveWorkouts = () => {
    WorkoutService.getAllWorkout()
      .then(response => {
        setWorkout(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveWorkouts();
    setCurrentWorkout(null);
    setCurrentIndex(-1);
  };

  const setActiveWorkout = (workout, index) => {
    setCurrentWorkout(workout);
    setCurrentIndex(index);
  };

  //   const removeAllWorkouts = () => {
  //     WorkoutDataService.removeAll()
  //       .then(response => {
  //         console.log(response.data);
  //         refreshList();
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   };

  //   const findByMem_Name = () => {
  //     WorkoutDataService.findByMem_Name(searchMem_Name)
  //       .then(response => {
  //         setWorkout(response.data);
  //         console.log(response.data);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   };

  return (
    <div className="list row" align="center">
    <img src={image} id="imgt2" />  
    <div className="">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Mem_Name"
            value={searchMem_Name}
            onChange={onChangeSearchMem_Name}
          />
          {
            //       <div className="input-group-append">
            //     <button
            //       className="btn btn-outline-secondary"
            //       type="button"
            //       onClick={findByMem_Name}
            //     >
            //       Search
            //     </button>
            //   </div>
          }
        </div>
      </div>
      <br/>
      <br/>
      
      <div className="" align="center" margin-left="auto" margin-right="auto" width="50%" vertical-align="center">
      <br/>
      <br/>
      <br/>
        <h4 className="lab">Workouts List</h4>
        <br/>

        {/* khushil working */}

        <Table striped bordered hover variant="dark" align="center" dataAlign="center" style={{ background: "black", opacity: "0.8", textAlign: "center", borderRadius: '20px', marginInlineStart: '1rem' }}>
          <thead>
            <tr>

              <th>Workout ID</th>
              <th>Workout Name</th>
              <th>Diet Chart</th>
              <th>Duration</th>

            </tr>
          </thead>

          {workout.map((workout, index) => (
            <tr>
              <td>{workout.Workout_ID}</td>
              <td>{workout.Workout_Name}</td>
              <td>{workout.Diet_Chart}</td>
              <td>{workout.Duration}</td>

              <td>
                <Link
                  to={"/workout/edit/" + workout.Workout_ID}
                  className="badge badge_warning">Edit</Link>
              </td>
              <td>{/*<button className="m-3 btn-sm btn-danger" onClick={() => { deleteBranch(branch_manager.Branch_ID) }}>Delete</button>*/}</td>
            </tr>
          ))}
        </Table>

        {/* <ul className="list-group">
          {workout &&
            workout.map((workout, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => {
                  setActiveWorkout(workout, index)
                  console.log(workout.Workout_Name)
                }
                }
                key={index}
              >
                {workout.Workout_Name}
              </li>
            ))}
        </ul> */}

        {
          //     <button
          //   className="m-3 btn btn-sm btn-danger"
          //   onClick={removeAllWorkouts}
          // >
          //   Remove All
          // </button>
        }
      </div>
      {
        //   <div className="col-md-6">
        //   {currentWorkout ? (
        //     <div>
        //       <h4>Workouts</h4>
        //       <div>
        //         <label>
        //           <strong>Mem_Name:</strong>
        //         </label>{" "}

        //         {currentWorkout.Workout_ID}
        //       </div>
        //       <Link
        //         to={"/editworkout/" + currentWorkout.Workout_ID}
        //         className="badge badge-warning"
        //       >
        //         Edit
        //       </Link>
        //     </div>
        //   ) : (
        //     <div>
        //       <br />
        //       <p>Please click on a Workout...</p>
        //     </div>
        //   )}
        // </div>
      }
    </div>
  );
};

export default WorkoutList;