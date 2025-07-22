import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import { ProgressBar } from '../components/VisaForm/SharedComponents';
import { visaMeta, malaysiaVisaOptions, sriLankaVisaOptions } from '../data/visaData';

// Import step renderers
import MalaysiaSteps from '../components/VisaForm/MalaysiaSteps';
import SriLankaSteps from '../components/VisaForm/SriLankaSteps';
import GenericSteps from '../components/VisaForm/GenericSteps';

const VisaApplication = () => {
    const { country: paramCountry } = useParams();
    const countrySlug = (paramCountry || 'israel').toLowerCase();
    const meta = visaMeta[countrySlug] || visaMeta.israel;
    const { width } = useWindowSize();
    const isDesktop = width >= 1024;

    // State management
    const [step, setStep] = useState(1);
    const initialSelectedVisa = countrySlug === 'malaysia' ? 'entrivisa' :
        countrySlug === 'srilanka' ? 'tourist_single' : 'tourist';
    const [selectedVisa, setSelectedVisa] = useState(initialSelectedVisa);
    const [visaCount, setVisaCount] = useState(1);
    const [agreed, setAgreed] = useState(false);
    const [passportSubStep, setPassportSubStep] = useState(1);
    const [paymentSubStep, setPaymentSubStep] = useState(1);
    const [billingSubStep, setBillingSubStep] = useState(1);

    // Props for step components
    const stepProps = {
        step,
        setStep,
        selectedVisa,
        setSelectedVisa,
        visaCount,
        setVisaCount,
        agreed,
        setAgreed,
        passportSubStep,
        setPassportSubStep,
        paymentSubStep,
        setPaymentSubStep,
        billingSubStep,
        setBillingSubStep,
        meta,
        countrySlug,
        malaysiaVisaOptions,
        sriLankaVisaOptions
    };

    const renderSteps = () => {
        switch (countrySlug) {
            case 'malaysia':
                return <MalaysiaSteps {...stepProps} isDesktop={isDesktop} />;
            case 'srilanka':
                return <SriLankaSteps {...stepProps} isDesktop={isDesktop} />;
            default:
                return <GenericSteps {...stepProps} isDesktop={isDesktop} />;
        }
    };

    const getStepTitle = () => {
        const titles = {
            1: 'Select visa type',
            2: 'Dates & purpose',
            3: 'Passport details',
            4: 'Personal information',
            5: 'Data verification',
            6: 'Payment'
        };
        return titles[step] || 'Application';
    };

    const getProgressWidth = () => {
        const progressMap = {
            1: '16.67%',
            2: '33.33%',
            3: '50%',
            4: '66.67%',
            5: '83.33%',
            6: '100%'
        };
        return progressMap[step] || '16.67%';
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center px-4 pt-4 pb-24 lg:items-center lg:py-8">
            {isDesktop ? (
                <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 gap-x-8 items-center mb-10">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] bg-clip-text text-transparent">
                            {getStepTitle()}
                        </h1>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full transition-all duration-500 ease-in-out"
                                style={{ width: getProgressWidth() }}
                            ></div>
                        </div>
                    </div>
                    {renderSteps()}
                </div>
            ) : (
                <div className="bg-white p-5 rounded-3xl shadow-xl w-full max-w-md mx-auto">
                    <ProgressBar currentStep={step} totalSteps={10} />
                    {renderSteps()}
                </div>
            )}
        </div>
    );
};

export default VisaApplication; 