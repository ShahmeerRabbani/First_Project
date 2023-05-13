import LoginIcon from '@mui/icons-material/Login';
import {Button, Container, TextField} from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../screen/configRequest';
import { useFormik } from 'formik';
import * as yup from 'yup'

function Login(){

    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema:yup.object().shape({
            email:yup.string().email('invalid email').required('required'),
            password:yup.string().min(6, "Too Short").max(20, "Too Long").required('required')
        }),
        onSubmit:(values)=>{
            handleLogin(values)
        }
    })

    useEffect(()=>{
        handleCheckUser()
    }, [])

    const navigate =useNavigate()
    
    const handleCheckUser = () => {
        const user = localStorage.getItem("user")
        if(user){
            navigate('/Home', {replace: true})
        }
    }

    const handleLogin = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then((res)=>{
            console.log( res.user)
            navigate('/Home', {replace: true})
            localStorage.setItem("user", JSON.stringify(res.user))
        })
        .catch((e)=>{
            console.log( e)
        })
    }

    return(
        <>
        <Container>
            <div className='Login-main'>
            <div className='Login_Heading'>
        <h1>facebook </h1>
        <p>Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div className='Login-page'>
            <div className='text-field'>
            <TextField
            onChange={formik.handleChange}
            value={formik.values.email}
            helperText={formik.errors.email}
            error = {formik.errors.email}
            name='email'
            className='input'
            type="email"
            label="Email address or phone number"
            />
            </div>
            <div className='text-field2'>
            <TextField
            onChange={formik.handleChange}
            value={formik.values.password}
            helperText={formik.errors.password}
            error={formik.errors.password}
            name='password'
            className='input2'
            label="password"
            type="password"
            />
            </div>
            <div className='Login-button'>
                <Button
                onClick={formik.handleSubmit}
                className='login-Button'
                variant ='contained'
                endIcon ={<LoginIcon/>}
                >Log in</Button>
            </div>
            <div className='forget'>
                <p><Link to={'#'}>Forgetten password? </Link></p>
            </div>
            <div className='create-account'>
            <Button
            className='create-button'
            onClick={()=>navigate('/signup')}
            variant='contained'
            color='success'
            >Create New Account</Button>
            </div>
        </div>
        </div>
        </Container>
        </>
    )
}

export default Login;