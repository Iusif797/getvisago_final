import React from 'react';
import termsText from './terms-of-use.txt?raw';

const TermsOfUse = () => {
    const headings = [
        'Acceptance of Terms:',
        'About GetVisago’s Services:',
        'User Responsibilities and Obligations:',
        'Fees and Payment:',
        'Service Process and Completion:',
        'Disclaimer of Affiliation and Authority:',
        'Disclaimers and Limitations of Liability:',
        'Indemnification:',
        'Intellectual Property Rights:',
        'Right to Refuse or Terminate Service:',
        'Travel Compliance:',
        'Governing Law and Jurisdiction:',
        'Severability:',
        'No Waiver:',
        'Modifications to Terms:',
        'Entire Agreement:',
        'Contact Information:'
    ];

    const raw = termsText.replace(/\r\n/g, '\n');
    const lines = raw.split('\n');

    const elements = [];
    let key = 0;

    for (const line of lines) {
        const trimmed = line.trim();

        if (!trimmed) {
            // пустая строка — вертикальный интервал
            elements.push(<div key={`sp-${key++}`} className="h-2" />);
            continue;
        }

        const heading = headings.find(h => trimmed.startsWith(h));
        if (heading) {
            // заголовок раздела в стиле Privacy Policy; текст после двоеточия — как абзац
            elements.push(
                <h2 key={`h-${key++}`} className="text-emerald-500 text-2xl font-extrabold mt-10 mb-4">{heading}</h2>
            );
            const rest = trimmed.slice(heading.length).trim();
            if (rest) {
                elements.push(
                    <p key={`p-${key++}`} className="text-sm text-gray-700 leading-6 max-w-3xl mb-3">{rest}</p>
                );
            }
            continue;
        }

        if (trimmed.startsWith('·')) {
            // маркеры оставляем как есть, оформляем отступом
            elements.push(
                <p key={`b-${key++}`} className="text-sm text-gray-800 leading-6 max-w-3xl pl-6 whitespace-pre-wrap mb-2">{line}</p>
            );
            continue;
        }

        // обычные абзацы
        elements.push(
            <p key={`p-${key++}`} className="text-sm text-gray-700 leading-6 max-w-3xl mb-3">{line}</p>
        );
    }

    return (
        <main className="w-full bg-white">
            <div className="w-full max-w-[1000px] mx-auto px-6 py-10">
                <h1
                    className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent"
                    style={{
                        backgroundImage:
                            'linear-gradient(90deg, #00BFA5 0%, #3B82F6 50%, #7C3AED 100%)',
                    }}
                >
                    Terms of Use
                </h1>

                <div>
                    {elements}
                </div>
            </div>
        </main>
    );
};

export default TermsOfUse;



