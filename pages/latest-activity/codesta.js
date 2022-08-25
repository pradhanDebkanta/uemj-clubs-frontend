import React from 'react';
import Head from 'next/head'
import CodestaLatestActivity from '../../components/latest-activity/codesta';

const Codesta = () => {
    return (
        <div>
            <Head>
                <title>UEM CODESTA&lsquo;S LATEST ACTIVITY</title>
                <meta name="description" content="UEMJ create Coding Club, Nature Club" />
                <link rel="icon" href="/images/codestaBlack.png" />
            </Head>
            <div>
                <CodestaLatestActivity />
            </div>
        </div>
    )
}

export default Codesta