import { deleteDoc,doc } from 'firebase/firestore'
import React from 'react'
import { FaRegEdit, FaRegUserCircle, FaTrashAlt } from 'react-icons/fa'
import { db  } from '../config/firebase'
import Addupdate from './Addupdate'
import useDisclouse from '../Hooks/useDisclouse'
import { toast } from 'react-toastify'

const ContactCard = ({contact}) => {

  const{isOpen, onClose, onOpen}= useDisclouse();

  const deleteContact= async(id)=>{
    try{
      await deleteDoc(doc(db, "contacts", id))
      toast.success("contact deleted successfully")
    }
    catch(error){
      console.log(error)
    }

  }
  return (
    <>
    <div >
       
        <div key={contact.id} className='bg-yellow-500 flex justify-between p-2 rounded-lg'>
          <div className='flex gap-2'>
          <FaRegUserCircle className='text-4xl text-blue-400' />

          <div className=' ' >
            <h2  className='font-medium' >{contact.Name}</h2>
            <p className='text-sm'>{contact.Email}</p>
          </div>
          </div>


        <div className='flex text-3xl gap-1 '>
          <FaRegEdit onClick={onOpen} className='cursor-pointer' />
          <FaTrashAlt  onClick={()=>deleteContact(contact.id)} className='text-blue-500 cursor-pointer' />
        </div>
        </div>
      
    </div>

    <Addupdate isUpdate contact={contact} isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default ContactCard;

