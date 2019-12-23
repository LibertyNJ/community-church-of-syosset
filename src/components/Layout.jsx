import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import Navigation from './Navigation';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
