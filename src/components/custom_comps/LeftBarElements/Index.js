import "./leftBarElements.css";
import barChartIcon from "../../../svg/bar_chart-icon.svg";
import blockIcon from "../../../svg/block-icon.svg";
import signIcon from "../../../svg/sign-icon.svg";
import messagetIcon from "../../../svg/message-icon.svg";
import notificationIcon from "../../../svg/notification-icon.svg";
import soundlessIcon from "../../../svg/soundless-icon.svg";
import logoutIcon from "../../../svg/logout-icon.svg";

const LeftBarElements = () => {
    return ( 
        <div className="overflow-auto">
            <ul className="left-bar-options">
                <li><a href="#"><img src={barChartIcon} alt="" /></a></li>
                <li><a href="#"><img src={blockIcon} alt="" /></a></li>
                <li><a href="#"><img src={messagetIcon} alt="" /></a></li>
                <li><a href="#"><img src={signIcon} alt="" /></a></li>
                <li><a href="#"><img src={notificationIcon} alt="" /></a></li>
                <li><a href="#"><img src={soundlessIcon} alt="" /></a></li>
                <li><a href="#"><img src={logoutIcon} alt="" /></a></li>
            </ul>
        </div>
     );
}
 
export default LeftBarElements;