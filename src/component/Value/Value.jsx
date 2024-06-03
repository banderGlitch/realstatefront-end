import React, { useState } from 'react'
import './Value.css';
import data from '../../utils/accordion';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from "react-icons/md";



export default function Value() {
  return (
    <section className="v-wrapper">
        <div className="padding innerWidth flexCenter v-container">
            {/* left-side */}
            <div className="v-left">
                <div className="image-container">
                  <img src='./value.png' alt=''/>
                </div>
            </div>
             {/* Right-side accordian */}
             <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We give to you</span>
                <span className='secondaryText'>We always ready to help by providing the best service for you
                    <br/>
                    We beleive a good blace to live can make your your life better
                </span>
                <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
                    {
                        data.map((item, i) => {
                            const [className , setClassName] = useState(null)
                            return (
                                <AccordionItem className={`accordianItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordianButton'>
                                         <AccordionItemState>
                                            {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}

                                         </AccordionItemState>
                                           <div className="flexCenter icon">
                                            {item.icon}
                                           </div>
                                           <span className="primaryText">
                                            {item.heading}
                                           </span>
                                           <div className="flexCenter icon">
                                           <MdOutlineArrowDropDown size={20} />
                                           </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>

                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
             </div>

        </div>
    </section>
  )
}
