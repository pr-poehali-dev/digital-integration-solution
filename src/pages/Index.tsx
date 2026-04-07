import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Pricing from "@/components/Pricing";
import Schedule from "@/components/Schedule";
import Trainers from "@/components/Trainers";
import Reviews from "@/components/Reviews";
import MapSection from "@/components/MapSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SignupModal from "@/components/SignupModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onSignup={() => setModalOpen(true)} />
      <Featured />
      <Schedule onSignup={() => setModalOpen(true)} />
      <Pricing onSignup={() => setModalOpen(true)} />
      <Trainers onSignup={() => setModalOpen(true)} />
      <Reviews />
      <MapSection />
      <About />
      <Promo />
      <Footer />
      <SignupModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
};

export default Index;