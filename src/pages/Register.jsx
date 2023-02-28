import React from 'react'
import { useState } from 'react'
import { register } from '../features/auth/authSlice'
import {useDispatch , useSelector } from "react-redux" 
import { useEffect } from 'react'
import { reset } from '../features/auth/authSlice'
import {toast} from 'react-toastify'



function Register() {

  const {message , isSuccess , isLoading , isError , user } = useSelector((state => state.auth))



  const dispatch = useDispatch()

  const [formData , setFormData] = useState({ 
    name : "", 
    email : "", 
    password :  " ",
    password2 : " " 
  })

  const {name , email , password , password2 } = formData

  const handleChange = (e) => {
    
    setFormData ( { 
      ...formData,
      [e.target.name]  : e.target.value

    })

  }


  const handleSubmit = (e) => { 
    e.preventDefault()


    if(password !== password2 ){ 
      toast.error("Passwords Don't Match!!")
    }

    const userData =  {
      name , 
      email, 
      password

    }

   dispatch( register(userData))
  }


  useEffect(()=>  {

    if(user || isSuccess) { 
      toast.success(message)
     
    }
    if(isError ) { 
      toast.error(message)
    }

  },[message , isSuccess , isLoading , isError , user  ,dispatch ])





  return (

    <>
           <section className='heading'>
            <h1>
               Register
            </h1>
            <p>Please create an account</p>
          </section>
    
          <section className='form'>
            <form onSubmit={(e)=>handleSubmit(e)} >
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  value={name}
                  onChange={(e)=>handleChange(e)}
                  placeholder='Enter your name'
                  required
                />
              </div>
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
                  onChange={(e)=>handleChange(e)}
                  placeholder='Enter password'
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='password2'
                  name='password2'
                  value={password2}
                  onChange={(e)=>handleChange(e)}
              
                  placeholder='Confirm password'
                  required
                />
              </div>
              <div className='form-group'>
                <button className='btn btn-block'>Submit</button>
              </div>
            </form>
          </section>
    
    </> 
  )
}

export default Register
