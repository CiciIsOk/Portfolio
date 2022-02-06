import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Computer science" where="Business and Technology University" from="September 2019" to="Present"/>
            </div>
            )
        }
    }
    
export default Education
    