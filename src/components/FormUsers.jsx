import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import './formUsers.css'
import Swal from 'sweetalert2'
import alertConfirmUpdate from '../utils/alertConfirmUpdate'


const FormUsers = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormClosed, formClosed }) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    const submit = data => {
        if (updateInfo) {
            alertConfirmUpdate(
                updateUserById,
                updateInfo,
                data,
                setUpdateInfo
            )
            setFormClosed(true)
            setUpdateInfo()
        } else {
            createNewUser(data)
            setFormClosed(true)
                Swal.fire({
                    icon: 'success',
                    title: 'User created successfully',
                    timer: '1200',
                    showConfirmButton: false,
                    customClass: {
                        title: 'Alert__Success--Title',
                    }
                
                })
            }
        reset(defaultValues)
    }

    const handleExit = () => {
        setFormClosed(true)
        reset(defaultValues)
        setUpdateInfo()
    }

    return (
        <article className={`Content__Form ${formClosed ? 'Closed' : ''}`}>
            <form className='Form' onSubmit={handleSubmit(submit)} >
                <h2 className='Form__Title'>{updateInfo ? 'Update User' : 'Create New User'}</h2>
                <section>
                    <label htmlFor="email">Email </label>
                    <input {...register('email')} type="email" id="email" required />
                </section>
                <section>
                    <label htmlFor="password">Password </label>
                    <input {...register('password')} type="password" id="password" required />
                </section>
                <section>
                    <label htmlFor="first_name">First Name </label>
                    <input {...register('first_name')} type="text" id="first_name" required />
                </section>
                <section>
                    <label htmlFor="last_name">Last Name </label>
                    <input {...register('last_name')} type="text" id="last_name" required />
                </section>
                <section>
                    <label htmlFor="birthday">Birthday </label>
                    <input {...register('birthday')} type="date" id="birthday" required />
                </section>
                <button className='Form__Btn'>{updateInfo ? 'Update user' : 'Create New User'}</button>
                <i onClick={handleExit} className='bx bxs-x-circle' ></i>
            </form>
        </article>
    )
}

export default FormUsers