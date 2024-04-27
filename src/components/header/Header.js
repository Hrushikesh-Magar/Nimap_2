import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
    return(
        <div className="header">
            <div className="headerLeft">
                <Link to="/" style={{textDecoration: "none"}}><span>𝕄𝕠𝕧𝕚𝕖𝔻𝔹</span></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>

               
             <div className="search">
                <input
               
        type="text"
        placeholder="Search movies..."
        className="header__searchInput"
            />
            </div>
            <Link to="/" style={{textDecoration: "none"}}><span><button>Search</button></span></Link>
             
            </div>
        </div>
    );
}

export default Header