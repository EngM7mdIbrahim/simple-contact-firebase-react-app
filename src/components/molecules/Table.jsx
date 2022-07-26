import React from 'react'
import TableRow from '../atoms/TableRow'
import './Table.css'


export const INIT_CONTACTS = [
  {
    id: 1,
    name: 'Nono',
    email: 'nono.ehab@mail.com'
},{
  id: 2,
  name: 'Hamada',
  email: 'hamada.ibrahim@mail.com'
}
]

export default function Table({contacts = INIT_CONTACTS, onDelete}) {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Delete?</th>
      </tr>
      {contacts.map(contact=><TableRow key={contact.id}contact={contact} onDelete={()=>{onDelete(contact.id)}}/>)}
    </table>
  )
}
