import React from 'react';
import Head from 'next/head';
import Codesta from '../../components/codesta';


const index = () => {
  return (
    <div>
      <Head>
        <title>UEM CODESTA</title>
        <meta name="description" content="UEMJ create Coding Club, Nature Club" />
        <link rel="icon" href="/images/codestaBlack.png" />
      </Head>
      <div>
        <Codesta />
      </div>
    </div>
  )
}

export default index