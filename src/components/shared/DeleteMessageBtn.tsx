'use client'
import { deleteData } from '@/actions/contact'
import React from 'react'


type Props = {
  onClick: () => void
}

const DeleteMessageBtn = ({ id }:{id:string}) => {
    
    const deletedata = async () => {
        console.log(id)
        const data = await deleteData(id);
        return data;
    }
  return (
    <button
      onClick={deletedata}
      className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Delete
    </button>
  )
}

export default DeleteMessageBtn