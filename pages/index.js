import Head from 'next/head'
import React, { useState } from 'react';


export default function Home() {
 

  const [open, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log(open, "isopen");

    setIsOpen(!open);
  };

  // console.log(colorMode, "coll", toggleColorMode);
  return (
    <div className="">
      <Head>
        <title>UEMJ CLUBS</title>
        <meta name="description" content="UEMJ create Coding Club, Nature Club" />
        <link rel="icon" href="/images/uemLogo.svg" />
      </Head>
      <header>
        Home page

        <div>
          The current theme is: 
          
        </div>

      </header>

      <main>
        <div>
          {/* <UserProfile /> */}
        </div>
        <div>
         
        </div>
      </main>
    </div>
  )
}
