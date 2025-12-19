import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '40px 20px',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.2)',
            fontSize: '0.8rem',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <p>&copy; {new Date().getFullYear()} PREMIUM PHYSICS. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
