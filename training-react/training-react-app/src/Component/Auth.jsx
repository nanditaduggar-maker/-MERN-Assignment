import React from 'react'
import Signup from './Signup'
import Loginpage from './Loginpage'
import Home from './Home'
function Auth() {
  const [isLogin, setIsLogin] = React.useState(true);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const goToSignup = () => {
    setIsLogin(false);
    setIsSubmitted(false);
  };

  const goToLogin = () => {
    setIsLogin(true);
    setIsSubmitted(false);
  };

  const handleAuthSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <Home />
  }

  return (
    <div>
      {isLogin ? (
        <Loginpage goToSignup={goToSignup} onAuthSubmit={handleAuthSubmit} />
      ) : (
        <Signup goToLogin={goToLogin} onAuthSubmit={handleAuthSubmit} />
      )}
    </div>
  )
}

export default Auth