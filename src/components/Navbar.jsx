import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage();
    const text = content[language].nav;
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.1)' : 'none',
            transition: 'all 0.3s ease',
            padding: '20px 0'
        }}>
            <div className="section-container" style={{ padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'var(--text-primary)',
                    letterSpacing: '2px'
                }}>
                    {text.brand}
                </h1>

                <button
                    onClick={toggleLanguage}
                    style={{
                        background: 'transparent',
                        border: '1px solid rgba(255,255,255,0.3)',
                        color: 'var(--text-primary)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.borderColor = 'var(--accent-gold)';
                        e.target.style.color = 'var(--accent-gold)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                        e.target.style.color = 'var(--text-primary)';
                    }}
                >
                    {text.switchBtn}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
