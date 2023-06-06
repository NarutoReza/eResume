import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
const cookie = new Cookies()

const Secondary = () => {

    const navigate = useNavigate()

    const [ data, setData ] = useState({
        course: "Secondary School",
        school: "",
        year_start: "",
        year_end: "",
        description: "",
        basic_id: ""
    })

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const updateId = (id) => {
        setData({
            ...data,
            basic_id: id
        })
    }

    const name = cookie.get('name')
    const number = cookie.get('number')

    const [ id, setId ] = useState("")

    const Verify = (name, number) => {
        axios
            .post("http://localhost:8080/resume/view/one", { name: name, number: number })
            .then((res) => { 
                if(res.data.length !== 0){ 
                    setId(res.data[0]._id)
                }
                else{ setId("") }
             })
            .catch((err) => { console.log(err) })
    }

    Verify(name, number)

    const saveData = (sample) => {
        axios
            .post(`http://localhost:8080/resume/add/course/${id}`, sample)
            .then((res) => {
                console.log("Success")
                
            })
            .catch((err) => { console.log(err) })
    }

    const Submit = e => {
        e.preventDefault()
        updateId(id)
        if(data.basic_id == ""){
            console.log("Error")
        }
        else{
            console.log("Ok")
            cookie.remove('name')
            cookie.remove('number')
            saveData(data)
            cookie.set('id', id, { maxAge: 3600 })
            navigate('/hsecondary')
        }
    }


    return(
        <>
            <h2 style={{textAlign: "center"}}>Add Your Secondary School Details</h2>

            <form onSubmit={Submit}>
                <div className="mb-3 form-check">
                    <label htmlFor="school" className="form-label">Enter Your School</label>
                    <input type="text" className="form-control" name="school" onChange={updateData} required />
                </div>

                <div className="mb-3 form-check">
                    <label htmlFor="year_start" className="form-label">Enter Your Starting Year</label>
                    <input type="number" className="form-control" name="year_start" onChange={updateData} required />
                </div>

                <div className="mb-3 form-check">
                    <label htmlFor="year_end" className="form-label">Enter Your Ending Year</label>
                    <input type="number" className="form-control" name="year_end" onChange={updateData} required />
                </div>

                <div className="mb-3 form-check">
                    <label htmlFor="description" className="form-label">Enter Your Remarks</label>
                    <input type="text" className="form-control" name="description" onChange={updateData} required />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                
            </form>
        </>
    )
}

export default Secondary