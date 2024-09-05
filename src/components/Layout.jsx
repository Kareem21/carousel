import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <Header />
            <main style={{ width: '100%', marginTop: '104px' }}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;