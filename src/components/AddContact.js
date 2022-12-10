import React, { useState } from "react";
import http from "../http-common";
import { useNavigate } from "react-router-dom";
 
const AddContact = () => {
  const [contactName, setName] = useState("");
  const [contactEmail, setEmail] = useState("");
  const [contactTelephone, setTelephone] = useState("");
  const [contactAddress, setAddress] = useState("");
  const [contactGender, setGender] = useState("Male");
  const navigate = useNavigate();
 
  const saveContact = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("http://localhost:3000/contacts"
      await http.post("/", {
        contactName,
        contactEmail,
        contactTelephone,
        contactAddress,
        contactGender
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveContact}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={contactName}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={contactEmail}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Telephone</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={contactTelephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="Telephone"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Address</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={contactAddress}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={contactGender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddContact;