import React, { useState } from "react";
import MemberDataService from "../../services/ManagerService";
import { useParams } from "react-router-dom";
import "./Member.css";
import image from "../../Images/home1.jpeg"
import image1 from "../../Images/addimage.png"
import { Card } from "react-bootstrap";
const AddMember = () => {
  const { id } = useParams();
  const initialMemberState = {
    Mem_ID: null,
    Mem_Name: "",
    Mem_Weight: 0,
    Mem_Height: 0,
    Age: 0,
    Gender: "",
    Blood_Type: "",
    Mobile_Number: 0,
    Address: "",
    Emer_Name: "",
    Emer_Mobile: 0
  };
  const [member, setMember] = useState(initialMemberState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };

  const saveMember = () => {
    var data = {
      Mem_Name: member.Mem_Name,
      Mem_Weight: member.Mem_Weight,
      Mem_Height: member.Mem_Height,
      Age: member.Age,
      Gender: member.Gender,
      Blood_Type: member.Blood_Type,
      Mobile_Number: member.Mobile_Number,
      Address: member.Address,
      Emer_Name: member.Emer_Name,
      Emer_Mobile: member.Emer_Mobile
    };

    if(window.confirm("Want to submit?")){
    MemberDataService.create(id, data)
      .then(response => {
        setMember({
          Mem_ID: response.data.Mem_ID,
          Mem_Name: response.data.Mem_Name,
          Mem_Weight: response.data.Mem_Weight,
          Mem_Height: response.data.Mem_Height,
          Age: response.data.Age,
          Gender: response.data.Gender,
          Blood_Type: response.data.Blood_Type,
          Mobile_Number: response.data.Mobile_Number,
          Address: response.data.Address,
          Emer_Name: response.data.Emer_Name,
          Emer_Mobile: response.data.Emer_Mobile
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      setMember(initialMemberState);
      window.location.reload();
    }
  };

  return (
    <div>
      <img src={image} id="imgt2" />
      <div className="member-submit-form" id="member" >
      <Card style={{ height: '60rem', width: '50rem', marginBlockStart: '0rem', textAlign: 'left',boxShadow: 'none' , alignContent: 'center', alignItems: 'center', top: '30px', background: 'transparent', borderColor: 'transparent' }}>
          <div>
            <div className="form-group">
              <br />
              <br />
              <label className="lab f" htmlFor="Mem_Name" align="center">Name</label>
              <input
                type="text"
                className="form-control int"
                id="title"
                required
                size="20"
                value={member.Mem_Name} ß
                onChange={handleInputChange}
                name="Mem_Name"
              />
            </div>

            <div className="form-group">
              <label className="lab" htmlFor="Mem_Weight" align="center">Weight</label>
              <input
                type="number"
                className="form-control int"
                id="Mem_Weight"
                required
                value={member.Mem_Weight}
                onChange={handleInputChange}
                name="Mem_Weight"
              />
            </div>
            <div className="form-group">
              <label className="lab" htmlFor="Mem_Height" align="center">Height</label>
              <input
                type="number"
                className="form-control int"
                id="Mem_Height"
                required
                value={member.Mem_Height}
                onChange={handleInputChange}
                name="Mem_Height"
              />
            </div>
            <div className="form-group">
              <label className="lab" htmlFor="Age" align="center">Age</label>
              <input
                type="number"
                className="form-control int"
                id="Age"
                required
                value={member.Age}
                onChange={handleInputChange}
                name="Age"
              />
            </div>
            <div className="form-group">
              <label className="lab" htmlFor="Gender" align="center">Gender</label>
              <input
                type="text"
                className="form-control int"
                id="Gender"
                required
                value={member.Gender}
                onChange={handleInputChange}
                name="Gender"
              />
            </div>
            <div className="form-group">
              <label className="lab" htmlFor="Blood_Type" align="center">Blood Group</label>
              <input
                type="text"
                className="form-control int"
                id="Blood_Type"
                required
                value={member.Blood_Type}
                onChange={handleInputChange}
                name="Blood_Type"
              />
            </div>
            <div className="form-group">
              <label className="lab" htmlFor="Mobile_Number" align="center">Mobile Number</label>
              <input
                type="tel"
                className="form-control int"
                id="Mobile_Number"
                required
                value={member.Mobile_Number}
                onChange={handleInputChange}
                name="Mobile_Number"
              />
            </div>
            <div className="form-group">
              <label className="lab" htmlFor="Address" align="center">Address</label>
              <input
                type="text"
                className="form-control int"
                id="Address"
                required
                value={member.Address}
                onChange={handleInputChange}
                name="Address"
              />
            </div>
            <div className="form-group">
              <label className="lab" htmlFor="Emer_Name" align="center">Emergency Name</label>
              <input
                type="text"
                className="form-control int"
                id="Emer_Name"
                required
                value={member.Emer_Name}
                onChange={handleInputChange}
                name="Emer_Name"
              />
            </div>
            <div className="form-group">
              <label className="lab" htmlFor="Emer_Mobile" align="center">Emergency Contact</label>
              <input
                type="tel"
                className="form-control int"
                id="Emer_Mobile"
                required
                value={member.Emer_Mobile}
                onChange={handleInputChange}
                name="Emer_Mobile"
              />
            </div>
            <br />
            <button  onClick={saveMember} class="btn btn-outline-info tempBtn">Submit</button>
          </div>
      </Card>
      </div>
      <img src={image1} id="imgt3" />
    </div>
  );
};

export default AddMember;
