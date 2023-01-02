import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, Link } from 'react-router-dom'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'
import { selectCartOpen } from '../../store/cart/cart'
import { selectCurrentUser, selectUserData } from '../../store/user/user.selector'
import { signOut } from '../../features/userSlice'
import CartIcon from '../../components/cartIcon/cart-icon'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './navigation.scss'

const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectCartOpen)
  const userName = useSelector(selectUserData)
  const linkData = [
    {
      url: "",
      text: "Home",
    },
    {
      url: "shop",
      text: "Shop",
    },
  ]

  const SignOut = () => {
    dispatch(signOut(false))
  }
  return (
    <Fragment>
      <div className="navigation-link">
        <div className="navigation-link__logo-container">
          <Link className="navigation-link__logo" to='/'>
            <Logo />
          </Link>
          <h3>Hello! {userName.nickname}</h3>
        </div>
        <div className="navigation-link__container">
          {linkData.map((res, index) => {
            return <Link key={index} className="navigation-link__container-link" to={`/${res.url}`}>{res.text}</Link>
          })}
          {currentUser ?
            (<Link className="navigation-link__container-link" onClick={SignOut} to={'/'}>SignOut</Link>)
            :
            (
              <div className="navigation-link__sign-in">
                <Link className="navigation-link__container-link" to='/sign-up'>SignUp</Link>
                <Link className="navigation-link__container-link" to='/sign-in'>SignIN</Link>
              </div>
            )
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation