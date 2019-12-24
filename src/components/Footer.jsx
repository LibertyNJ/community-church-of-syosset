import React from 'react';

import CopyrightWidget from './CopyrightWidget';
import ExternalLink from './ExternalLink';

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
            <ExternalLink href="https://www.ucc.org/">
              United Church of Christ
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="http://www.uccny.org/">
              UCC, New York Conference
            </ExternalLink>
          </li>
        </ul>
      </div>
      <div>
        <p>Social media</p>
        <ExternalLink href="https://www.facebook.com/communitychurchofsyosset/">
          Facebook
        </ExternalLink>
      </div>
      <CopyrightWidget
        copyrightHolder="Community Church of Syosset"
        copyrightYear={2020}
      />
    </footer>
  );
}
