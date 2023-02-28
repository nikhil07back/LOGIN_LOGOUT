import { useEffect } from 'react'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authSlice'
import { toast } from 'react-toastify'


function Login() {

  const {user , isLoading , isSuccess , message , isError} = useSelector(state=>state.auth)

  
  const [formData, setFormData] = useState({ 
    
    email : "",
    password : "" 
    
    
  })
  
  const {email , password } = formData 
  
  
  
  const dispatch = useDispatch()

  const handleChange = (e) => {
   setFormData( { 
    ...formData, 
    [e.target.name] : e.target.value
   })
  }



  const handleSumbit = (e) => { 
    e.preventDefault()



    const userData = { 
      email ,
      password

    }

  dispatch(login(userData))
  }


  useEffect(()=> { 
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
     
      
      toast.error(message)
    }

  },[user , isLoading , isSuccess , message , isError , dispatch])


  

  return (
    <div>
    <section className='heading'>
          <h1>
          Login
          </h1>
          <p>Please log in to get support</p>
        </section>
  
        <section className='form' onSubmit={(e) => handleSumbit(e)}>
          <form>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                value={email}
                onChange={(e)=>handleChange(e)}
                placeholder='Enter your email'
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                value={password}
                onChange={(e) => handleChange(e)}
                placeholder='Enter password'
                required
              />
            </div>
            <div className='form-group'>
              <button className='btn btn-block'>Submit</button>
            </div>
          </form>
        </section>
  </div>
  )
}

export default Login
