import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content';

const Bio = () => {
    const { language } = useLanguage();
    const text = content[language].bio;

    return (
        <section className="section-container">
            <h2 className="section-title">{text.title}</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '40px',
                backgroundColor: 'var(--bg-secondary)',
                padding: '40px',
                border: '1px solid rgba(255,255,255,0.05)'
            }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {text.items.map((item, index) => (
                        <li key={index} style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            fontSize: '1.1rem',
                            color: 'var(--text-primary)'
                        }}>
                            <span style={{
                                color: 'var(--accent-gold)',
                                marginRight: '15px',
                                fontSize: '1.2rem'
                            }}>❖</span>
                            {item}
                        </li>
                    ))}
                </ul>

                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '30px'
                }}>
                    {text.description}
                </p>
            </div>
        </section>
    );
};

export default Bio;
