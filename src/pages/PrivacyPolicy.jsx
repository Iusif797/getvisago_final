import React from 'react';

const SectionHeading = ({ children }) => (
    <h2 className="text-emerald-500 text-2xl font-extrabold mt-10 mb-4">{children}</h2>
);

const PrivacyPolicy = () => {
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
                    Privacy Policy
                </h1>

                <p className="text-sm text-gray-700 leading-6 max-w-3xl">
                    GetVisago ("we", "our", or "us") is committed to protecting your privacy. This
                    Privacy Policy explains how we collect, use, disclose, and safeguard your
                    information when you visit our website <a className="underline text-[#7C3AED]" href="https://getvisago.com" target="_blank" rel="noreferrer">https://getvisago.com</a> (the "Site").
                </p>
                <p className="text-sm text-gray-700 leading-6 mt-3 max-w-3xl">
                    Please read this policy carefully. If you do not agree with the terms of this policy,
                    please do not access the site.
                </p>

                <SectionHeading>1. Information We Collect</SectionHeading>
                <p className="text-sm text-gray-700 leading-6">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-3 mt-3 text-sm text-gray-800">
                    <li>
                        <span className="font-semibold">Personal Data</span>
                        <div className="mt-1 text-gray-700">Name, email address, phone number, and other contact details.</div>
                        <div className="text-gray-500 text-xs">[Note: Add other personal data fields if collected, e.g., passport details, visa application info, etc.]</div>
                    </li>
                    <li>
                        <span className="font-semibold">Usage Data</span>
                        <div className="mt-1 text-gray-700">IP address, browser type, operating system, access times, and pages viewed directly before and after accessing the site.</div>
                    </li>
                    <li>
                        <span className="font-semibold">Cookies and Tracking Technologies</span>
                        <div className="mt-1 text-gray-700">We use cookies and similar tracking technologies.</div>
                        <div className="text-gray-500 text-xs">[Note: Insert link to your Cookie Policy if you have one.]</div>
                    </li>
                </ul>

                <SectionHeading>2. How We Use Your Information</SectionHeading>
                <p className="text-sm text-gray-700 leading-6">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-3 text-sm text-gray-800">
                    <li>Provide and manage the services;</li>
                    <li>Improve the user experience;</li>
                    <li>Send updates, confirmations, or marketing communications;</li>
                    <li>Comply with legal obligations.</li>
                </ul>

                <SectionHeading>3. Sharing Your Information</SectionHeading>
                <p className="text-sm text-gray-700 leading-6">We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-1 mt-3 text-sm text-gray-800">
                    <li>Service providers;</li>
                    <li>Legal authorities if required by law;</li>
                    <li>Affiliates or partners (with your consent, if necessary).</li>
                </ul>

                <SectionHeading>4. Data Retention</SectionHeading>
                <p className="text-sm text-gray-700 leading-6 max-w-3xl">
                    We retain your information as long as necessary to fulfill the purposes outlined in this policy unless a
                    longer retention period is required by law.
                </p>

                <SectionHeading>5. Your Rights</SectionHeading>
                <p className="text-sm text-gray-700 leading-6">Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-3 text-sm text-gray-800">
                    <li>Access or correct your personal data;</li>
                    <li>Request deletion of your data;</li>
                    <li>Object to certain uses of your information.</li>
                </ul>

                <SectionHeading>6. Third-Party Links</SectionHeading>
                <p className="text-sm text-gray-700 leading-6 max-w-3xl">
                    Our website may contain links to third-party websites. We are not responsible for the privacy
                    practices of those sites.
                </p>

                <SectionHeading>7. Security</SectionHeading>
                <p className="text-sm text-gray-700 leading-6 max-w-3xl">
                    We implement appropriate technical and organizational security measures to
                    protect your personal data.
                </p>

                <SectionHeading>8. Contact Us</SectionHeading>
                <p className="text-sm text-gray-700 leading-6 max-w-3xl">
                    If you have questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <ul className="pl-0 mt-3 text-sm text-gray-800 space-y-1">
                    <li>📧 Email: [support@getvisago.com]</li>
                    <li>📍 Address: [Insert your company address]</li>
                </ul>
            </div>
        </main>
    );
};

export default PrivacyPolicy;


