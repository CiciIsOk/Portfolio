import React from 'react'

const Skills = () =>  {

    const languages = ['English - Native or bilingual proficiency','Georgian - Native or bilingual proficiency','RussianRussian - Professional working proficiency']
    const codingSkills = ['HTML', 'CSS', 'Javascript']
    const frameworks = ['ReactJs', 'Redux', 'Git/Github', 'MaterialUI', 'Bootstrap',
        'SASS', 'Jira', 'WebStorm', 'Figma',]

        return (
            <div className="condiv skills">
            <h1 className="subtopic">Skills</h1>
                <h3>Speaking Languages</h3>
                <div style={{display:"flex",flexDirection:"column"}}>
                    {languages.map((value)=>{
                        return <p>{value},</p>
                    })}
                </div>

                <h3>Coding Languages</h3>
                <div style={{display:"flex",flexDirection:"row"}}>
                    {codingSkills.map((value)=>{
                        return <p>{value},</p>
                    })}
                </div>

                <h3>Frameworks/Systems</h3>
                <div style={{display:"flex",flexDirection:"row"}}>
                    {frameworks.map((value)=>{
                        return <p>{value},</p>
                    })}
                </div>

            </div>
            )

    }
    
    export default Skills
    
