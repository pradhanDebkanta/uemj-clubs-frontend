import React, { useCallback, useLayoutEffect, useState } from 'react';
import NextLink from 'next/link';
import { Text, Spacer, Row, Col, Card, useTheme, Grid, Link, Button, Tooltip } from '@nextui-org/react';
import {
    Divider,
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react'
import { BsCheck2All } from 'react-icons/bs';
import home from '../../assets/styles/codesta/home.module.css';


const rulesDetails = [
    {
        detail: 'An application for membership must be on forms provided by the Club for that purpose and submitting from the online platform is therefore in agreement with these rules.',
        Icon: BsCheck2All,

    },
    {
        detail: 'Each Member warrants the accuracy of the information provided.',
        Icon: BsCheck2All
    },
    {
        detail: 'Each Member of Coding Club shall be at least eighteen years of age.',
        Icon: BsCheck2All
    },

    {
        detail: 'On arrival, members must present their membership card if requested to do so. ',
        Icon: BsCheck2All
    },

    {
        detail: 'Membership cards are not transferable. If you misuse your membership card, your membership may be revoked. If you lose it, please ask the membership office for a replacement.',
        Icon: BsCheck2All
    },

    {
        detail: 'A Member who through actions contravening the Codes of Conduct set out in the Club Rules will be liable to have their membership terminated then and there.         ',
        Icon: BsCheck2All
    },
    {
        detail: 'Members shall abide by the Rules and Regulations set out and stated by the Proprietor and Management of the Club. Any member failing to adhere to the Club rules shall have their membership reviewed by the Proprietor and the Committee and may have their membership terminated without delay. All decisions are final.',
        Icon: BsCheck2All
    },
]

const Rules = () => {
    const { isDark } = useTheme();
    const iconColor = isDark ? '#FF2EC4' : '#17C964';
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    const [size, setSize] = useState(window?.innerWidth);
    const [isMore, setMore] = useState(false);

    useLayoutEffect(() => {
        // 768px
        const resizeObserver = () => {
            let size = window?.innerWidth;
            setSize(size);
        }
        window?.addEventListener('resize', resizeObserver, { passive: true });
        return () => window?.removeEventListener('resize', resizeObserver);
    }, []);


    const allRules = useCallback(() => {
        const allItem = (
            rulesDetails?.slice(0, 3)?.map((item, idx) => {
                return (
                    <ListItem key={idx} >
                        <Text size={16} className={home.text} >
                            <ListIcon as={item.Icon} color={iconColor} size={18} />
                            {item.detail}
                        </Text>
                    </ListItem>
                )
            })
        );

        const fewItem = (
            rulesDetails?.map((item, idx) => {
                return (
                    <ListItem key={idx} >
                        <Text size={16} className={home.text} >
                            <ListIcon as={item.Icon} color={iconColor} size={18} />
                            {item.detail}
                        </Text>
                    </ListItem>
                )
            })
        );


        return (
            <>
                {size <= 768 ? isMore ? fewItem : allItem : allItem}
            </>
        );

    }, [iconColor, size, isMore])

    return (
        <div className={home.pContainer}>
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
                Rules &#38; Regulations
            </Text>
            <Spacer y={1} />
            <Card
                // isPressable
                isHoverable
                variant='shadow'
                css={{}}>
                <Card.Body>
                    <Row justify="center" align="center">
                        <Col css={{ padding: 10 }}>
                            <Text size={16} className={home.text}>
                                Membership to the Club is by invitation or enquiry. Prospective Members will be invited to meet with a representative. They will be shown around the house and the rules will be discussed. A decision will be made once the application form has been duly completed and discussed by the Committee. Membership will be issued to the member with a copy of the club rules.
                            </Text>
                            <Spacer y={0.5} />
                            <Divider />
                            <Spacer y={0.5} />
                            <List spacing={3.5}>
                                {allRules()}
                            </List>
                            <Spacer y={0.5} />

                            <Grid.Container>
                                {size <= 768 && (
                                    <Grid css={{ margin: 'auto' }}>
                                        <Tooltip
                                            content={isMore ? "click to view less" : "click to view more"}
                                            contentColor='secondary'
                                        >
                                            <Button color="secondary" auto rounded flat onClick={() => { setMore(more => !more) }}>
                                                {isMore ? "Read less..." : "Read more..."}
                                            </Button>
                                        </Tooltip>
                                    </Grid>
                                )}
                                <Grid css={{ margin: 'auto' }}>
                                    <NextLink href="#" >
                                        <Link block color="secondary" href='./pdf/CodingClubREGULATIONS.pdf'
                                            rel="noopener noreferrer"
                                            target={'_blank'}
                                        >
                                            Read all Rules &#38; Regulations
                                        </Link>
                                    </NextLink>
                                </Grid>

                            </Grid.Container>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Rules;

