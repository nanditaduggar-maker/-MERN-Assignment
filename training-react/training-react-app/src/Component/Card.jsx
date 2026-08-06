import React from 'react'

export const Card = () => {
  return (
 <div className="container mt-5">
      <h1 className="text-center">Key Platform Features</h1>
      <p className="text-center">Our cutting-edge environment is optimized for development<br></br> speed, security, and responsive UI design</p>

      <div className="row">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Card 1</h5>
            <p>Short description.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Card 2</h5>
            <p>Short description.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Card 3</h5>
            <p>Short description.</p>
          </div>
        </div>
      </div>
    </div>
);
}
export default Card;