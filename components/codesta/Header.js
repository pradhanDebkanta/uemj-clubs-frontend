import React from 'react';
import dynamic from 'next/dynamic';
import { Grid, Text, Spacer, useTheme } from '@nextui-org/react';
import home from '../../assets/styles/codesta/home.module.css';


const Coding = dynamic(() => import('../../utils/svg/Coding'), {
    ssr: false
});

const AutoTyping = dynamic(() => import('react-auto-typing').then(res => res), {
    ssr: false
})
const BlinkCursor = dynamic(() => import('react-auto-typing').then(res => res.BlinkCursor), {
    ssr: false
})

const Header = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    return (
        <div className={home.container}>
            <Grid.Container gap={1} alignItems='center'>
                <Grid sm={6} >
                    <div className={home.textContainer}>
                        <Text
                            h1
                            size={45}
                            css={{
                                textGradient: headerColor,
                                textAlign: 'center'
                            }}
                            weight="bold"
                            className={home.responsiveText}
                        >
                            <AutoTyping
                                active
                                textRef='Create Build Innovate'
                                writespeed={500}
                                deletespeed={500}
                                delayToWrite={1000}
                                delayToDelete={2000}
                            />
                            <BlinkCursor
                                active
                                blinkspeed={500}
                            />
                        </Text>
                        <Spacer y={1} />
                        <Text size={17} className={home.text}>
                            In today&#39;s challenging environment,
                            programming skills are essential tools that can be utilized
                            into various fields and domains. Hence, it becomes absolutely
                            essential to equip young minds with such skills.
                            Coding Club aims to establish a coding culture on campus,
                            reaching every student passionate about coding.
                            The club is composed of a group of students from the departments of CSE, ECE
                            who want to interact with like-minded persons and explore the world of computer science.
                            They are driven by their passion for coding and hunger to learn,
                            which has helped the club scale new heights.
                        </Text>

                    </div>
                </Grid>
                <Grid sm={6}>
                    <div className={home.svg}>
                        <Coding />
                    </div>
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default Header