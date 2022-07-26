import "./App.css";
import Table, { INIT_CONTACTS } from "./components/molecules/Table";
import Header from "./components/molecules/Header";
import { useEffect, useState } from "react";
import {db} from './services/firebaseConfig';
import {collection, getDocs,doc, deleteDoc,addDoc} from "firebase/firestore"; 

function App() {
  const [contacts, setContacts] = useState(INIT_CONTACTS);

  const addContact = async (contact) => {
    try {
      const docRef = await addDoc(collection(db, "user-contacts"), contact);
      getContacts();
    } catch (e) {
      console.error("Error adding contact: ", e);
    }
  };

  const deleteContact = async (id) => {
    try{
      let response = await deleteDoc(doc(db, "user-contacts", id));
    getContacts();
  }catch (e) {
      console.error("Error deleting contact: ", e);
    }
  };

  const getContacts = async () => {
    console.log('Entered!')
    const querySnapshot = await getDocs(collection(db, "user-contacts"));
    let contacts = [];
    querySnapshot.forEach((doc) => {
      let contact = doc.data();
      contact.id = doc.id;
      contacts.push(contact)
    });
    setContacts(contacts);
  };

  useEffect(()=>{
    getContacts();
  },[])
  return (
    <div className="App">
      <Header onNewAdd={addContact} />
      <Table contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
