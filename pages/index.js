import React from 'react';
import Link from 'next/link';

const Home = props => (
  <div>
    <p>Hey!</p>
    <Link href="/sell">
      <a>Sell Sell!</a>
    </Link>
  </div>
);

export default Home;