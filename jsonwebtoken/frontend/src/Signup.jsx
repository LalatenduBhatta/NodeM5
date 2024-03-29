import React, { useState } from 'react'

const SignUp = () => {
    const [formData, setFormData] = useState({})
    const handelChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        setFormData({ ...formData, [name]: value })
    }
    const handelSubmit = (event) => {
        event.preventDefault()
        // console.log(formData);
        const { name, password, mobile, email, age, address } = formData
        if (name && password && mobile && email && age && address) {
            fetch("http://127.0.0.8:8000/post", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(formData)
            }).then(res => res.json())
                .then(data => alert(data.message))
        }
        else {
            alert("provide all the fields before submit")
        }
    }
    return (
        <div>
            {/* <h1>Form</h1> */}
            <form onSubmit={handelSubmit}>
                <fieldset>
                    <legend><h1>Register Here</h1></legend>
                    <table>
                        <tr>
                            <td><label htmlFor="name">Name: </label></td>
                            <td><input type="text" name='name' id='name'
                                placeholder='Enetr Your Name'
                                onChange={handelChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="name">UserName: </label></td>
                            <td><input type="text" name='username'
                                id='username' placeholder='Enetr Your UserName'
                                onChange={handelChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="name">Mobile: </label></td>
                            <td><input type="number" name='mobile' id='mobile'
                                placeholder='Enetr Your mobile'
                                onChange={handelChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="age">Age: </label></td>
                            <td><input type="number" name='age' id='age'
                                placeholder='Enetr Your Name'
                                onChange={handelChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="address">Address: </label></td>
                            <td><input type="text" name='address' id='address'
                                placeholder='Enetr Your Name'
                                onChange={handelChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email: </label></td>
                            <td><input type="email" name='email' id='email'
                                placeholder='Enetr Your Name'
                                onChange={handelChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password: </label></td>
                            <td><input type="password" name='password'
                                id='password' placeholder='Enetr Your Name'
                                onChange={handelChange} /></td>
                        </tr>
                        <tr>
                            <td><button>Register</button></td>
                        </tr>
                    </table>
                </fieldset>
            </form>
        </div>
    )
}

export default SignUp