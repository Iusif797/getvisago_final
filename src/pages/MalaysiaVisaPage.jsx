import React from 'react';
import VisaForm from '../components/VisaForm/VisaForm';
import malaysiaFlag from '../assets/malaysia.png'; // Убедитесь, что путь к флагу правильный

const MalaysiaVisaPage = () => {
    const malaysiaVisaData = {
        country: 'Malaysia',
        steps: [
            {
                title: 'Select visa type',
                fields: [
                    {
                        type: 'radio',
                        name: 'visaType',
                        label: 'Select visa type',
                        options: [
                            {
                                label: 'Tourist visa B2',
                                price: 55,
                                duration: '90 days',
                                description: 'Up to 90 days, for tourism, visiting family, or short-term business.',
                            },
                            {
                                label: 'Fast tourist visa B2',
                                price: 80,
                                duration: '90 days',
                                description: 'Expedited processing (+25 USD), still max 90 days.',
                            },
                        ],
                    },
                    {
                        type: 'counter',
                        name: 'visaCount',
                        label: 'Select number of visas',
                    },
                ],
            },
            {
                title: 'Client data',
                fields: [
                    {
                        type: 'text',
                        name: 'fullName',
                        label: 'First and Last Name',
                        placeholder: 'Your Name',
                        icon: 'FaUser',
                    },
                    {
                        type: 'email',
                        name: 'email',
                        label: 'E-mail',
                        placeholder: 'your@email.com',
                        icon: 'FaEnvelope',
                    },
                    {
                        type: 'tel',
                        name: 'phone',
                        label: 'Phone number',
                        placeholder: '+1 123 325 57-73',
                        icon: 'FaPhone',
                    },
                    {
                        type: 'text',
                        name: 'address',
                        label: 'Home address',
                        placeholder: 'Address',
                        icon: 'FaHome',
                    },
                    {
                        type: 'checkbox',
                        name: 'agreement',
                        label: 'By clicking "Continue", I agree to the Privacy Policy',
                    },
                ],
            },
            {
                title: 'Dates & purpose',
                fields: [
                    {
                        type: 'date',
                        name: 'entryDate',
                        label: 'Planned date of entry',
                    },
                    {
                        type: 'date',
                        name: 'exitDate',
                        label: 'Planned date of exit',
                    },
                    {
                        type: 'text',
                        name: 'purpose',
                        label: 'Purpose of entry',
                        placeholder: 'Перечислите места',
                    },
                ],
            },
        ],
        meta: {
            flag: malaysiaFlag,
            title: 'Tourist visa',
            price: 65,
            validity: '30 days',
        },
    };

    return <VisaForm data={malaysiaVisaData} />;
};

export default MalaysiaVisaPage; 