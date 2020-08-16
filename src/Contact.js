import React from 'react'
import "./index.css"


const contact =()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                <h1 className="text-center  ser mt-3"><u>Contact</u></h1>
                    <div className="col-md-4 col-10 mx-auto">
                        <form>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label" >Full Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Full name" required/>
                        </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>

                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit !</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default contact;
