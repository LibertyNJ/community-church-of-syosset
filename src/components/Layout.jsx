import PropTypes from 'prop-types';
import React from 'react';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout({ children }) {
  return <>{children}</>;
}
