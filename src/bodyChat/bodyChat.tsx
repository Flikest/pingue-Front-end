import { useState } from "react"
import { io } from "socket.io-client";
import "./bodyChat.css"

interface Messages {
        Message_id: number
		User_id: string 
		Content: string
		SendingTime: Date
}

interface head {
    image: string
    name: string
}

function BodyChat(headProps: head){

    const soket = io("ws://localhost:9000/chats/messenger/")

    const [message, setMessage] = useState("")

    soket.on("connect", () => {

    })
    soket.on("disconnect", () => {
        
    })

    const handleChange = (event: any) => {
        setMessage(event.target.value)
    }

    const sendMessage = () => {
        console.log(message)
    }
    

    return (
        <div className="f-b">
            <header>
                <img src={headProps.image} />
                <h2>{headProps.name}</h2>
            </header>
            <hr />

            <div className="chat">
                <div className="first-messages">
                    <p>привет</p>
                </div>
            </div>

            <div className="input-box">
                <input className="msg-inp" type="text" value={message} onChange={handleChange}/>
                <div className="back-send-img" onClick={sendMessage}><img className="send-img" src="https://cdn-icons-png.flaticon.com/512/6652/6652725.png" /></div>
            </div>

        </div>
    )
}

export default BodyChat