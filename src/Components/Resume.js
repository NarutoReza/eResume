import axios from 'axios';
import './Resume.css'
import Cookies from "universal-cookie";
import { useState } from 'react';
const cookie = new Cookies()

const Resume = () => {
    const id = cookie.get('id')

    const img = "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"

    const [ data, setData ] = useState([])

    const getData = (id) => {
        axios
            .get(`http://localhost:8080/resume/view/one/${id}`, id)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => { console.log(err) })
    }

    getData(id)

    const [ course, setCourse ] = useState([])

    const getCourse = (id) => {
        axios
            .get(`http://localhost:8080/resume/view/bybasicid/${id}`, id)
            .then((res) => {
                setCourse(res.data)
            })
            .catch((err) => { console.log(err) })
    }

    getCourse(id)
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 tag">
                        <div>
                            <p id="name">{data.name}</p>
                            <p id="prof">{data.designation}</p>
                        </div>

                        <div>
                            <a><img id="mani" src={img} /></a>
                        </div>
                    </div>

                    <div className="col-sm-12 tab">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td id="bor1">
                                            <div className='ic'>
                                                <a><i class="fa-solid fa-phone"></i></a>
                                                <span id='text1'>&nbsp; {data.number}</span>
                                            </div>
                                            
                                            <div className='ic'>
                                                <a><i class="fa-solid fa-envelope"></i></a>
                                                <span id='text2'>&nbsp; {data.email}</span>
                                            </div>

                                            <div className='ic'>
                                                <a><i class="fa-sharp fa-solid fa-location-dot"></i></a>
                                                <span id='text3'>&nbsp; {data.address}</span>
                                            </div>
                                        </td>

                                        <td colSpan={2}>
                                            <h2>PROFILE</h2>
                                            <p>{data.description}</p>
                                        </td>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td id='bor2'>
                                            <h2>SKILLS</h2>
                                            <ul>
                                                {data.skills && data.skills.map((item) => {
                                                    return(
                                                        <li key={item}>{item}</li>
                                                    )
                                                })}
                                            </ul>
                                        </td>
                                        
                                        <td colSpan={2} rowspan={2}>
                                            <h2>EDUCATION</h2>

                                            { course && course.map((item) => {
                                                if(item.course !== 'Certifications'){
                                                    return(
                                                        <div className="school" key={item.id}>
                                                            <h5>{item.course}</h5>
    
                                                            <p>
                                                                {item.school}
                                                                <br />
    
                                                                {item.year_start} - {item.year_end}
                                                                <br />
    
                                                                <ul>
                                                                    <li>{item.description}</li>
                                                                </ul>
                                                            </p>
                                                        </div>
                                                    )
                                                }
                                                else{
                                                    return null
                                                }
                                            })}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='bor3'>
                                            <h2>CERTIFICATIONS</h2>
                                            { course && course.map((item) => {
                                                if(item.course == 'Certifications'){
                                                    return(
                                                        <div key={item.id}>
                                                            <h5>{item.school}</h5>
    
                                                            <p><li>{item.description}</li></p>
                                                        </div>
                                                    )
                                                }
                                                else{
                                                    return null
                                                }
                                            })}
                                        </td>

                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume