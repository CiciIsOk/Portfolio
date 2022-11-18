import React from 'react'

const WideCard = ({title,where,from,to}) => {
        return (
            <div class="widecard">
                <div class="compdet">
                    <h2 className="secondtext">{where}</h2>
                    <h3>{title}</h3>
                    <h3 class="secondtext">{from} - {to}</h3>
                </div>
            </div>
            )
        }

    
export default WideCard
    
