import React from 'react';
import refundText from './refund-policy.txt?raw';

const RefundPolicy = () => {
    const headings = [
        'Refund Policy',
        'General Principle:',
        'Non-Refundable Items:',
        'Eligible Refund Situations:',
        'How to Request a Refund:',
        'Refund Method and Timing:',
        'No Refund for Denied Visas or Government Delays:',
        'Cancellation of Application:',
        'Refunds for Delayed Services:',
        'Chargebacks and Bank Disputes:',
        'Updates or Changes to Refund Policy:',
        'Contact for Refunds:'
    ];

    const raw = refundText.replace(/\r\n/g, '\n');
    const lines = raw.split('\n');
    const elements = [];
    let key = 0;

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) {
            elements.push(<div key={`sp-${key++}`} className="h-2" />);
            continue;
        }

        const heading = headings.find(h => trimmed.startsWith(h));
        if (heading) {
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

        if (trimmed.startsWith('·') || /^\d+\./.test(trimmed)) {
            elements.push(
                <p key={`b-${key++}`} className="text-sm text-gray-800 leading-6 max-w-3xl pl-6 whitespace-pre-wrap mb-2">{line}</p>
            );
            continue;
        }

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
                    Refund & Cancellation Policy
                </h1>

                <div>
                    {elements}
                </div>
            </div>
        </main>
    );
};

export default RefundPolicy;


