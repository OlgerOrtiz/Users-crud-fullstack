import React from 'react'
import './cardUsers.css'
import alertDelete from '../utils/alertDelete'
import alertOpenFormUpdate from '../utils/alertOpenFormUpdate'

const CardUsers = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {

  const handleDelete = () => {
    alertDelete(deleteUserById, user)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)

    alertOpenFormUpdate(handleOpenForm)
  }

  return (
    <article className='CardsUsers__Content'>
      <h2 className='CardUser__Name'>{user.first_name} {user.last_name}</h2>
      <ul className='CardUser__Info'>
        <li className='Info__List'><span className='Info__Label'>Email</span><span className='Info__Input'>{user.email}</span></li>
        <li className='Info__List'><span className='Info__Label'> Birthday </span><span className='Info__Input'><i className='bx bxs-gift'></i>{user.birthday}</span></li>
      </ul>
      <section className='CardUser__Icons'>
        <i className='bx bxs-trash' onClick={handleDelete}></i>
        <i className='bx bx-edit-alt' onClick={handleUpdate}></i>
      </section>
    </article>

  )
}

export default CardUsers