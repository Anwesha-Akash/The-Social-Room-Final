import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Founders from './components/Founders';
import Clients from './components/Clients';
import Process from './components/Process';
import Pricing from './components/Pricing';
import WhyUs from './components/WhyUs';
import BookCall from './components/BookCall';
import Instagram from './components/Instagram';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Modals
import BookingModal from './components/BookingModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import ReelModal from './components/ReelModal';
import CareersModal from './components/CareersModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('Launch');
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [selectedReel, setSelectedReel] = useState(null);
  const [careersModalOpen, setCareersModalOpen] = useState(false);

  const handleOpenBooking = (tierName) => {
    if (typeof tierName === 'string') {
      setSelectedTier(tierName);
    } else {
      setSelectedTier('Launch');
    }
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-ink flex flex-col antialiased selection:bg-crimson selection:text-white">
      
      {/* 01 — Announcement Bar */}
      <AnnouncementBar onOpenBooking={() => handleOpenBooking()} />

      {/* 02 — Sticky Navigation */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()}
        onOpenCareers={() => setCareersModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 03 — Hero */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()}
          onOpenServices={() => setServiceModalOpen(true)}
        />

        {/* 04 — What We Do */}
        <Services 
          onOpenServiceModal={() => setServiceModalOpen(true)}
        />

        {/* 05 — Founder Intro */}
        <Founders 
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 06 — Clients */}
        <Clients 
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 07 — Process — "How It Works" (LOCKED) */}
        <Process 
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 08 — Pricing */}
        <Pricing 
          onOpenBooking={(tier) => handleOpenBooking(tier)}
        />

        {/* 09 — Why — "We Already Get It" */}
        <WhyUs 
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 10 — Book-a-Call Band */}
        <BookCall 
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 11 — On the Gram */}
        <Instagram 
          onSelectReel={(reel) => setSelectedReel(reel)}
        />

        {/* 12 — FAQ */}
        <FAQ 
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* 13 — Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()}
        onOpenCareers={() => setCareersModalOpen(true)}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedTier={selectedTier}
      />

      <ServiceDetailModal
        isOpen={serviceModalOpen}
        onClose={() => setServiceModalOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <ReelModal
        reel={selectedReel}
        onClose={() => setSelectedReel(null)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <CareersModal
        isOpen={careersModalOpen}
        onClose={() => setCareersModalOpen(false)}
      />

    </div>
  );
}
