import React, { useReducer } from 'react';
import './Header.css';
import { Button } from 'react-bootstrap';
import { intialState, stateReducer } from '../../../Component/Reducer';
import { Link } from 'react-router-dom';
import { StateContext } from '../../../Context/Context';
import LeftMenu from '../LeftMenu/LeftMenu';

function Header() {
  const [state, dispatch] = useReducer(stateReducer, intialState);
  const Logout = () => {
    window.location.reload();
    localStorage.setItem("userLogin", false)
    dispatch(
      {
        type: "logout",
        payload: { isAthentication: false }
      }
    );
  }
  const LeftMenuHandle = () => {
    if (state.isLeftMenu) {
      localStorage.setItem("leftMenu", false);
      dispatch(
        {
          type: "leftmenu",
          payload: { isLeftMenu: false }
        }
      );
    }
    else {
      localStorage.setItem("leftMenu", true);
      dispatch(
        {
          type: "leftmenu",
          payload: { isLeftMenu: true }
        }
      );
    }
  }
  return (
    <div className='hederss'>
      <div className='header'>
        <div className='header-lists'>
          <div className='d-flex'>
            <div className='bar' onClick={(() => LeftMenuHandle())}><i className="fa-solid fa-bars"></i></div>
            <div className='logo'><h1>EDDY</h1></div>
          </div>
          <ul className='lists'>
            <li>
              <Link to="addcart">
                <i className="fa-solid fa-cart-shopping shop"></i>
              </Link>
            </li>
            <li>
              <Link to="favorite">
                <i className="fa-solid fa-heart"></i>
              </Link>
            </li>
            <li>
              <Link><i className="fa-solid fa-bell"></i></Link>
            </li>
            <li>
              <Link><Button onClick={(() => Logout())}>Logout</Button></Link>
            </li>
          </ul>
        </div>
      </div>
      <StateContext.Provider value={{ state, dispatch }}>

        {state?.isLeftMenu ? (
          <>
            <LeftMenu />
          </>
        ) :
          <div></div>
        }
      </StateContext.Provider>
    </div>
  )
}

export default Header