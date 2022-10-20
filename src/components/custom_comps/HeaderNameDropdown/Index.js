import "./headerNameDropdown.css";

const HeaderNameDropdown = ({name}) => {

    return ( 
            <button className="name-dropdown">
                <div className="drop-head">
                    Имя клиента <span className="caret"></span>
                </div>
                <ul className="drop-content">
                    <li><a href="#">{name}</a></li>
                    <li><a href="#">{name}</a></li>
                    <li><a href="#">{name}</a></li>
                    <li><a href="#">{name}</a></li>
                </ul>
            </button>
       
     );
}
 
export default HeaderNameDropdown;