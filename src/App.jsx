
import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import CardUsers from './components/CardUsers'
import FormUsers from './components/FormUsers'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [formClosed, setFormClosed] = useState(true)

  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  } = useUserCrud()

  useEffect(() => {
    getAllUsers()
  }, [])

  const handleOpenForm = () => {
    setFormClosed(false)
  }

  return (
    <div className="App">
      <header className='App__Header'>
        <h2 className='Header__Title'>Users</h2>
        <button className='Header__Btn' onClick={handleOpenForm}>Create New User</button>
      </header>
      <FormUsers
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setFormClosed={setFormClosed}
        formClosed={formClosed}
      />
      <section className='App__Container--CardUsers'>
          {
            users?.map(user => (
              <CardUsers
                key={user.id}
                user={user}
                deleteUserById={deleteUserById}
                setUpdateInfo={setUpdateInfo}
                handleOpenForm={handleOpenForm}
              />
            ))
          }
      </section>
    </div>
  )
}

export default App
