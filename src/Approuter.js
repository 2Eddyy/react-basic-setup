import React, { useReducer } from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Login from './Layouts/Public-layout/Login/Login';
import ForgotPassword from './Layouts/Public-layout/Forgot-Password/ForgotPassword'
import Home from './Layouts/Scured-layout/Home/Home';
import Profile from './Layouts/Scured-layout/Profile/Profile';
import { StateContext } from './Context/Context';
import {intialState,stateReducer} from './Component/Reducer'
import Header from './Layouts/Scured-layout/Header/Header';
import Footer from './Layouts/Scured-layout/Footer/Footer';
import Card from './Layouts/Scured-layout/Card/Card';
import Addtocart from './Layouts/Scured-layout/AddtoCard/Addtocart';
import Favorite from './Layouts/Scured-layout/Favorite/Favorite';
import TableList from './Layouts/Scured-layout/TableList/TableList';
import Charts from './Layouts/Scured-layout/Charts/Charts';
function Approuter() {
  const [state,dispatch]=useReducer(stateReducer,intialState);
  return (
    <div>
<StateContext.Provider value={{state,dispatch}}>
  <Router>
    {state?.isAthentication?(
      <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='card' element={<Card/>}></Route>
        <Route path='addcart' element={<Addtocart/>}></Route>
        <Route path='favorite' element={<Favorite/>}></Route>
        <Route path='charts' element={<Charts/>}></Route>
        <Route path='tablelist' element={<TableList/>}></Route>
      </Routes>
      <Footer/>
      </>
    ):
    <Routes>
      <Route path='login' element={<Login/>}></Route>
      <Route path='forgotpassword' element={<ForgotPassword/>}></Route>
      <Route path='*' element={<Navigate to={'login'}></Navigate>}></Route>
    </Routes>
    }
  </Router>
</StateContext.Provider>
    </div>
  )
}

export default Approuter