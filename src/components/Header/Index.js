import HeaderFlagDropdown from "../custom_comps/HeaderFlagDropdown/Index";
import HeaderNameDropdown from "../custom_comps/HeaderNameDropdown/Index";
import "./header.css";

const Header = () => {
    return ( 
        <header className="header">
            <HeaderNameDropdown name={'Karen'}  />
            <HeaderFlagDropdown />
        </header>
     );
}
 
export default Header;