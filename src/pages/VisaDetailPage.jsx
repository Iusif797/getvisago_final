import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VisaDetailView from '../components/VisaDetail/VisaDetailView';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const VisaDetailPage = () => {
  const { country } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <VisaDetailView />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VisaDetailPage; 