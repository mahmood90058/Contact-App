import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { FaSearch } from "react-icons/fa";

import { FaPlusCircle } from "react-icons/fa";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { FaRegUserCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import ContactCard from "./Components/ContactCard";
import Addupdate from "./Components/Addupdate";
import useDisclouse from "./Hooks/useDisclouse";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const{isOpen, onClose, onOpen}= useDisclouse();
  // const[isOpen, setOpen] = useState(false);

  // const onOpen=()=>
  //   setOpen(true)
  // }

  // const onClose= ()=>{
  //   setOpen(false)
  // }

  

  
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        // const snapShot = await getDocs(contactRef);
        // console.log(snapShot)
        onSnapshot(contactRef,(snapshot)=>{
          const ContactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          // console.log(ContactList)
          setContacts(ContactList);
          return ContactList

        })
       
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts=(e)=>{
    const value= e.target.value;
    const contactRef = collection(db, "contacts");
        // const snapShot = await getDocs(contactRef);
        // console.log(snapShot)
        onSnapshot(contactRef,(snapshot)=>{
          const ContactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          // console.log(ContactList)


          const filterContact= ContactList.filter((contact)=>(
            contact.Name.toLowerCase().includes(value.toLowerCase())
          ))




          setContacts(filterContact);
          return filterContact

        })
    



  }
  return (
    <>
      <div className="max-w-[367px] mx-auto px-3">
        <Navbar />

        <div className="flex gap-4  ">
          <div className="flex relative items-center flex-grow ">
            <FaSearch className="flex absolute text-white  text-3xl" />
            <input onChange={filterContacts}
              type="text"
              className="px-10 bg-transparent border h-10 text-white rounded-lg font-medium flex-grow "
            />
          </div>

          <FaPlusCircle onClick={onOpen} className="flex text-white text-4xl cursor-pointer " />
        </div>

        <div className=" flex flex-col mt-4 gap-2">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>

{/* /* *********** * addipdate */}

<Addupdate isOpen={isOpen} onClose={onClose}/>

<ToastContainer/>





     
    </>
  );
};

export default App;




