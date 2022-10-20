import "./leftBar.css";
import logo from "../../logo.svg";
import LeftBarElements from "../custom_comps/LeftBarElements/Index";

const LeftBar = () => {

    return ( 
        <section className="sc-left-bar">
            <a href="#" className="logo"><img src={logo} alt="" /></a>
            <LeftBarElements />
        </section>
     );
}
 
export default LeftBar;