import React from 'react'


const Card=(props)=>{
    return(
        <>
            <div className="col-md-4 col-10 mx-auto">
            <div className="card" >
                <img src={props.img} className="card-img-top img-thumbnail" alt={props.title}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title} </h5>
                    <p className="card-text">{props.text}</p>
                    <a href={props.details} className="btn btn-primary">Know More</a>
                </div>
                </div>
            </div>
        </>

    )
}

export default Card;