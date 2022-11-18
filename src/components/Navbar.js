import React, { Component } from 'react';
import NavItem from './NavItem';
import Experience from "../contents/Experience";

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeItem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
                <ul>
                    <NavItem item="Home" tolink="/"  activec={this.activeItem}></NavItem>
                    <NavItem item="About" tolink="/about"  activec={this.activeItem}></NavItem>
                    <NavItem item="Education" tolink="/education"  activec={this.activeItem}></NavItem>
                    <NavItem item="Experience" tolink="/experience"  activec={this.activeItem}></NavItem>
                    <NavItem item="Skills" tolink="/skills"  activec={this.activeItem}></NavItem>
                    <NavItem item="Contact" tolink="/contact"  activec={this.activeItem}></NavItem>
                </ul>
            </nav>
        )
    }
}

export default Navbar
