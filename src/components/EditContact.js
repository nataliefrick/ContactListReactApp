import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http-common";
 
const EditContact = () => {
  // initiate form and variables
  const [contactName, setName] = useState("");
  const [contactEmail, setEmail] = useState("");
  const [contactTelephone, setTelephone] = useState("");
  const [contactAddress, setAddress] = useState("");
  const [contactGender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getContactById(); // this will fire only on first render
  }, []);


  // get existing contact information
  const getContactById = async () => {
    const response = await http.get(`/${id}`);
    setName(response.data.contactName);
    setEmail(response.data.contactEmail);
    setTelephone(response.data.contactTelephone);
    setAddress(response.data.contactAddress);
    setGender(response.data.contactGender);
  };
 
  const updateContact = async (e) => {
    e.preventDefault();
    try {
      await http.patch(`/${id}`, {
      // await axios.patch(`http://localhost:3000/contacts/${id}`, {
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
        <form onSubmit={updateContact}>
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
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditContact;