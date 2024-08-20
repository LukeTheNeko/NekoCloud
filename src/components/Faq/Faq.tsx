import { useState } from 'react';

interface FaqItem {
    question: string;
    answer: string;
}

export default function Faq() {
    const [openQuestions, setOpenQuestions] = useState<{ [key: number]: boolean }>({});

    const toggleQuestion = (index: number) => {
        setOpenQuestions((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };
    const faqItems: FaqItem[] = [
        { question: "Como recebo minha hospedagem?", answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus molestias alias nesciunt corrupti Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus molestias alias nesciunt corrupti" },
        { question: "Posso cancelar a qualquer momento?", answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus molestias alias nesciunt corrupti Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus molestias alias nesciunt corrupti" },
        { question: "Quais são as formas de pagamento?", answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus molestias alias nesciunt corrupti Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus molestias alias nesciunt corrupti" },
    ];
    return (
        <>
            <section id="faq" className="py-10 bg-slate-100 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
                            <div className="text-sm font-bold tracking-wider text-emerald-500 uppercase">FAQ</div>
                            <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">Perguntas frequentes</h2>
                        </div>
                    </div>
                    <div className="max-w-3xl mx-auto mt-4 space-y-4 md:mt-10">
                        {faqItems.map((item, index) => (
                            <div key={index}
                                className="transition-all duration-200 rounded-lg bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                                <button
                                    type="button"
                                    onClick={() => toggleQuestion(index)}
                                    className="flex items-center justify-between w-full px-3 py-4 sm:p-5">
                                    <span className="flex text-lg font-medium text-[14px] md:text-[16px] text-black">{item.question}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className={`w-6 h-6 text-emerald-400 transition-transform duration-200 ${openQuestions[index] ? 'rotate-0' : 'rotate-180'}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`${openQuestions[index] ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                                    <p className='text-gray-700'>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}