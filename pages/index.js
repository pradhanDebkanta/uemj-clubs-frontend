import Head from 'next/head'
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { CodestaSvg } from '../utils/svg/Codesta';






export default function Home() {

  return (
    <div className="">
      <Head>
        <title>UEMJ CLUBS</title>
        <meta name="description" content="UEMJ create Coding Club, Nature Club" />
        <link rel="icon" href="/images/uemLogo.svg" />
      </Head>
      <header>
        Home page
      </header>

      <main>
        <div>
          {/* <CodestaSvg /> */}
        </div>

      </main>
    </div>
  )
}
