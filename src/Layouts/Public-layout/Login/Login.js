import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import Swal from 'sweetalert2';
import { StateContext } from '../../../Context/Context';

const Login = () => {
  var myFormRef1;
  var myFormRef2;

  const navigate = useNavigate();
  const { dispatch } = useContext(StateContext);
  // login register slider
  const signUp = () => {
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
  }
  const signIn = () => {
    const container = document.getElementById('container');
    container.classList.remove("right-panel-active");
  }
  // login integration-------------------
  const userLogin = (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let formData = {
      "username": email,
      "password": pass
    }
    fetch("http://localhost:10021/createUsers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === true) {
          localStorage.setItem("userLogin", true);
          dispatch(
            {
              type: "login",
              payload: { isAthentication: true }
            }
          );
          navigate("/")
          myFormRef2.reset();
        }
        else {
          Swal.fire({
            title: result.message,
            icon: "warning"
          })
          navigate("login")
        }
      })
      .catch((err) => {

      })
  }
  // register integration 
  const userRegister = (e) => {
    myFormRef1.reset();
    e.preventDefault();
  }
  return (
    <div className='login'>
      <div className="containers" id="container">
        <div className="form-container sign-up-container">
          <form name='signup' onSubmit={userRegister} ref={(el) => myFormRef1 = el}>
            <h2>Register Page</h2>
            <div className="social-container">
              <a href="facebook" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="google" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="linkedin" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" name='username' />
            <input type="email" placeholder="Email" name='email' />
            <input type="password" placeholder="Password" name='pass' />
            <input type='submit' className='login-btns' value="Register" />
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form name='signin' onSubmit={userLogin} ref={(el) => myFormRef2 = el}>
            <h2>Login Page</h2>
            <div className="social-container">
              <a href="facebook" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="google" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="linkedin" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" name='email' id='email' />
            <span className='text-danger text-start' id='email_Error'></span>
            <input type="password" placeholder="Password" name='pass' id='pass' />
            <span className='text-danger' id='pass_Error'></span>
            <Link to="/forgotpassword">Forgot your password?</Link>
            <input type='submit' className='login-btns' value="Login" />
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h2>Welcome Back!</h2>
              <p>To keep connected with us please login with your personal info</p>
              <button className="login-btns" onClick={(() => signIn())} id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h2>Hi Eddy !</h2>
              <p>Enter your personal details and start journey with us</p>
              <button className='login-btns' onClick={(() => signUp())} id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login