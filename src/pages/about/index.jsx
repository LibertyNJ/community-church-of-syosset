import { Link } from 'gatsby';
import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default function AboutPage({ ...restProps }) {
  return (
    <>
      <SEO title="About" />
      <Layout {...restProps}>
        <h1>Who we are</h1>
        <section>
          <h2>A pilgrim people</h2>
          <p>
            —seekers and learners in spiritual matters, in pursuit of
            authenticity, wholeness, and faithfulness. God never fails to
            respond to sincere hearts and inquiring minds.
          </p>
          <p>
            In a historical sense, the United Church of Christ traces its roots
            to the pilgrims who came to the shores of the New World in 1620. We
            were known as congregationalists, recognizing the autonomy of the
            independent congregation. In 1852 we became the first church
            established in Syosset, New York.
          </p>
        </section>
        <section>
          <h2>A progressive ministry</h2>
          <p>
            —that takes the Bible seriously, but not literally. We acknowledge
            its historicity as inspired testimony of a people called by God, and
            believe that God has more light yet to be revealed.
          </p>
          <p>
            We look to Jesus of Nazareth, who became the Christ, as our means
            for understanding what it is to be authentically human. We believe
            that the truth which Jesus embodies and leads us to is a truth other
            religions point to as well. We earnestly pursue interfaith dialogue
            to discover our varying origins, celebrate what we share in common,
            and transcend our differences.
          </p>
        </section>
        <section>
          <h2>A passionate community</h2>
          <p>
            —deeply committed to peace, justice, and the alleviation of
            suffering through compassion and wisdom. We welcome people of all
            races, nationalities, abilities, gender identities, and sexual
            orientations into every aspect of church life and ministry.
          </p>
        </section>
        <Link to="#">Visit us</Link>
        <Link to="/about/belief">What we believe</Link>
      </Layout>
    </>
  );
}
