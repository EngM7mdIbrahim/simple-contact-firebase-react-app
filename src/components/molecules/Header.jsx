import React, { useState } from "react";
import Button from "../atoms/Button";
import "./Header.css";

export default function Header({ onNewAdd }) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });
  return (
    <div className="header-container">
      <h1>Contacts</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="Name"
        value={contact.name}
        onChange={(event) => {
          setContact({ ...contact, name: event.target.value });
        }}
      />
      <input
        type="email"
        name=""
        id=""
        placeholder="Email"
        value={contact.email}
        onChange={(event) => {
          setContact({ ...contact, email: event.target.value });
        }}
      />
      <Button isDelete={false} text={"New Contact"} onClick={()=>{onNewAdd(contact)}} />
    </div>
  );
}
