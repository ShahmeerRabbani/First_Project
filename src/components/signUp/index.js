import { Button, Container, TextField } from '@mui/material'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../screen/configRequest';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from 'formik';
import * as yup from "yup"
import { addDoc, collection } from 'firebase/firestore';

function Signup() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object().shape({
            email: yup.string().email('invalid email').required('required'),
            password: yup.string().min(6, "Too short!").max(20, "Too Long!").required('required')
            // .matches(
            //    / ^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
            //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
        }),
        onSubmit: (values) => {
            handleSubmit(values)
        }
    })


    useEffect(() => {
        handleCheckUser()
    }, [])
    const navigate = useNavigate()

    const handleCheckUser = () => {
        const user = localStorage.getItem("user")
        if (user) {
            navigate('/Home', { replace: true })
        }
    }

    const handleSubmit = (values) => {
        console.log("values", values)
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((res) => {
                console.log( res)
                navigate('/', { replace: true })
            })
            .catch((e) => {
                console.log( e)
            })
    }

    return (
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
                                error={formik.errors.email}
                                helperText={formik.errors.email}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                name='email'
                                className='input'
                                type="email"
                                label="Email address or phone number"
                            />
                        </div>
                        <div className='text-field2'>
                            <TextField
                                error={formik.errors.password}
                                helperText={formik.errors.password}
                                onChange={formik.handleChange}
                                value={formik.values.password}
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
                                variant='contained'
                                color='error'
                                endIcon={<SendIcon />}
                            >Sign Up</Button>
                        </div>
                        <div className='forget'>
                            <p>Already have an account?<Link to={'/login'}>Sign In </Link></p>
                        </div>
                        <div className='create-account'>
                            <Button
                                className='create-button'
                                variant='contained'
                                color='success'
                                disabled
                            >Create New Account</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Signup;
