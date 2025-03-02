import "./header.css"

function Head(){
    return (
        <div className="header-content">
            <div className="list">
                <button><img src="https://cdn-icons-png.flaticon.com/512/814/814038.png" alt="" /></button>
            </div>

            <div className="d6">
                <form>
                    <input type="text" placeholder="Искать здесь..."/>
                    <button type="submit"><img src="https://img.icons8.com/ios7/600/search.png" alt="" /></button>
                </form>
            </div>
        </div>
    )
}

export default Head