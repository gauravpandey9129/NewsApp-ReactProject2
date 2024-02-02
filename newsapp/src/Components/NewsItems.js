import React, { Component } from 'react'

export default  class NewsItems extends Component {

  render() {
    let {title,discription,urlImage,newsurl}=this.props;
       return (
          <div>
          <div  className="card" style={{width: '18rem'}}>
          <img src={urlImage}  className="card-img-top" alt="..."/>
          <div  className="card-body">
          <h5  className="card-title">{title}</h5>
          <p  className="card-text">{discription}</p>
          <a href={newsurl}  className="btn btn-primary">More Details</a>
           </div>
           </div>
            </div>
          )
     }

}
