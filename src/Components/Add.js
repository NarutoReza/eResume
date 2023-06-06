import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
const cookie = new Cookies()

const Add = () => {
    const [ data, setData ] = useState({
        name: "",
        number: "",
        email: "",
        designation: "",
        address: "",
        skills: [],
        description: ""
    })

    console.log(data)

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const [ newData, setNew ] = useState("")

    const Verify = (name, number) => {
        axios
            .post("http://localhost:8080/resume/view/one", { name: name, number: number })
            .then((res) => { 
                if(res.data.length == 0){ 
                    setNew("No data")
                }
                else{ setNew("Data") }
             })
            .catch((err) => { console.log(err) })
    }

    Verify(data.name, data.number)

    const saveData = (sample) => {
        axios
            .post("http://localhost:8080/resume/add/data", sample)
            .then((res) => {
                console.log("Success")
                
            })
            .catch((err) => { console.log(err) })
    }
    
    const navigate = useNavigate()

    const Submit = e => {
        e.preventDefault()
        if(newData == "Data"){
            console.log("Data already present")
        }
        else{
            saveData(data)
            console.log("Ok")
            cookie.set('name', data.name, { maxAge: 3600 })
            cookie.set('number', data.number, { maxAge: 3600 })
            navigate('/secondary')
        }
    }

    return(
        <>
            <h2 style={{textAlign: "center"}}>Add Your Basic Details</h2>

            <form onSubmit={Submit}>
                <div className="mb-3 form-check">
                    <label htmlFor="name" className="form-label">Enter Your Name</label>
                    <input type="text" className="form-control" name="name" onChange={updateData} required />
                </div>

                <div className="mb-3 form-check">
                    <label htmlFor="number" className="form-label">Enter Your Mobile Number</label>
                    <input type="number" className="form-control" name="number" onChange={updateData} required />
                </div>

                <div className="mb-3 form-check">
                    <label htmlFor="email" className="form-label">Enter Your Email Address</label>
                    <input type="email" className="form-control" name="email" onChange={updateData} required />
                </div>

                <div className="mb-3 form-check">
                    <label htmlFor="designation" className="form-label">Enter Your Designation</label>
                    <input type="text" className="form-control" name="designation" onChange={updateData} required />
                </div>

                <div className="mb-3 form-check">
                    <label htmlFor="address" className="form-label">Enter Your Address</label>
                    <input type="text" className="form-control" name="address" onChange={updateData} required />
                </div>

                <div className="mb-3 form-check">
                    <label htmlFor="skills" className="form-label">Enter Your Skills</label>
                    <input type="text" className="form-control" name="skills" onChange={updateData} required />
                </div>

                <div className="mb-3 form-check">
                    <label htmlFor="description" className="form-label">Enter Your Description</label>
                    <input type="text" className="form-control" name="description" onChange={updateData} required />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Add