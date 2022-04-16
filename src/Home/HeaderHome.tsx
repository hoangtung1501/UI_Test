import './Home.css'
import '../assets/font/fontawesome-free-6.1.1-web/fontawesome-free-6.1.1-web/css/all.min.css'
function HeaderHome() {
    return (
        <div className="header-home">
            <div className='header-contact'>
                <ul>
                    <li><i className="fa-solid fa-location-dot">   <p>Company Address type here</p></i></li>
                    <li><i className="fas fa-phone">   <p>+94 000 00000</p></i></li>
                </ul>
            </div>

            <div className="header-nav">
                <p>LOGO</p>
                <ul>
                    <li><a href="#"><i className="fa-solid fa-circle"></i>Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderHome