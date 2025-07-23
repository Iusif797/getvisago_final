import israelFlagIcon from '../assets/Israel (IL).svg';
import omanFlagIcon from '../assets/oman.jpg';
import australiaFlagIcon from '../assets/australia.jpg';
import australiaFlag from '../assets/Flag_of_Australia.svg.png';
import saudiArabiaFlagIcon from '../assets/saudi-arabia.png';
import malaysiaFlagPng from '../assets/Flag_of_Malaysia.svg.png';
import sriLankaFlag from '../assets/Flag_of_Sri_Lanka.svg';
import bahrainFlag from '../assets/bahrain.png';
import cambodiaFlag from '../assets/Flag_of_Cambodia.svg';

export const visaMeta = {
    israel: {
        flag: israelFlagIcon,
        title: 'Tourist visa B2',
        price: 55,
        validity: '2 years',
    },
    oman: {
        flag: omanFlagIcon,
        title: 'Tourist visa',
        price: 50,
        validity: '30 days',
    },
    australia: {
        flag: australiaFlag,
        title: 'ETA (Electronic Travel Authority)',
        price: 55,
        validity: '1 year',
    },
    'saudi-arabia': {
        flag: saudiArabiaFlagIcon,
        title: 'Tourist visa',
        price: 270,
        validity: '1 year',
    },
    malaysia: {
        flag: malaysiaFlagPng,
        title: 'eNTRI Visa',
        price: 55,
        validity: '15 days',
    },
    srilanka: {
        flag: sriLankaFlag,
        title: 'Tourist ETA (Single Entry)',
        price: 55,
        validity: '30 days',
    },
    bahrain: {
        flag: bahrainFlag,
        title: 'Tourist eVisa',
        price: 45,
        validity: '30 days',
    },
    cambodia: {
        flag: cambodiaFlag,
        title: 'Tourist eVisa (T Class)',
        price: 55,
        validity: '30 days',
    },
};

export const malaysiaVisaOptions = [
    {
        id: 'entrivisa',
        label: 'eNTRI Visa',
        price: 55,
        duration: '15 days',
        description: 'Up to 15 days, for tourism or short visits. Single entry. Valid for 3 months from issue date.'
    },
    {
        id: 'singleEntry',
        label: 'Tourist eVisa (Single Entry)',
        price: 80,
        duration: '30 days',
        description: 'Up to 30 days, for tourism or visiting family. Valid for 3 months. One-time entry only.'
    },
    {
        id: 'multipleEntry',
        label: 'Tourist eVisa (Multiple Entry)',
        price: 80,
        duration: '30 days',
        description: 'Up to 30 days per visit, multiple entries allowed. Valid for 3 to 6 months. For regular travelers.'
    },
    {
        id: 'fastVisa',
        label: 'Fast visa service (+25 USD)',
        price: 80,
        duration: '90 days',
        description: 'Expedited processing within 12–24 hours.'
    },
];

export const sriLankaVisaOptions = [
    {
        id: 'tourist_single',
        label: 'Tourist ETA (Single Entry)',
        price: 55,
        duration: '90 days',
        description: 'Up to 30 days, for tourism or visiting friends/family. Valid for 6 months from approval date. Single entry.'
    },
    {
        id: 'tourist_double',
        label: 'Tourist ETA (Double Entry)',
        price: 80,
        duration: '90 days',
        description: 'Up to 30 days per entry, for tourism. Two entries allowed within 30 days. Valid for 6 months.'
    },
    {
        id: 'business',
        label: 'Business ETA',
        price: 80,
        duration: '90 days',
        description: 'Up to 30 days, for meetings, conferences, or short business trips. No paid work allowed. Single or double entry.'
    },
];

export const bahrainVisaOptions = [
    {
        id: 'tourist_single',
        label: 'Tourist eVisa (Single Entry)',
        price: 45,
        duration: '30 days',
        description: 'Up to 30 days, for tourism or visiting family. Valid for 3 months from issue date. Single entry only.'
    },
    {
        id: 'tourist_multiple',
        label: 'Tourist eVisa (Multiple Entry)',
        price: 65,
        duration: '30 days',
        description: 'Up to 30 days per visit, multiple entries allowed. Valid for 6 months. For regular travelers.'
    },
    {
        id: 'business',
        label: 'Business eVisa',
        price: 65,
        duration: '30 days',
        description: 'Up to 30 days, for business meetings and conferences. No paid work allowed. Single or multiple entry.'
    },
    {
        id: 'fast_processing',
        label: 'Fast processing service (+20 USD)',
        price: 65,
        duration: '30 days',
        description: 'Expedited processing within 24-48 hours.'
    },
];

export const cambodiaVisaOptions = [
    {
        id: 'tourist_single',
        label: 'Tourist eVisa (T Class)',
        price: 55,
        duration: '14 days',
        description: 'Up to 30 days, for tourism and short personal visits. Single entry only. Valid for 3 months from the date of issue.'
    },
    {
        id: 'fast_processing',
        label: 'Fast visa service (+25 USD)',
        price: 80,
        duration: '90 days',
        description: 'Expedited processing within 12–24 hours.'
    },
];

export const australiaVisaOptions = [
    {
        id: 'eta_601',
        label: 'ETA (Electronic Travel Authority) — Subclass 601',
        price: 55,
        duration: '14 days',
        description: 'Up to 14 days, for tourism, family visits, or business. Valid for 30 days from issue. One-time entry.'
    },
    {
        id: 'evisitor_651',
        label: 'eVisitor — Subclass 651',
        price: 80,
        duration: '30 days',
        description: 'Up to 30 days per entry, for tourism. Two entries allowed within 30 days. Valid for 6 months.'
    },
    {
        id: 'fast_visa',
        label: 'Fast visa service (+25 USD)',
        price: 80,
        duration: '90 days',
        description: 'Expedited processing within 12–24 hours.'
    },
];
