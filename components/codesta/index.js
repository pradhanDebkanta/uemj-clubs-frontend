import React from 'react';
import { Container } from '@nextui-org/react';
import Header from './Header';
import Rules from './Rules';
import Facility from './Facility';
import Objectives from './Objectives';


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