import React from 'react'
import Button from './Button';
import './TableRow.css'

const INIT_CONTACT = {
    id: 1,
    name: 'Nono',
    email: 'nono.ehab@mail.com'
}

export default function TableRow({contact = INIT_CONTACT,onDelete}) {
    const {id,email,name} = contact;
  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td><Button onClick={onDelete}/></td>
    </tr>
  )
}
