import "./listUser.css"

interface Nav {
    images: string
    name: string
    lastMesages: string
}


function NavBar(props: Nav){
    return (
        <nav>
            <div className="avatar-user">
                <img src={props.images} />
            </div>
            
            <div className="info">
                <h4>{props.name}</h4>
                <p>{props.lastMesages}</p>
            </div>
        </nav>
    )
}

export default NavBar