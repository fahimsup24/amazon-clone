import React from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue()

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header" >
      <Link to="/" >
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
      </Link>
        
      <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Fahim</span>
            <Link to={!user && '/login'}><span onClick={handleAuthentication} className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span></Link>
          </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout" >
          <div className="header__optionBasket">
            <ShoppingCartIcon className="header__basketIcon"/>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>

      </div>
      
    </div>
  );
};

export default Header;