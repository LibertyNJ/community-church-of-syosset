import React from 'react';

import CopyrightWidget from './CopyrightWidget';

export default function Footer({ ...restProps }) {
  return (
    <footer {...restProps}>
      <address>
        Community Church of Syosset <br />
        36 Church Street <br />
        Syosset, NY 11791 <br />
        Phone: <a href="tel:+15169212240">(516)921-2240</a>
      </address>
      <div>
        <p>Our greater church</p>
        <ul>
          <li>
            <a
              href="https://www.ucc.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              United Church of Christ
            </a>
          </li>
          <li>
            <a
              href="http://www.uccny.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              UCC, New York Conference
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>Social media</p>
        <a
          href="https://www.facebook.com/communitychurchofsyosset/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Facebook
        </a>
      </div>
      <CopyrightWidget
        copyrightHolder="Community Church of Syosset"
        copyrightYear={2020}
      />
    </footer>
  );
}
