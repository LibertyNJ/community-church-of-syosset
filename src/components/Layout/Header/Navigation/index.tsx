import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import NavDropdown from './NavDropdown';
import NavItem from './NavItem';
import NavList from './NavList';
import NavListToggle from './NavListToggle';
import { breakpoint, color, typography } from '../../../../style';

const Nav = styled.nav`
  display: flex;

  a {
    color: ${color.body};
    text-decoration: none;
    transition: background-color 500ms, color 500ms, filter 500ms;

    &:focus {
      filter: drop-shadow(0 0 5px ${color.primary});
    }

    &:hover {
      background-color: ${color.body};
      color: ${color.white};
    }
  }

  ul {
    font-family: ${typography.font.heading};
    font-size: ${typography.fontSize.h5.xs};
    line-height: ${typography.lineHeight.h5.xs};
    list-style: none;

    @media (min-width: ${breakpoint.md}) {
      font-size: ${typography.fontSize.body.xs};
      line-height: ${typography.lineHeight.body.xs};
    }
  }
`;

type Props = {
  className?: string;
};

const Navigation: React.FC<Props> = ({ className }) => {
  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState();
  const [navListIsHiding, setNavListIsHiding] = useState(false);
  const [navListIsShown, setNavListIsShown] = useState(false);

  useEffect(() => getAndSetHeaderHeight(setHeaderHeight), []);
  useEffect(() => listenForAndHandleDocumentClick(setActiveDropdownId), []);

  return (
    <Nav className={className} id="navigation">
      <NavListToggle
        navListIsShown={navListIsShown}
        setNavListIsHiding={setNavListIsHiding}
        setNavListIsShown={setNavListIsShown}
      />
      <NavList
        className={`${navListIsShown && 'show'} ${navListIsHiding && 'hiding'}`}
        headerHeight={headerHeight}
      >
        <NavItem to="/">Home</NavItem>
        <NavItem to="/events">Events</NavItem>
        <NavItem to="/sermons">Sermons</NavItem>
        <NavDropdown
          dropdownListIsShown={activeDropdownId === 'more-dropdown'}
          id="more-dropdown"
          setActiveDropdownId={setActiveDropdownId}
          title="More"
        >
          <NavItem to="/images">Images</NavItem>
          <NavItem to="/mission">Mission</NavItem>
          <NavItem to="/nursery-school">Nursery school</NavItem>
        </NavDropdown>
        <NavDropdown
          dropdownListIsShown={activeDropdownId === 'about-dropdown'}
          id="about-dropdown"
          setActiveDropdownId={setActiveDropdownId}
          title="About"
        >
          <NavItem to="/about">Who we are</NavItem>
          <NavItem to="/about/belief">What we believe</NavItem>
          <NavItem to="/about/pastor">Our pastor</NavItem>
          <NavItem to="/about/team">Our team</NavItem>
        </NavDropdown>
        <NavItem to="/visit">Visit</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;

function getAndSetHeaderHeight(
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>
) {
  const headerElement = document.querySelector('header');

  if (headerElement) {
    setHeaderHeight(headerElement.offsetHeight);
  }
}

function listenForAndHandleDocumentClick(
  setActiveDropdownId: React.Dispatch<React.SetStateAction<string | null>>
) {
  const navigation = document.getElementById('navigation');

  if (navigation) {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!navigation.contains(event.target as Node)) {
        setActiveDropdownId(null);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => document.removeEventListener('click', handleDocumentClick);
  }
}
