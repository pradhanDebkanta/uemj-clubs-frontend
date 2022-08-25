import React from 'react';
import dynamic from 'next/dynamic';
import { Container } from '@nextui-org/react';
import Header from './Header';
import Facility from './Facility';
import Objectives from './Objectives';

const Rules = dynamic(() => import('./Rules'), {
    ssr: false
});


const Codesta = () => {
    return (
        <Container>
            <Header />
            <Rules />
            <Facility />
            <Objectives />
        </Container>
    )
}

export default Codesta