import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
const cookie = new Cookies()

const Download = () => {
    const navigate = useNavigate()

    const [ data, setData ] = useState({
        name: "",
        number: ""
    })

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const [ id, setID ] = useState([])

    const Verify = (name, number) => {
        axios
            .post("http://localhost:8080/resume/view/one", { name: name, number: number })
            .then((res) => { 
                if(res.data.length == 0){ 
                    console.log("Error")
                }
                else{ setID(res.data[0]._id) }
            })
            .catch((err) => { console.log(err) })
    }

    Verify(data.name, data.number)
    
    const Submit = e => {
        e.preventDefault()
        if(id==""){
            console.log("Error")
        }
        else{
            console.log("Ok")
            cookie.set('id', id, { maxAge: 3600 })
            navigate('/resume')
        }
    }

    return(
        <>
        <h2 style={{textAlign: "center"}}>Download Your Resume</h2>

            <form onSubmit={Submit}>
                <div className="mb-3 form-check">
                    <label htmlFor="name" className="form-label">Enter Your Name</label>
                    <input type="text" className="form-control" name="name" onChange={updateData} required />
                </div>

                <div className="mb-3 form-check">
                    <label htmlFor="number" className="form-label">Enter Your Mobile Number</label>
                    <input type="number" className="form-control" name="number" onChange={updateData} required />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Download