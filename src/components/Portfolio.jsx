import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content';

const Portfolio = () => {
    const { language } = useLanguage();
    const text = content[language].portfolio;

    if (!text) return null;

    return (
        <section className="section-container" id="portfolio">
            <h2 className="section-title">{text.title}</h2>
            <p style={{
                textAlign: 'center',
                color: 'var(--accent-gold)',
                fontSize: '1.2rem',
                marginBottom: '15px',
                fontWeight: '500'
            }}>
                {text.subtitle}
            </p>
            <p style={{
                textAlign: 'center',
                color: 'var(--text-secondary)',
                maxWidth: '800px',
                margin: '0 auto 40px',
                lineHeight: '1.7'
            }}>
                {text.description}
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '30px'
            }}>
                {text.items.map((item, index) => (
                    <div key={index} style={{
                        padding: '40px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                        cursor: 'default',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.borderColor = 'var(--accent-gold)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                        <h3 style={{
                            color: 'var(--accent-gold)',
                            marginBottom: '20px',
                            fontSize: '1.4rem',
                            letterSpacing: '1px'
                        }}>
                            {item.head}
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.8',
                            fontSize: '1rem'
                        }}>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
