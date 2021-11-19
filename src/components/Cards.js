import React from "react";

function Cards() {
    return (
        <div className="cards">
            <h1>Check out some of my Projects!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Project 9"
                        label="Code Quiz"
                        path="/projects"/>
                    </div>
                </div>
            </div>
        </div>
    )
        

    
}