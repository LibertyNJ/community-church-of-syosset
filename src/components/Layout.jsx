import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
