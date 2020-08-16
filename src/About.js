import React from 'react'
import "./index.css"
import abt from "../src/image/about.gif"
import { NavLink } from 'react-router-dom'


const About =()=>{
    return(
        <>
            <section className="home-main">
                <div className="container-fluid">
                    <div class="row" >
                    <h1 className="text-center  ser mt-3"><u>About</u></h1>  
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h3 className="mt-5">
                            If you want people to understand your company’s values, then put them in bold black and white print like– <br/><u class="font-italic">Abdul Aabid Khan's</u> .Our entire website is a technological with its quaint background animation, concise content, and creative visuals, this page is definitely an eye-catcher.
                            There’s also an openness about it that will unfailingly draw you in.</h3>
                            <div className="mt-3 ">
                            <NavLink to="/contact" exact><button type="button" class="btn btn-outline-primary btn-lg button">Contact Me 📲</button></NavLink>
                        </div>
                    </div>
                            <div className="col-lg-6 order-2 order-lg-1 pt-5 ">
                                <img src={abt} className="img-fluid" alt="about_img"/>
                            </div>
                        </div>
                            </div>
                    
                    </div>
                </div>
                  
                

            </section>
        </>
    )
}
export default About;
