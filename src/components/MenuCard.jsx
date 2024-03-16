import { NavLink, Link } from "react-router-dom";
import "../pages/menupage.css"

function MenuCard({ imgUrl, title, link, type }) {
    function errorHandler(image){
        image.target.src=require("../assets/no-picture-available-icon-1.jpg");

    }
    return (
        <NavLink className='furn-card' to={link}>
            <div className='furn-img-div'>
                <img src={imgUrl} alt="" onError={(e)=>errorHandler(e)}/>
            </div>
            <div className="furn-details">
                <h2 className='furn-card-h2'>{title}</h2>
                <h4>{type}</h4>
                <Link className='view-btn' to={link}>view</Link>
            </div>


        </NavLink>
    )
}

export default MenuCard; 