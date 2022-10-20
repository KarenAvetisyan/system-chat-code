import "./navOptions.css";
import calendar_icon from "../../../svg/d-nav-calendar-icon.svg";
import ponaznacheniju_icon from "../../../svg/d-nav-ponaznacheniju-icon.svg";
import poprovajderu from "../../../svg/d-nav-poprovajderu-icon.svg";
import organization from "../../../svg/d-nav-organization-icon.svg";
import obshije from "../../../svg/d-nav-obshije-icon.svg";

const NavOptions = () => {
    return ( 
        <div className="dialog-nav-options">
             <ul className="nav-options">
                <li><a href="#"><img src={calendar_icon} alt="" /><span>Период</span></a></li>
                <li><a href="#"><img src={ponaznacheniju_icon} alt="" /><span>По Назначению</span></a></li>
                <li><a href="#"><img src={poprovajderu} alt="" /><span>По Провайдеру</span></a></li>
                <li><a href="#"><img src={organization} alt="" /><span>По организации</span></a></li>
                <li><a href="#"><img src={obshije} alt="" /><span>Общие чаты <div className="caret"></div></span></a></li>
                <li><a className="apply-filter" href="#">Применить фильтр </a></li>
             </ul>

        </div>
     );
}
 
export default NavOptions;