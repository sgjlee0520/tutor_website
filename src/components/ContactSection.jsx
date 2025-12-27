import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content';

const ContactSection = () => {
    const { language } = useLanguage();
    const text = content[language].contact;

    return (
        <section id="contact" style={{
            background: 'var(--bg-secondary)',
            padding: '100px 20px',
            textAlign: 'center'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 className="section-title">{text.title}</h2>
                <p style={{
                    marginBottom: '50px',
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem'
                }}>
                    {text.desc}
                </p>
                {content[language].schedule && (
                    <div style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>
                        <p style={{ margin: '6px 0' }}><strong>In-person (Summer):</strong> {content[language].schedule.inPerson}</p>
                        <p style={{ margin: '6px 0' }}><strong>Online:</strong> {content[language].schedule.online}</p>
                    </div>
                )}

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {/* Main Waitlist CTA */}
                    <a
                        href={text.links.waitlist}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            textAlign: 'center',
                            backgroundColor: 'var(--accent-gold)', /* Filled button for primary action */
                            color: 'var(--bg-color)'
                        }}
                    >
                        {text.waitlistBtn}
                    </a>

                    {/* Kakao Secondary CTA */}
                    <a
                        href={text.links.kakao}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--text-secondary)',
                            textDecoration: 'underline',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}
                    >
                        {text.kakaoBtn}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
