import PropTypes from 'prop-types';
import React from 'react';

CopyrightWidget.propTypes = {
  copyrightHolder: PropTypes.string.isRequired,
  copyrightYear: PropTypes.number.isRequired,
};

export default function CopyrightWidget({
  copyrightHolder,
  copyrightYear,
  ...restProps
}) {
  const currentYear = new Date().getFullYear();

  return (
    <div {...restProps}>
      © {copyrightHolder} {copyrightYear}
      {isPastInitialYear(currentYear, copyrightYear) && `–${currentYear}`}
    </div>
  );
}

function isPastInitialYear(currentYear, initialYear) {
  return currentYear > initialYear;
}
