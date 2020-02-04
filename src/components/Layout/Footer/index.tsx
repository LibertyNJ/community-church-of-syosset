import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CopyrightNotice from './CopyrightNotice';
import ExternalLink from '../../ExternalLink';
import TitledList from '../../TitledList';
import { baseline, breakpoint, color } from '../../../style';

const Grid = styled.div`
  @media (min-width: ${breakpoint.md}) {
    column-gap: calc(6 * ${baseline});
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledFooter = styled.footer`
  background-color: ${color.darkGray};
  color: ${color.white};
  padding: calc(6 * ${baseline}) calc(3 * ${baseline}) 0;

  a {
    color: ${color.secondary};
    transition: filter 500ms;

    &:focus {
      filter: drop-shadow(0 0 5px ${color.white});
    }

    &:active {
      color: ${color.primary};
    }
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: ${color.secondary};
`;

const StyledTitledList = styled(TitledList)`
  margin-bottom: calc(6 * ${baseline});

  ul {
    list-style: none;
    padding-left: 0;
  }
`;

type Props = {
  className?: string;
  copyright: {
    holder: string;
    initialYear: number;
  };
  organization: {
    address: {
      city: string;
      state: string;
      street: string;
      zip: string;
    };
    name: string;
    phone: string;
  };
  socialMedia: {
    facebook: {
      slug: string;
    };
  };
};

const Footer: React.FC<Props> = ({
  className,
  copyright,
  organization,
  socialMedia,
}) => {
  const phoneString = organization.phone.replace(
    /(\d{3})(\d{3})(\d{4})/,
    '($1)$2-$3'
  );

  return (
    <StyledFooter className={className}>
      <Grid>
        <address>
          <p>
            <b>{organization.name}</b> <br />
            {organization.address.street} <br />
            {organization.address.city}, {organization.address.state}{' '}
            {organization.address.zip} <br />
            <FontAwesomeIcon icon="phone" />{' '}
            <a href={`tel:+1${organization.phone}`}>{phoneString}</a>
          </p>
        </address>
        <StyledTitledList title="Social media" type="unordered">
          <>
            <FontAwesomeIcon icon={['fab', 'facebook-square']} />{' '}
            <StyledExternalLink
              href={`https://www.facebook.com/${socialMedia.facebook.slug}/`}
            >
              Facebook
            </StyledExternalLink>
          </>
        </StyledTitledList>
        <StyledTitledList title="United Church of Christ" type="unordered">
          <StyledExternalLink href="https://www.ucc.org/">
            Global
          </StyledExternalLink>
          <StyledExternalLink href="http://www.uccny.org/">
            New York Conference
          </StyledExternalLink>
        </StyledTitledList>
      </Grid>
      <CopyrightNotice
        currentYear={new Date().getFullYear()}
        holder={copyright.holder}
        initialYear={copyright.initialYear}
      />
    </StyledFooter>
  );
};

export default Footer;
