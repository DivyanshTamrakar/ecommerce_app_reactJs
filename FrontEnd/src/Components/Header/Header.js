import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import ActionIcons from "./ActionIcons";
import { Link } from 'react-router-dom';


const Header = () => {


  return <div className="header">

    <div className="menuIcon" >
      <MenuIcon sx={{ cursor: 'pointer', color: 'white', fontSize: '2rem' }} />
    </div>

    <div className="title" >
      <Link to='/' className='textDecorationNone colorWhite'>
        E-Commerce App
      </Link>
    </div>

    <div className="rightCom">
      <ActionIcons />
    </div>


  </div>;
}


export default Header;