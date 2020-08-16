import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Services from './Services.js'
import Contact from './Contact.js'
import Menu from "./Menu.js"
import Footer from "./Footer.js"

const App =()=>{
    return(
        <>
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/contact" component={Contact}/>
                <Redirect to="/" />

            </Switch>
            <Footer/>
        </>
    )
}
export default App;
