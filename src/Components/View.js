import { useNavigate } from "react-router"
import Cookies from 'universal-cookie'
const cookie = new Cookies()

const View = () => {
    cookie.remove('id')
    const navigate = useNavigate()
    const Add = () => {
        navigate('/add')
    }

    const Download = () => {
        navigate('/download')
    }
    return(
        <>
            <button type="submit" className="btn btn-secondary" onClick={Add} style={{margin: "5px"}}>Add Data</button>
            <button type="submit" className="btn btn-secondary" onClick={Download} style={{margin: "5px"}}>Download Resume</button>
        </>
    )
}

export default View