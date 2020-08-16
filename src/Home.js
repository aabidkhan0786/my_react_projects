import React from 'react';
import img from "../src/image/im1.gif";
import { NavLink } from 'react-router-dom';


const Home =()=>{
    return(
        <>
            <section className="home-main">
                <div className="container-fluid">
                    <div class="row" >
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 home-head pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1 className="mt-5">
                                Hello ! I am your Friend<br/> <strong className="name"><u>Abdul Aabid Khan</u></strong></h1>
                            <h2 my-3>Thanks for visiting my page... Have fun</h2>
                            <div className="mt-3 ">
                            <NavLink to="/services" exact ><button type="button" class="btn btn-outline-primary btn-lg button">Let's Go →</button></NavLink>
                        </div>
                    </div>
                            <div className="col-lg-6 order-2 order-lg-1 pt-5 ">
                                <img src={img} className="img-fluid" alt="home_img"/>
                            </div>
                        </div>
                            </div>
                    
                    </div>
                </div>
                  
                

            </section>
        </>
    )
}
export default Home;
