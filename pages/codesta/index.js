import React from 'react';
import Head from 'next/head';
import Codesta from '../../components/codesta';
import { Spacer } from '@nextui-org/react';


const index = () => {
  return (
    <div>
      <Head>
        <title>UEM CODESTA</title>
        <meta name="description" content="UEMJ create Coding Club, Nature Club" />
        <link rel="icon" href="/images/codestaBlack.png" />
      </Head>
      <div>
        <Spacer y={3} />
        <Codesta />
      </div>
    </div>
  )
}

export default index