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
                <input className="msg-inp" type="text" />
                <div className="back-send-img"><img className="send-img" src="https://cdn-icons-png.flaticon.com/512/6652/6652725.png" /></div>
            </div>

        </div>
    )
}

function sendmessage(){

}


function GetChat(chat_id: string){
    
}

export default BodyChat