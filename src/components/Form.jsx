import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form(){

    const {register, formState : {errors}, handleSubmit} = useForm();
    const [submit, setSubmit] = useState(false);


    const onSubmit = (data) => {
        console.log('Form Submitted', data);
        setSubmit(true);

    }
    
    

    return(
        <div>
            <h1>Registration Form</h1>

            {submit ? <span id='success'>Registration successful!</span> : null}
            <br /><br />

            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Enter Your First Name' {...register("firstName",{required:"Enter First Name"})}/><br/>
        <p>{errors.firstName?.message}</p><br/>

        <input type="text" placeholder='Enter Your Last Name' {...register("lastName",{required:"Enter Last Name"})}/><br/>
        <p>{errors.lastName?.message}</p><br/>

        <input type="email" placeholder='Enter Your Email' {...register("email",{required:"Enter Email  ", pattern:{value:/^\S+@\S+$/i, message:"Invalid email"}})}/><br/>
        <p>{errors.email?.message}</p><br/>

        <input type="password" placeholder='Enter Your Password' {...register("password", {required:"Password is required",
        minLength:{value:4, message:"Password must be more than 4 characters"},
        maxLength:{value:20, message:"Password cannot be more than 20 characters"}})}/><br/>
        <p>{errors.password?.message}</p><br/>

        <button id='submit'>Submit</button>
      </form>
    </div>
    )
}

export default Form;