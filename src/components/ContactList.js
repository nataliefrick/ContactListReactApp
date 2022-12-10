import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../http-common";
 
const ContactList = () => {
  const [contacts, setContact] = useState([]);
  const [selectedContact = [], setSelected] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);
 
  const getContacts = async () => {
    try {
      const response = await http.get("/");
      setContact(response.data);
    } catch (error) {
      console.log(error);
    }
  };
 
  const deleteContact = async (id) => {
    try {
      await http.delete(`/${id}`);
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const showContact = async (id) => {
    try {
      const response = await http.get(`/${id}`);
      setSelected(response.data);
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-two-third">
        <h1 className="has-text-primary is-uppercase has-text-weight-bold">Contacts</h1>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact._id}>
                <td>{index + 1}</td>
                <td>{contact.contactName}</td>
                <td>
                <button
                    onClick={() => showContact(contact._id)}
                    className="button is-primary is-small"
                  >
                    View
                  </button>
                  <Link
                    to={`edit/${contact._id}`}
                    className="button is-info is-small mr-1 ml-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteContact(contact._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="column is-one-third m-5 p-5 bg-grey-lighter max-h-200">
        <h1 className="has-text-primary is-uppercase has-text-weight-bold">Contact Description</h1>
        <div>
          <label>
            <strong>Name:</strong>
          </label>{" "}
          {selectedContact.contactName}
        </div>
        <div>
          <label>
            <strong>Email:</strong>
          </label>{" "}
            {selectedContact.contactEmail}
        </div>
        <div>
          <label>
            <strong>Telephone:</strong>
          </label>{" "}
            {selectedContact.contactTelephone}
        </div>
        <div>
          <label>
            <strong>Address:</strong>
          </label>{" "}
            {selectedContact.contactAddress}
        </div>
        <div>
          <label>
            <strong>Name:</strong>
          </label>{" "}
            {selectedContact.contactGender}
        </div>
      </div>
    </div>
  );
  
};
 
export default ContactList;