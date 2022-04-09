
import React from "react";
import Section from './Section.js';

function Home(){

    return(
        <div>
            {/* test home */}
            <Section 
            title="Model 3" 
            para="Order online for tochless deivery" 
            bgImg="model-3.jpg"
            leftButton = "Custom Order"
            rightButton= "Existing Inventory"
            downArrow
            />
            <Section 
            title="Model Y" 
            para="Order online for tochless deivery" 
            bgImg="model-y.jpg"
            leftButton = "Custom Order"
            rightButton= "Existing Inventory"
            downArrow
            />
            <Section 
            title="Model X" 
            para="Order online for tochless deivery" 
            bgImg="model-x.jpg"
            leftButton = "Custom Order"
            rightButton= "Existing Inventory"
            downArrow
            />
            <Section 
            title="Solar Panels" 
            para="Order online for tochless deivery" 
            bgImg="solar-panel.jpg"
            leftButton = "Custom Order"
            rightButton= "Existing Inventory"
            downArrow
            />
            <Section 
            title="Solar Roof" 
            para="Order online for tochless deivery" 
            bgImg="solar-roof.jpg"
            leftButton = "Custom Order"
            rightButton= "Existing Inventory"
            downArrow
            />
            <Section 
            title="Acessories" 
            para="Order online for tochless deivery" 
            bgImg="accessories.jpg"
            leftButton = "Custom Order"
            />
        </div>
    )
}

export default Home