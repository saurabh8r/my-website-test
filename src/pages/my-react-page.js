import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';

function Helloc() {
  return (
    <Layout title="Hellori">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/hell1o.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default Helloc;
