import "./headerFlagDropdown.css";
import ru_flag from "../../../svg/ru-flag.svg";

const HeaderFlagDropdown = () => {

    return ( 
            <button className="flag-dropdown">
                <div className="drop-head">
                    <img src={ru_flag} alt="" /> RU <span className="caret"></span>
                </div>
                <ul className="drop-content">
                    <li><a href="#"><img src={ru_flag} alt="" /> RU</a></li>
                    <li><a href="#"><img src={ru_flag} alt="" /> RU</a></li>
                </ul>
            </button>
       
     );
}
 
export default HeaderFlagDropdown;