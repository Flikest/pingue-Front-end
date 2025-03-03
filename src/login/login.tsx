import { use, useState } from "react"
import "./login.css"

function LogIn() {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const emailChange = (event: any) => {
        setEmail(event.target.value)
    }

    const passChange = (event: any) => {
        setPass(event.target.value)
    }

    const submitClick = () => {
        console.log(email)
        console.log(pass)
    }

    return(
        <div className="log-in-main">
            <div className="log-in-content">
                <h1>LOG IN</h1>
                <input type="email" className="lg-inp" placeholder="email" onChange={emailChange}/>
                <input type="password" className="lg-inp" placeholder="password" onChange={passChange}/>
                <a href="" className="submit" onClick={submitClick}>submit</a>
                don't have an account?<a href="http://localhost/5173/register/" className="reg-a">register</a>
            </div>
        </div>
    )
}

export default LogIn