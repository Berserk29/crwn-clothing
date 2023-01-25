import { Fragment} from 'react';
import { Outlet} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutStart } from '../../store/user/user.reducer';

import {
    NavigationContainer,
    LogoContainer,
    NavLinksContainer,
    NavLink
} from './navigation.style';

import { selectCurrentUser } from '../../store/user/user.selector';
import  {selectIsCartOpen} from '../../store/cart/cart.selector'
    
const Navigation = () => {
    const dispatch = useDispatch();
    const  currentUser  = useSelector(selectCurrentUser);
    const isDropdownOpen = useSelector(selectIsCartOpen);
    
    const signOutUser = () => dispatch(signOutStart())


    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='logo'/>
            </LogoContainer>
            <NavLinksContainer>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                    currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    )
                    :
                    (
                    <NavLink to='/auth'>
                        SIGN IN
                    </NavLink>
                    )
                }
                <CartIcon/>
            </NavLinksContainer>
            { isDropdownOpen && <CartDropdown/> }
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation;