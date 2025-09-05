"use client";
import React from "react";
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from "../ui/accordion";
import { FaPlus } from "react-icons/fa6";

const faqs = [
    {
        question: "What is Designcrate.in?",
        answer:
            "Designcrate.in is a premium membership platform that provides access to a curated collection of digital tools for students, designers, developers, and content creators at an affordable price.",
    },
    {
        question: "How does Designcrate works?",
        answer:
            "Once you become a member, you get exclusive access to various premium tools through our user panel. You can activate the tools by following the provided instructions.",
    },
    {
        question: "Who can benefit from Designcrate.in?",
        answer:
            "Designcrate.in is designed for students, designers, developers, and content creators who are looking for affordable access to premium digital tools.",
    },
    {
        question: "how much does membership cost?",
        answer:
            "We offer multiple plans at competitive prices. Visit our Pricing Page for the latest membership rates.",
    },
    {
        question:
            "what do i get with my subscription?",
        answer:
            "Your subscription gives you access to 50+ premium tools, including e-learning platforms, AI tools, design resources, and more.",
    },
  
];

export default function Faqs() {
    return (
        <div id="faqs" className="pb-5 md:pb-10">
            <div className="text-center py-5 px-4 sm:px-12">
                <div className="glow-behind"></div>
                <h1 className="text-center font-extrabold text-gradient-blue tracking-wide drop-shadow-[0_0_28px_rgba(79,134,255,.55)] leading-tight
                       text-3xl sm:text-4xl md:text-5xl">
                    Got questions?
                </h1>
                <h1 className="pt-3 text-blue-100/90 font-bold tracking-wide
                       text-base sm:text-lg md:text-xl">
                    Because every ‘why’, meet powerful answers.
                </h1>
            </div>
            <div className="w-full p-6 max-w-6xl flex flex-col mx-auto rounded-xl shadow-lg">
                <Accordion defaultValue={["item-1"]}>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionHeader customIcon>
                                <span className="text-blue-400 font-semibold">
                                    {faq.question}
                                </span>
                                <FaPlus className="ml-2 group-data-[active]:rotate-45 transition-transform text-blue-500" />
                            </AccordionHeader>
                            <AccordionPanel className="text-gray-300 leading-relaxed">
                                {faq.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}