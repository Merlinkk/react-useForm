import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [submit, setSubmit] = useState(false);

    const onSubmit = (data) => {
        console.log('Form Submitted', data);
        setSubmit(true);
        reset();
    };

    useEffect(() => {
        console.log(errors)
    },[errors])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Registration Form</h1>
                {submit ? <span id='success'>Registration successful!</span> : null}
                <br />
                <br />
                <input
                    {...register('firstName', { required: true })}
                    placeholder="First Name"
                    type="text"
                />
                {errors.firstName && (
                    <ErrorMessage message="First Name is required" />
                )}
                <br />
                <br />
                <input
                    {...register('lastName', { required: true })}
                    placeholder="Last Name"
                    type="text"
                />
                {errors.lastName && (
                    <ErrorMessage message="Last Name is required" />
                )}
                <br />
                <br />
                <input
                    {...register('email', { required: true })}
                    placeholder="Email"
                    type="email"
                />
                {errors.email && <ErrorMessage message="Email is required" />}
                <br />
                <br />
                <input
                    {...register('phone', { required: true })}
                    placeholder="Phone No:"
                    type="number"
                />
                {errors.phone && (
                    <ErrorMessage message="Phone No: is required" />
                )}
                <br />
                <br />
                <input id="submit" type="submit" value="Submit" />
            </form>
        </>
    );
}

// A separate component for error messages
function ErrorMessage({ message }) {
    return <h3 style={{ color: 'red' }}>{message}</h3>;
}

export default Form;
