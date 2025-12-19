import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content';
import { motion } from 'framer-motion';

const Hero = () => {
    const { language } = useLanguage();
    const text = content[language].hero;

    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
            padding: '0 20px'
        }}>
            <div style={{ maxWidth: '800px' }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        color: 'var(--accent-gold)',
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        marginBottom: '1rem',
                        fontSize: '0.9rem'
                    }}
                >
                    {text.subtitle}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '1.5rem',
                        lineHeight: '1.2',
                        whiteSpace: 'pre-line'
                    }}
                >
                    {text.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem',
                        marginBottom: '3rem',
                        lineHeight: '1.6',
                        maxWidth: '600px',
                        margin: '0 auto 3rem auto'
                    }}
                >
                    {text.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a href="#contact" className="btn-primary">
                        {text.cta}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
