import React, { useState } from 'react'
const Conditionrendering = () => {
    const [isLogin,setLogin]=useState(false);
    const [value,setvalue] = useState();
  return (
    <div >
      conditionreandering
      {isLogin ? <user/> :<guest/>}
      <button onClick={() => setIsLogin(true)}>login</button>
      {value =="user" && <user/>  }    <br/>
      <button onClick={()=>setvalue("user")}>add value</button>
      <button onClick={()=>setvalue("Admin")}>reset</button>
    </div>
  )
}
export default Conditionrendering
