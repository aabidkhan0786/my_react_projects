import React from 'react'
import Card from'./Card'
import img1 from "../src/image/web.jpg"

import d from "../src/image/d.jpg"
import analytics from "../src/image/ana.jpg"
import social from "../src/image/social.jpg"
import iot from "../src/image/iot.jpg"
import soft from "../src/image/soft.jpg"



const Services =()=>{
    return(
        <>  
        
        
             <div className="container-fluid mb-5">
                    <div class="row" >   
                    <h1 className="text-center mb-5 ser mt-3"><u>Our Services</u></h1>               
                        <div className="col-10 mx-auto ">
                            
                                <div className="row gy-4">
                                <Card title="Web-Developer" text="Web development is the work involved in developing a website for the Internet ( World Wide Web) or an intranet (a private network)." details="https://en.wikipedia.org/wiki/Web_development#:~:text=Web%20development%20is%20the%20work%20involved%20in%20developing,%28web%20apps%29%2C%20electronic%20businesses%2C%20and%20social%20network%20services." img={img1} />
                                <Card title="Web-digning" text=" The term web design is normally used to describe the design process relating to the front-end design of a website." details="https://en.wikipedia.org/wiki/Web_design#:~:text=The%20term%20%22web%20design%22%20is%20normally%20used%20to,engineering%20in%20the%20broader%20scope%20of%20web%20development." img={d} />
                                <Card title="Analytics" text="Analytics is the systemic computational analysis of data or statistics. It is used for the discovery, interpretation, and communication." details="https://en.wikipedia.org/wiki/Analytics#:~:text=Analytics%20is%20the%20systemic%20computational%20analysis%20of%20data,entails%20applying%20data%20patterns%20towards%20effective%20decision%20making." img={analytics} />
                                <Card title="Social-Marketing" text="Social media marketing is the use of social media platforms and websites to promote a product or service." details="https://en.wikipedia.org/wiki/Social_media_marketing#:~:text=From%20Wikipedia%2C%20the%20free%20encyclopedia%20Social%20media%20marketing,becoming%20more%20popular%20for%20both%20practitioners%20and%20researchers." img={social} />
                                <Card title="Software-Engg" text="Software engineering is the systematic application of engineering approaches to the development of software. " details="https://en.wikipedia.org/wiki/Software_engineering#:~:text=Software%20engineering%20is%20the%20systematic%20application%20of%20engineering,Software%20engineering%20is%20a%20branch%20of%20computer%20science." img={soft} />
                                <Card title="IOT - Internet Of Things" text="The Internet of things (IoT) is a system of interrelated computing devices and mechanical." details="https://en.wikipedia.org/wiki/Internet_of_things" img={iot} />
                            
                    </div>
                </div>   
                </div>  
                </div>       
                           
        </>
    )
}
export default Services;
