import React from 'react';
import dynamic from 'next/dynamic';
import { Container, Spacer } from '@nextui-org/react';
import Header from './Header';
import Facility from './Facility';
import Objectives from './Objectives';
import Footer from '../footer';

const Rules = dynamic(() => import('./Rules'), {
    ssr: false
});
const Teams = dynamic(() => import('./Teams'), {
    ssr: false
});


const Codesta = () => {
    return (
        <Container>
            <Header />
            <Rules />
            <Facility />
            <Objectives />
            <Teams />
            <Footer />
            <Spacer y={0.5} />
        </Container>
    )
}

export default Codesta