import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content';

const Philosophy = () => {
    const { language } = useLanguage();
    const text = content[language].philosophy;

    return (
        <section className="section-container">
            <h2 className="section-title">{text.title}</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px'
            }}>
                {text.points.map((point, index) => (
                    <div key={index} style={{
                        padding: '30px',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease'
                    }}>
                        <h3 style={{
                            color: 'var(--accent-gold)',
                            marginBottom: '15px',
                            fontSize: '1.3rem'
                        }}>
                            {point.head}
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.6'
                        }}>
                            {point.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Philosophy;
