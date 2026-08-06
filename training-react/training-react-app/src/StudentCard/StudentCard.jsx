import React from 'react'
const StudentCard = () => {
  return (
    <div className='page' style={{backgroundColor:'pink',height:'700px',paddingTop:'100px' }}>
      <div className='center' style={{  backgroundColor:'rgb(24, 26, 27)',border: '2px solid black',width:'600px',height:'500px',marginLeft:'350px', borderRadius:'15px',}}>
        <h1>Student Notes App</h1>
        <p>Quickly capture and persists your idea </p>
        <br></br>
        <input style={{  width:'410px',height: '30px',}} type='text'name=''className='notes'placeholder='write a note...'/>
        <br></br><br/>
        <button style={{width:'410px',height: '30px',backgroundColor:'DarkOrchid',borderRadius:'8px',}}>Add Note+</button>

        <div>
        <div>
          <p>Your Saved Notes</p><br/>
          <div className='empty'>
          <p>NO notes Saved yet</p>
          <h5>Enter a note above and click "Add Note" to <br/>start saving your ideas!</h5>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default StudentCard

