import { Link } from 'react-router-dom'
function Login() {
    return (
      <div className="login-page">
  
        <div className="login-card">
  
          <div className="login-logo">
            🏙️
          </div>
  
          <h1>Welcome Back</h1>
  
          <p className="login-subtitle">
            Login to manage your SmartCity complaints
          </p>
  
          <form>
  
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>
  
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>
  
            <button type="submit" className="login-submit">
              Login
            </button>
  
          </form>
  
          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/register">Create Account</Link>
          </p>
  
        </div>
  
      </div>
    )
  }
  
  export default Login