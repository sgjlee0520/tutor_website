import React, { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Philosophy from './components/Philosophy';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Inner component to handle side effects of language change
const AppContent = () => {
    const { language } = useLanguage();

    useEffect(() => {
        document.body.setAttribute('data-lang', language);
    }, [language]);

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Bio />
            <Philosophy />
            <ContactSection />
            <Footer />
        </div>
    );
};

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
}

export default App;
