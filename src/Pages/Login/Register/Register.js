import React, { useState } from 'react';
import './Register.css'
import loginIcon from '../../../images/icon/login.ico'
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Social from '../../Hooks/Social';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/login')
    }

    const [agree, setAgree] = useState(false);

    const handleLogin = () => {
        navigate('/login')
    }


    if (loading) {
        return <h1 className='text-center mt-5'>Loading...</h1>;
    }



    const verificationEmail = () => {
     sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Email sent')
            })
        }

        const handleRegister = event => {
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const password = event.target.password.value;
            if (agree) {
                createUserWithEmailAndPassword(email, password);
                verificationEmail()
            }
        }


        return (
            <div>
                <h2 style={{ textAlign: 'center', marginTop: '5px' }}>Please Register</h2>
                <form onSubmit={handleRegister} className='form'>
                    <input type="text" name="name" id="" placeholder='Your name' />
                    <input type="email" name="email" id="" placeholder='Email-Address' required />
                    <input type="password" name="password" id="" placeholder='Password' required />
                    <div className=' d-flex  align-items-center '>
                        <div>
                            <img className='mx-1' height={25} src={loginIcon} alt="" />
                        </div>
                        <div className='register'>
                            Already have an Account?
                            <span style={{ cursor: "pointer" }} className='text-danger ' onClick={handleLogin}>Please Login</span>

                        </div>
                    </div>
                    <Social></Social>
                </form>
            </div>
        );
    };

    export default Register;