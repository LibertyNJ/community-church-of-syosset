import PropTypes from 'prop-types';
import React from 'react';

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default function ExternalLink({ children, href, ...restProps }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" {...restProps}>
      {children}
    </a>
  );
}
