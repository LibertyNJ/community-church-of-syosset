import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function VisitPage({ ...restProps }) {
  return (
    <>
      <SEO title="Visit" />
      <Layout {...restProps}>
        <h1>Visit</h1>
        <section>
          <h2>Sunday Worship</h2>
          <p>10:00 AM</p>
          <p>
            The Community Church of Syosset <br />
            36 Church Street <br />
            Syosset, NY 11791
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.9540804939334!2d-73.50508988453177!3d40.82897227931938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2824f2e9a13e5%3A0xde28f19685ffb952!2sCommunity%20Church%20of%20Syosset!5e0!3m2!1sen!2sus!4v1576803685528!5m2!1sen!2sus"
            width="600"
            height="450"
            frameborder="0"
          >
            <p>
              Your browser does not support HTML <code>iframe</code> elements.{' '}
              <a
                href="https://goo.gl/maps/LnUjQnHs7k9ftwH98"
                rel="noopener noreferrer"
                target="_blank"
              >
                Find the Community Church of Syosset with Google Maps.
              </a>
            </p>
          </iframe>
          <p>
            Our congregation is diverse yet intimate; our service traditional
            yet interactive.
          </p>
          <p>
            Our hour-long Sunday worship service features hymnody, anthems sung
            by the chancel choir, a children’s sermon, scripture lessons,
            biblical preaching, and more. Prayer requests are welcomed from all
            in attendance. In our tradition, all baptized members of the
            Christian family are invited to receive communion on the first
            Sunday of each month.
          </p>
          <p>
            Worship is a time of renewal and refreshement. After the service we
            share fellowship with coffee, juice, and snacks, and take this
            opportunity to build our friendships.
          </p>
          <p>
            Church school is held during the worship service, which is
            appropriate for children of all ages.
          </p>
        </section>
        <section>
          <h2>Let us know you’re coming</h2>
          <p>
            We’re looking forward to meeting you. Drop us a note and our
            greeters will be expecting you.
          </p>
          <Link to="/contact">Contact us</Link>
        </section>
      </Layout>
    </>
  );
}
