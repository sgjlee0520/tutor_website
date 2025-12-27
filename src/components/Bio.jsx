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
                {text.students && (
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px', marginTop: '20px' }}>
                        <h3 style={{ marginBottom: '10px' }}>Students & Experience</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px' }}>
                            {text.students.map((s, i) => (
                                <li key={i} style={{ color: 'var(--text-primary)' }}>• {s}</li>
                            ))}
                        </ul>
                        {text.workplaces && (
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                                <strong>Places:</strong> {text.workplaces.join(' • ')}
                            </p>
                        )}
                        {text.website && (
                            <p style={{ marginTop: '8px' }}>
                                <a href={text.website} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-gold)' }}>
                                    Visit my personal website
                                </a>
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Bio;
