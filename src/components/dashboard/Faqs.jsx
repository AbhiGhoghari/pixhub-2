"use client";
import React from "react";
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from "../ui/accordion";
import { FaPlus } from "react-icons/fa6";

const faqs = [
    {
        question: "What tools are included?",
        answer:
            "Currently, we offer access to Freepik, Envato, and Flaticon. More tools will be added soon!",
    },
    {
        question: "How do the subscriptions work, and how will I get access?",
        answer:
            "After completing your payment, you will receive a dashboard ID and password via email. Simply log in to the dashboard to instantly start downloading resources.",
    },
    {
        question: "Will I receive after-sales support?",
        answer:
            "Yes, we provide 24/7 support through the user dashboard. If you encounter any issues, you can contact us there, and we will resolve them as quickly as possible.",
    },
    {
        question: "Who is this pack designed for?",
        answer:
            "This pack is perfect for creative professionals and businesses, including: ✓ Graphic Designers ✓ Web Designers ✓ Content Creators ✓ YouTubers / Filmmakers ✓ Digital Marketers ✓ Freelancers ✓ Video Editors ✓ Business Owners",
    },
    {
        question:
            "I made the payment but haven't received the login email yet. What should I do?",
        answer:
            "It may take up to 10 minutes to receive the login credentials email after purchasing. If you haven’t received it within this time, please contact us via Instagram or email. We’re here to help!",
    },
    {
        question: "Are there any additional requirements I should know about?",
        answer:
            "Currently, no additional requirements are needed. Just complete your payment, log in to the dashboard, and start downloading instantly!",
    },
];

export default function Faqs() {
    return (
        <div className="pb-10">
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