
import React , {useEffect , useState} from 'react'
import axios from 'axios'
const UserList = () => {
    const [userList, setUserList] = useState([]);
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUserList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])
  return (
    <div className='container'>
         {userList.map(user => (
            <div className='form' >
                <p>Name:  {user.name}</p>
                <p>UserName:  {user.username}</p>
                <p>Email:  {user.email}</p>
            </div>
        ))}
        
        </div>
  )
}

export default UserList