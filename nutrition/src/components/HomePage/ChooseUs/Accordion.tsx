import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const AccordionCard = () => {
  return (
    <div className="">
      <Accordion allowZeroExpanded={true} preExpanded={["panel1"]} className="">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How can i start a nutrition diet?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="text-white">
              Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
              occaecat ut occaecat consequat est minim minim esse tempor laborum
              consequat esse adipisicing eu reprehenderit enim.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>What fees do you charge?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="text-white">
              Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
              occaecat ut occaecat consequat est minim minim esse tempor laborum
              consequat esse adipisicing eu reprehenderit enim.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How does your weight loss program work?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="text-white">
              Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
              occaecat ut occaecat consequat est minim minim esse tempor laborum
              consequat esse adipisicing eu reprehenderit enim.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How long do i need to follow the advice?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="text-white">
              Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
              occaecat ut occaecat consequat est minim minim esse tempor laborum
              consequat esse adipisicing eu reprehenderit enim.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionCard;
