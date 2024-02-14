// 3rd step

import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

const Addupdate = ({ isOpen, onClose, isUpdate,contact }) => {
  const addContact = async (contactValues) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contactValues);
      onClose()
      toast.success("contact Added successfully")
      
    } catch (error) {
      console.log(error);
    }
  };
  const upDateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose()
      toast.success("contact updated succesfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={
            isUpdate
              ? {
                  Name: contact.Name,
                  Email: contact.Email,
                }
              : {
                  Name: "",
                  Email: "",
                }
          }
          onSubmit={(values) => {
            isUpdate
              ? upDateContact(values, contact.id)
              : // console.log(values)
                addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="Name">Name</label>
              <Field name="Name" className="border h-10" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="Email">Email</label>
              <Field type="Email" name="Email" className="border h-10" />
            </div>

            <button className="bg-orange-500 px-3 text-white py-1 border self-end  rounded-lg">
              {isUpdate ? "update" : "add"} contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default Addupdate;
