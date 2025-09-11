// 'use client';
// import React from 'react';

// export default function Privacy() {
//     const sections = [
//         { id: 'intro', title: '1) Introduction' },
//         { id: 'collection', title: '2) Collection' },
//         { id: 'usage', title: '3) Usage' },
//         { id: 'sharing', title: '4) Sharing' },
//         { id: 'security', title: '5) Security Precautions' },
//         { id: 'data-retention', title: '6) Data Deletion and Retention' },
//         { id: 'rights', title: '7) Your Rights' },
//         { id: 'consent', title: '8) Consent' },
//         { id: 'changes', title: '9) Changes to This Privacy Policy' },
//         { id: 'grievance', title: '10) Grievance Officer' },
//     ];

//     return (
//         <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#0a0f1a] pt-40 pb-14">
//             {/* background spotlights */}
//             <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
//             <div className="pointer-events-none absolute -right-40 bottom-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

//             <div className="mx-auto max-w-7xl px-4 sm:px-6">
//                 {/* HERO */}
//                 <div className="relative mb-10 overflow-hidden rounded-3xl conic-border border border-transparent animate-border p-[2px]">
//                     <div className="relative rounded-[22px] bg-[#0b111f]/70 px-6 py-10 sm:px-10 sm:py-14 backdrop-blur-xl">
//                         <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
//                         <div className="absolute -bottom-10 left-10 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />

//                         <div className="flex flex-col items-center text-center">
//                             <h1 className="text-gradient-blue font-extrabold tracking-wide drop-shadow-[0_0_28px_rgba(79,134,255,.55)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
//                                 Privacy Policy
//                             </h1>

//                             {/* Mobile quick chips */}
//                             <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-2 sm:hidden">
//                                 {sections.map((s) => (
//                                     <a
//                                         key={s.id}
//                                         href={`#${s.id}`}
//                                         className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 ring-1 ring-white/10"
//                                     >
//                                         {s.title.replace(/\)\s?/, ') ')}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* BODY GRID */}
//                 <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
//                     {/* Sticky TOC (desktop) */}
//                     <aside className="sticky top-24 hidden self-start lg:block">
//                         <nav className="rounded-2xl conic-border border border-transparent animate-border p-[2px]">
//                             <div className="rounded-[16px] bg-[#0b111f]/70 p-4 backdrop-blur-xl">
//                                 <p className="my-3 text-xs font-semibold uppercase tracking-[.18em] text-white/60">On this page</p>
//                                 <ul className="space-y-1.5">
//                                     {sections.map((s) => (
//                                         <li key={s.id}>
//                                             <a
//                                                 href={`#${s.id}`}
//                                                 className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-white/75 ring-1 ring-transparent transition hover:bg-white/5 hover:text-white"
//                                             >
//                                                 <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400/70 group-hover:shadow-[0_0_8px_rgba(34,211,238,.6)]" />
//                                                 {s.title}
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </nav>
//                     </aside>

//                     {/* Content */}
//                     <main className="space-y-6">
//                         <ArticleCard id="intro" title="1) Introduction">
//                             <p>
//                                 This Privacy Policy describes how HARJIBHAI S MANIYA and its affiliates (collectively "HARJIBHAI S MANIYA, we, our, us") collect, use, share, protect or otherwise process your information/personal data through our website https://www.designcrate.in/ (hereinafter referred to as Platform).
//                             </p>
//                             <p>
//                                 Please note that you may be able to browse certain sections of the Platform without registering with us. We do not offer any product/service under this Platform outside India and your personal data will primarily be stored and processed in India.
//                             </p>
//                             <p>
//                                 By visiting this Platform, providing your information or availing any product/service offered on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and conditions, and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy.
//                             </p>
//                             <p>
//                                 <strong>If you do not agree please do not use or access our Platform.</strong>
//                             </p>
//                         </ArticleCard>

//                         <ArticleCard id="collection" title="2) Collection">
//                             <p>
//                                 We collect your personal data when you use our Platform, services or otherwise interact with us during the course of our relationship and related information provided from time to time.
//                             </p>
//                             <p>
//                                 Some of the information that we may collect includes but is not limited to:
//                             </p>
//                             <ul className="list-disc pl-5 space-y-2">
//                                 <li>Personal data/information provided to us during sign-up/registering or using our Platform such as name, date of birth, address, telephone/mobile number, email ID</li>
//                                 <li>Any such information shared as proof of identity or address</li>
//                                 <li>Bank account or credit or debit card or other payment instrument information (with your consent)</li>
//                                 <li>Biometric information such as your facial features or physiological information (in order to enable use of certain features when opted for, available on the Platform)</li>
//                             </ul>
//                             <p>
//                                 You always have the option to not provide information, by choosing not to use a particular service or feature on the Platform.
//                             </p>
//                             <p>
//                                 We may track your behaviour, preferences, and other information that you choose to provide on our Platform. This information is compiled and analysed on an aggregated basis.
//                             </p>
//                             <p>
//                                 <strong>Security Notice:</strong> If you receive an email, a call from a person/association claiming to be HARJIBHAI S MANIYA seeking any personal data like debit/credit card PIN, net-banking or mobile banking password, we request you to never provide such information. If you have already revealed such information, report it immediately to an appropriate law enforcement agency.
//                             </p>
//                         </ArticleCard>

//                         <ArticleCard id="usage" title="3) Usage">
//                             <p>
//                                 We use personal data to provide the services you request. To the extent we use your personal data to market to you, we will provide you the ability to opt-out of such uses.
//                             </p>
//                             <p>
//                                 We use your personal data to:
//                             </p>
//                             <ul className="list-disc pl-5 space-y-2">
//                                 <li>Assist sellers and business partners in handling and fulfilling orders</li>
//                                 <li>Enhance customer experience</li>
//                                 <li>Resolve disputes and troubleshoot problems</li>
//                                 <li>Inform you about online and offline offers, products, services, and updates</li>
//                                 <li>Customise your experience</li>
//                                 <li>Detect and protect us against error, fraud and other criminal activity</li>
//                                 <li>Enforce our terms and conditions</li>
//                                 <li>Conduct marketing research, analysis and surveys</li>
//                             </ul>
//                             <p>
//                                 You understand that your access to these products/services may be affected in the event permission is not provided to us.
//                             </p>
//                         </ArticleCard>

//                         <ArticleCard id="sharing" title="4) Sharing">
//                             <p>
//                                 We may share your personal data internally within our group entities, our other corporate entities, and affiliates to provide you access to the services and products offered by them. These entities and affiliates may market to you as a result of such sharing unless you explicitly opt-out.
//                             </p>
//                             <p>
//                                 We may disclose personal data to third parties such as:
//                             </p>
//                             <ul className="list-disc pl-5 space-y-2">
//                                 <li>Sellers and business partners</li>
//                                 <li>Third party service providers including logistics partners</li>
//                                 <li>Prepaid payment instrument issuers</li>
//                                 <li>Third-party reward programs and other payment opted by you</li>
//                             </ul>
//                             <p>
//                                 These disclosures may be required for us to provide you access to our services and products offered to you, to comply with our legal obligations, to enforce our user agreement, to facilitate our marketing and advertising activities, to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our services.
//                             </p>
//                             <p>
//                                 We may disclose personal and sensitive personal data to government agencies or other authorised law enforcement agencies if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process.
//                             </p>
//                         </ArticleCard>

//                         <ArticleCard id="security" title="5) Security Precautions">
//                             <p>
//                                 To protect your personal data from unauthorised access or disclosure, loss or misuse we adopt reasonable security practices and procedures. Once your information is in our possession or whenever you access your account information, we adhere to our security guidelines to protect it against unauthorised access and offer the use of a secure server.
//                             </p>
//                             <p>
//                                 However, the transmission of information is not completely secure for reasons beyond our control. By using the Platform, the users accept the security implications of data transmission over the internet and the World Wide Web which cannot always be guaranteed as completely secure, and therefore, there would always remain certain inherent risks regarding use of the Platform.
//                             </p>
//                             <p>
//                                 <strong>Users are responsible for ensuring the protection of login and password records for their account.</strong>
//                             </p>
//                         </ArticleCard>

//                         <ArticleCard id="data-retention" title="6) Data Deletion and Retention">
//                             <p>
//                                 You have an option to delete your account by visiting your profile and settings on our Platform, this action would result in you losing all information related to your account. You may also write to us at the contact information provided below to assist you with these requests.
//                             </p>
//                             <p>
//                                 We may in event of any pending grievance, claims, pending shipments or any other services we may refuse or delay deletion of the account. Once the account is deleted, you will lose access to the account.
//                             </p>
//                             <p>
//                                 We retain your personal data information for a period no longer than is required for the purpose for which it was collected or as required under any applicable law. However, we may retain data related to you if we believe it may be necessary to prevent fraud or future abuse or for other legitimate purposes.
//                             </p>
//                             <p>
//                                 We may continue to retain your data in anonymised form for analytical and research purposes.
//                             </p>
//                         </ArticleCard>

//                         <ArticleCard id="rights" title="7) Your Rights">
//                             <p>
//                                 You may access, rectify, and update your personal data directly through the functionalities provided on the Platform.
//                             </p>
//                         </ArticleCard>

//                         <ArticleCard id="consent" title="8) Consent">
//                             <p>
//                                 By visiting our Platform or by providing your information, you consent to the collection, use, storage, disclosure and otherwise processing of your information on the Platform in accordance with this Privacy Policy.
//                             </p>
//                             <p>
//                                 If you disclose to us any personal data relating to other people, you represent that you have the authority to do so and permit us to use the information in accordance with this Privacy Policy.
//                             </p>
//                             <p>
//                                 You, while providing your personal data over the Platform or any partner platforms or establishments, consent to us (including our other corporate entities, affiliates, lending partners, technology partners, marketing channels, business partners and other third parties) to contact you through SMS, instant messaging apps, call and/or e-mail for the purposes specified in this Privacy Policy.
//                             </p>
//                             <p>
//                                 You have an option to withdraw your consent that you have already provided by writing to the Grievance Officer at the contact information provided below. Please mention "Withdrawal of consent for processing personal data" in your subject line of your communication.
//                             </p>
//                             <p>
//                                 In the event you withdraw consent given to us under this Privacy Policy, we reserve the right to restrict or deny the provision of our services for which we consider such information to be necessary.
//                             </p>
//                         </ArticleCard>

//                         <ArticleCard id="changes" title="9) Changes to This Privacy Policy">
//                             <p>
//                                 Please check our Privacy Policy periodically for changes. We may update this Privacy Policy to reflect changes to our information practices.
//                             </p>
//                             <p>
//                                 We may alert/notify you about the significant changes to the Privacy Policy, in the manner as may be required under applicable laws.
//                             </p>
//                         </ArticleCard>

//                         <ArticleCard id="grievance" title="10) Grievance Officer">
//                             <div className="space-y-4">
//                                 <div>
//                                     <p><strong>Name of the Officer:</strong> HARJIBHAI S MANIYA</p>
//                                     <p><strong>Designation:</strong> CEO</p>
//                                 </div>
                                
//                                 <div>
//                                     <p><strong>Company Address:</strong></p>
//                                     <p>6TH, 608, ELEPHANTA BUSINESS HUB<br />
//                                     SINGANPOR ROAD, KATARGAM<br />
//                                     SURAT, Gujarat, 395004</p>
//                                 </div>
                                
//                                 <div>
//                                     <p><strong>Contact Details:</strong></p>
//                                     <p>Phone: 9574297123<br />
//                                     Time: Monday - Friday (9:00 - 18:00)</p>
//                                 </div>
//                             </div>
//                         </ArticleCard>

//                         {/* Back to top */}
//                         <div className="pt-4">
//                             <a
//                                 href="#"
//                                 className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 conic-border border border-transparent animate-border hover:bg-white/10"
//                             >
//                                 <ArrowUp className="h-4 w-4" />
//                                 Back to top
//                             </a>
//                         </div>
//                     </main>
//                 </div>
//             </div>

//             {/* Scoped styles (same look as your Terms file) */}
//             <style jsx>{`
//         .conic-panel {
//           position: relative;
//           border-radius: 24px;
//           background:
//             radial-gradient(120% 140% at 0% 0%, rgba(96,165,250,.12), rgba(96,165,250,0) 60%),
//             radial-gradient(120% 140% at 100% 100%, rgba(34,211,238,.10), rgba(34,211,238,0) 60%);
//         }
//         .conic-panel::before {
//           content: '';
//           position: absolute;
//           inset: -1px;
//           border-radius: inherit;
//           padding: 2px;
//           background: conic-gradient(from 180deg at 50% 50%,
//             rgba(59,130,246,.7), rgba(34,211,238,.7), rgba(59,130,246,.7));
//           -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
//           -webkit-mask-composite: xor;
//                   mask-composite: exclude;
//           opacity: .9;
//         }
//         /* highlight targeted section */
//         :target .card {
//           box-shadow: 0 0 0 2px rgba(59,130,246,.6), 0 0 0 8px rgba(59,130,246,.12);
//         }
//         .text-gradient-blue{
//           background:linear-gradient(90deg,#60a5fa,#3b82f6,#6366f1);
//           -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent
//         }
//       `}</style>
//         </section>
//     );
// }

// /* ---------- Pieces (reused pattern from your Terms) ---------- */
// function ArticleCard({ id, title, children }) {
//     return (
//         <section id={id} className="scroll-mt-28">
//             <div className="card relative overflow-hidden rounded-2xl ring-1 ring-white/10 conic-panel p-[2px]">
//                 <div className="relative rounded-[18px] bg-[#0b111f]/70 p-6 sm:p-7 backdrop-blur-xl">
//                     <div className="pointer-events-none absolute -top-10 right-0 h-24 w-24 rounded-full bg-blue-400/15 blur-2xl" />
//                     <h3 className="mb-3 text-lg sm:text-xl font-bold text-white">{title}</h3>
//                     <div className="space-y-3 text-white/85 leading-relaxed">{children}</div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// function ArrowUp({ className = '' }) {
//     return (
//         <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M12 19V5" strokeLinecap="round" />
//             <path d="M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//     );
// }


'use client';
import React from 'react';

export default function Privacy() {
    const sections = [
        { id: 'intro', title: '1) Introduction' },
        { id: 'collection', title: '2) Collection' },
        { id: 'usage', title: '3) Usage' },
        { id: 'sharing', title: '4) Sharing' },
        { id: 'security', title: '5) Security Precautions' },
        { id: 'data-retention', title: '6) Data Deletion and Retention' },
        { id: 'rights', title: '7) Your Rights' },
        { id: 'consent', title: '8) Consent' },
        { id: 'changes', title: '9) Changes to This Privacy Policy' },
        { id: 'grievance', title: '10) Grievance Officer' },
    ];

    return (
        <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#0a0f1a] pt-40 pb-14">
            {/* background spotlights */}
            <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* HERO */}
                <div className="relative mb-10 overflow-hidden rounded-3xl conic-border border border-transparent animate-border p-[2px]">
                    <div className="relative rounded-[22px] bg-[#0b111f]/70 px-6 py-10 sm:px-10 sm:py-14 backdrop-blur-xl">
                        <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
                        <div className="absolute -bottom-10 left-10 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />

                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-gradient-blue font-extrabold tracking-wide drop-shadow-[0_0_28px_rgba(79,134,255,.55)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                                Privacy Policy
                            </h1>

                            {/* Mobile quick chips */}
                            <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-2 sm:hidden">
                                {sections.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 ring-1 ring-white/10"
                                    >
                                        {s.title.replace(/\)\s?/, ') ')}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* BODY GRID */}
                <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
                    {/* Sticky TOC (desktop) */}
                    <aside className="sticky top-24 hidden self-start lg:block">
                        <nav className="rounded-2xl conic-border border border-transparent animate-border p-[2px]">
                            <div className="rounded-[16px] bg-[#0b111f]/70 p-4 backdrop-blur-xl">
                                <p className="my-3 text-xs font-semibold uppercase tracking-[.18em] text-white/60">On this page</p>
                                <ul className="space-y-1.5">
                                    {sections.map((s) => (
                                        <li key={s.id}>
                                            <a
                                                href={`#${s.id}`}
                                                className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-white/75 ring-1 ring-transparent transition hover:bg-white/5 hover:text-white"
                                            >
                                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400/70 group-hover:shadow-[0_0_8px_rgba(34,211,238,.6)]" />
                                                {s.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </aside>

                    {/* Content */}
                    <main className="space-y-6">
                        <ArticleCard id="intro" title="1) Introduction">
                            <p>
                                This Privacy Policy describes how HARJIBHAI S MANIYA and its affiliates (collectively "HARJIBHAI S MANIYA, we, our, us") collect, use, share, protect or otherwise process your information/personal data through our website https://www.designcrate.in/ (hereinafter referred to as Platform).
                            </p>
                            <p>
                                Please note that you may be able to browse certain sections of the Platform without registering with us. We do not offer any product/service under this Platform outside India and your personal data will primarily be stored and processed in India.
                            </p>
                            <p>
                                By visiting this Platform, providing your information or availing any product/service offered on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and conditions, and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy.
                            </p>
                            <p>
                                <strong>If you do not agree please do not use or access our Platform.</strong>
                            </p>
                        </ArticleCard>

                        <ArticleCard id="collection" title="2) Collection">
                            <p>
                                We collect your personal data when you use our Platform, services or otherwise interact with us during the course of our relationship and related information provided from time to time.
                            </p>
                            <p>
                                Some of the information that we may collect includes but is not limited to:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Personal data/information provided to us during sign-up/registering or using our Platform such as name, date of birth, address, telephone/mobile number, email ID</li>
                                <li>Any such information shared as proof of identity or address</li>
                                <li>Bank account or credit or debit card or other payment instrument information (with your consent)</li>
                                <li>Biometric information such as your facial features or physiological information (in order to enable use of certain features when opted for, available on the Platform)</li>
                            </ul>
                            <p>
                                You always have the option to not provide information, by choosing not to use a particular service or feature on the Platform.
                            </p>
                            <p>
                                We may track your behaviour, preferences, and other information that you choose to provide on our Platform. This information is compiled and analysed on an aggregated basis.
                            </p>
                            <p>
                                <strong>Security Notice:</strong> If you receive an email, a call from a person/association claiming to be HARJIBHAI S MANIYA seeking any personal data like debit/credit card PIN, net-banking or mobile banking password, we request you to never provide such information. If you have already revealed such information, report it immediately to an appropriate law enforcement agency.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="usage" title="3) Usage">
                            <p>
                                We use personal data to provide the services you request. To the extent we use your personal data to market to you, we will provide you the ability to opt-out of such uses.
                            </p>
                            <p>
                                We use your personal data to:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Assist sellers and business partners in handling and fulfilling orders</li>
                                <li>Enhance customer experience</li>
                                <li>Resolve disputes and troubleshoot problems</li>
                                <li>Inform you about online and offline offers, products, services, and updates</li>
                                <li>Customise your experience</li>
                                <li>Detect and protect us against error, fraud and other criminal activity</li>
                                <li>Enforce our terms and conditions</li>
                                <li>Conduct marketing research, analysis and surveys</li>
                            </ul>
                            <p>
                                You understand that your access to these products/services may be affected in the event permission is not provided to us.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="sharing" title="4) Sharing">
                            <p>
                                We may share your personal data internally within our group entities, our other corporate entities, and affiliates to provide you access to the services and products offered by them. These entities and affiliates may market to you as a result of such sharing unless you explicitly opt-out.
                            </p>
                            <p>
                                We may disclose personal data to third parties such as:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Sellers and business partners</li>
                                <li>Third party service providers including logistics partners</li>
                                <li>Prepaid payment instrument issuers</li>
                                <li>Third-party reward programs and other payment opted by you</li>
                            </ul>
                            <p>
                                These disclosures may be required for us to provide you access to our services and products offered to you, to comply with our legal obligations, to enforce our user agreement, to facilitate our marketing and advertising activities, to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our services.
                            </p>
                            <p>
                                We may disclose personal and sensitive personal data to government agencies or other authorised law enforcement agencies if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="security" title="5) Security Precautions">
                            <p>
                                To protect your personal data from unauthorised access or disclosure, loss or misuse we adopt reasonable security practices and procedures. Once your information is in our possession or whenever you access your account information, we adhere to our security guidelines to protect it against unauthorised access and offer the use of a secure server.
                            </p>
                            <p>
                                However, the transmission of information is not completely secure for reasons beyond our control. By using the Platform, the users accept the security implications of data transmission over the internet and the World Wide Web which cannot always be guaranteed as completely secure, and therefore, there would always remain certain inherent risks regarding use of the Platform.
                            </p>
                            <p>
                                <strong>Users are responsible for ensuring the protection of login and password records for their account.</strong>
                            </p>
                        </ArticleCard>

                        <ArticleCard id="data-retention" title="6) Data Deletion and Retention">
                            <p>
                                You have an option to delete your account by visiting your profile and settings on our Platform, this action would result in you losing all information related to your account. You may also write to us at the contact information provided below to assist you with these requests.
                            </p>
                            <p>
                                We may in event of any pending grievance, claims, pending shipments or any other services we may refuse or delay deletion of the account. Once the account is deleted, you will lose access to the account.
                            </p>
                            <p>
                                We retain your personal data information for a period no longer than is required for the purpose for which it was collected or as required under any applicable law. However, we may retain data related to you if we believe it may be necessary to prevent fraud or future abuse or for other legitimate purposes.
                            </p>
                            <p>
                                We may continue to retain your data in anonymised form for analytical and research purposes.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="rights" title="7) Your Rights">
                            <p>
                                You may access, rectify, and update your personal data directly through the functionalities provided on the Platform.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="consent" title="8) Consent">
                            <p>
                                By visiting our Platform or by providing your information, you consent to the collection, use, storage, disclosure and otherwise processing of your information on the Platform in accordance with this Privacy Policy.
                            </p>
                            <p>
                                If you disclose to us any personal data relating to other people, you represent that you have the authority to do so and permit us to use the information in accordance with this Privacy Policy.
                            </p>
                            <p>
                                You, while providing your personal data over the Platform or any partner platforms or establishments, consent to us (including our other corporate entities, affiliates, lending partners, technology partners, marketing channels, business partners and other third parties) to contact you through SMS, instant messaging apps, call and/or e-mail for the purposes specified in this Privacy Policy.
                            </p>
                            <p>
                                You have an option to withdraw your consent that you have already provided by writing to the Grievance Officer at the contact information provided below. Please mention "Withdrawal of consent for processing personal data" in your subject line of your communication.
                            </p>
                            <p>
                                In the event you withdraw consent given to us under this Privacy Policy, we reserve the right to restrict or deny the provision of our services for which we consider such information to be necessary.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="changes" title="9) Changes to This Privacy Policy">
                            <p>
                                Please check our Privacy Policy periodically for changes. We may update this Privacy Policy to reflect changes to our information practices.
                            </p>
                            <p>
                                We may alert/notify you about the significant changes to the Privacy Policy, in the manner as may be required under applicable laws.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="grievance" title="10) Grievance Officer">
                            <div className="space-y-4">
                                <div>
                                    <p><strong>Name of the Officer:</strong> Krinit</p>
                                    <p><strong>Designation:</strong> CEO</p>
                                </div>
                                
                                <div>
                                    <p><strong>Company Address:</strong></p>
                                    <p>6TH, 608, ELEPHANTA BUSINESS HUB<br />
                                    SINGANPOR ROAD, KATARGAM<br />
                                    SURAT, Gujarat, 395004</p>
                                </div>
                                
                                <div>
                                    <p><strong>Contact Details:</strong></p>
                                    <p>Phone: [Phone Number]<br />
                                    Time: Monday - Friday (9:00 - 18:00)</p>
                                </div>
                            </div>
                        </ArticleCard>

                        {/* Back to top */}
                        <div className="pt-4">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 conic-border border border-transparent animate-border hover:bg-white/10"
                            >
                                <ArrowUp className="h-4 w-4" />
                                Back to top
                            </a>
                        </div>
                    </main>
                </div>
            </div>

            {/* Scoped styles (same look as your Terms file) */}
            <style jsx>{`
        .conic-panel {
          position: relative;
          border-radius: 24px;
          background:
            radial-gradient(120% 140% at 0% 0%, rgba(96,165,250,.12), rgba(96,165,250,0) 60%),
            radial-gradient(120% 140% at 100% 100%, rgba(34,211,238,.10), rgba(34,211,238,0) 60%);
        }
        .conic-panel::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 2px;
          background: conic-gradient(from 180deg at 50% 50%,
            rgba(59,130,246,.7), rgba(34,211,238,.7), rgba(59,130,246,.7));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          opacity: .9;
        }
        /* highlight targeted section */
        :target .card {
          box-shadow: 0 0 0 2px rgba(59,130,246,.6), 0 0 0 8px rgba(59,130,246,.12);
        }
        .text-gradient-blue{
          background:linear-gradient(90deg,#60a5fa,#3b82f6,#6366f1);
          -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent
        }
      `}</style>
        </section>
    );
}

/* ---------- Pieces (reused pattern from your Terms) ---------- */
function ArticleCard({ id, title, children }) {
    return (
        <section id={id} className="scroll-mt-28">
            <div className="card relative overflow-hidden rounded-2xl ring-1 ring-white/10 conic-panel p-[2px]">
                <div className="relative rounded-[18px] bg-[#0b111f]/70 p-6 sm:p-7 backdrop-blur-xl">
                    <div className="pointer-events-none absolute -top-10 right-0 h-24 w-24 rounded-full bg-blue-400/15 blur-2xl" />
                    <h3 className="mb-3 text-lg sm:text-xl font-bold text-white">{title}</h3>
                    <div className="space-y-3 text-white/85 leading-relaxed">{children}</div>
                </div>
            </div>
        </section>
    );
}

function ArrowUp({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5" strokeLinecap="round" />
            <path d="M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
