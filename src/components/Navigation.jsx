import { Link } from 'gatsby';
import React from 'react';

export default function Navigation({ ...restProps }) {
  return (
    <nav {...restProps}>
      <div>
        <Link to="/">Community Church of Syosset</Link>
      </div>
      <ul>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
          <ul>
            <li>
              <Link to="/about">Who we are</Link>
            </li>
            <li>
              <Link to="/about/belief">What we believe</Link>
            </li>
            <li>
              <Link to="/about/pastor">Meet our pastor</Link>
            </li>
            <li>
              <Link to="/about/team">Meet our team</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/mission">Mission</Link>
        </li>
        <li>
          <Link to="/sermons">Sermons</Link>
        </li>
        <li>
          <Link to="/nursery-school">Nursery school</Link>
        </li>
        <li>
          <Link to="/visit">Visit</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
