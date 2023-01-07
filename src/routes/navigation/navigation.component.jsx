import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';
import { DropdownContext } from '../../contexts/dropdown.context';
import { signOutUser } from '../../utiles/firebase/firebase.utiles';

import './navigation.style.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isDropdownOpen } = useContext(DropdownContext);

    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {
                    currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                    )
                    :
                    (
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                    )
                }
                <CartIcon/>
            </div>
            {
                isDropdownOpen ? <CartDropdown/> : ''
            }
        </div>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation;