import React from "react";

const Experience = () => {

    const fina = ['Learned and applied Agile methodologies and principles','Worked on a big scale bank management application',
    'Created multiple reusable components for various projects','Built beautiful user interfaces for clients without compromising functionality for aesthetics',
    'Modified code to fix errors and bugs']
    const hobby = ['Built responsive User Interfaces Using Bootstrap 5 and SASS','Fixed bugs','Modified DOM using jQuery']

    return (
        <div className="condiv">
            <h1 className="subtopic">Carrier Summary</h1>
            <h2>Junior Front-end Developer</h2>
            <h3>
                <u>FINA LLC | May 2022 to Oct 2022</u>
            </h3>
            <br></br>

            <div style={{display:"flex",flexDirection:"column"}}>
                {fina.map((value)=>{
                    return <p>☲ {value},</p>
                })}
            </div>


            <h2 style={{marginTop:'30px'}}>Front-end Developer</h2>
            <h3>
                <u>HobbyStudio | Oct 2022 to present</u>
            </h3>
            <br></br>

            <div style={{display:"flex",flexDirection:"column"}}>
                {hobby.map((value)=>{
                    return <p>☲ {value},</p>
                })}
            </div>
        </div>
    )
}

export default Experience
