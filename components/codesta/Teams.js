import React, { useLayoutEffect, useState } from 'react';
import { Text, Spacer, useTheme, Grid, Card, Avatar, Button, } from '@nextui-org/react';
import Carousel from 'react-elastic-carousel';
import home from '../../assets/styles/codesta/home.module.css';
import MyIcon from '../../utils/icon';
import { AiOutlineProfile } from 'react-icons/ai'
import { IconContext } from 'react-icons';

const { Mail, UserIcon } = MyIcon


const members = [
    {
        name: 'Jyoti Khandelwal',
        email: '',
        designation: 'Faculty Co-ordinator',
        profileImg: '',
    },
    {
        name: 'Subrat Gautam',
        email: '',
        designation: 'Faculty Co-ordinator',
        profileImg: '',
    },
    {
        name: 'Sovan Mondal',
        email: 'sovanmondal182@gmail.com',
        designation: 'President',
        profileImg: 'https://lh3.googleusercontent.com/a-/AFdZucrSU4PwNUTb5zJGmELf0yQNixnYK91-NFSCJ2RdhQ=s64-p-k-rw-no',
    },
    {
        name: 'Debkanta Pradhan',
        email: 'debkantapradhan2000@gmail.com',
        designation: 'Vice President',
        // profileImg: 'https://lh3.googleusercontent.com/a-/AFdZucoyqTU-IVduGftOtpckEtQML6Fp38Vo2o8aOOcPpzI=s360-p-rw-no',
        profileImg: '',
    },
    {
        name: 'Souradeep Ash',
        email: '',
        designation: 'Vice President',
        profileImg: '',
    },
    {
        name: 'Nitin Roy',
        email: '',
        designation: 'Secretary',
        profileImg: '',
    },
    {
        name: 'Subham Gourisaria',
        email: '',
        designation: 'Event Manager',
        profileImg: '',
    },
]

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1198, itemsToShow: 3 },
    { width: 1220, itemsToShow: 3 }
];

const Teams = () => {
    const { isDark } = useTheme();
    const iconColor = isDark ? '#FF2EC4' : '#17C964';
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";
    const border = isDark ? '2px solid #330025' : '1px solid #9750DD';
    const bgCol = isDark ? '#16181A' : '#ECEDEE';
    const textColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    const [size, setSize] = useState(window?.innerWidth);


    useLayoutEffect(() => {
        // 768px
        const resizeObserver = () => {
            let size = window?.innerWidth;
            setSize(size);
        }
        window?.addEventListener('resize', resizeObserver, { passive: true });
        return () => window?.removeEventListener('resize', resizeObserver);
    }, []);

    const onClickmail = (mail) => {
        console.log('mail');

        if (mail != '') {
            window?.open(`mailto:${mail}`, '_blank')
        }
    }

    const nameAv = (name) => {
        let nameArr = name?.split(' ');
        let av = nameArr[0].slice(0, 1) + nameArr[1].slice(0, 1);
        av = av.toUpperCase();
        return av;
    }

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
                Teams
            </Text>
            <Spacer y={2} />
            <Grid.Container gap={1} alignItems='center'>
                <Carousel
                    // enableAutoPlay={true}
                    breakPoints={breakPoints}
                    showArrows={size <= 768 ? false : true}
                    itemPadding={[8, 8, 8, 8]}
                    easing='ease-in'
                // onChange={(data)=>{console.log(data,'cc')}}
                >
                    {
                        members?.map((item, idx) => {
                            return (
                                <div key={idx} className={home.carouselBox}>
                                    <div className={home.cardBox} style={{ border: border, backgroundColor: bgCol }}>
                                        <div className={home.avatorBox}>
                                            <Grid.Container>
                                                <Grid justify='center' css={{ m: 'auto' }}>
                                                    <Avatar
                                                        src={item?.profileImg != '' && item.profileImg}
                                                        text={item.profileImg == '' && nameAv(item.name)}
                                                        css={{ size: size <= 525 ? "$15" : "$20" }}
                                                        className={home.avator}
                                                        borderWeight='light'
                                                        color='secondary'
                                                        bordered
                                                        rounded
                                                        pointer
                                                        zoomed
                                                    />
                                                </Grid>
                                            </Grid.Container>
                                        </div>
                                        <div className={home.cardBody}>
                                            <Grid.Container gap={1} >
                                                <Grid xs={12} justify="center">
                                                    <UserIcon fill={'#A66CFF'} size={16} style={{ marginRight: 4, marginTop: 4 }} />
                                                    <Text
                                                        h6
                                                        css={{
                                                            textGradient: textColor
                                                        }}
                                                        b
                                                        size={18}
                                                    >
                                                        Name:
                                                    </Text>
                                                    <Spacer x={1} />
                                                    <Text i>{item.name}</Text>
                                                </Grid>
                                                <Grid xs={12} justify="center">
                                                    <IconContext.Provider value={{ color: '#A66CFF', style: { marginRight: 4, marginTop: 4 } }} size={16}>
                                                        <AiOutlineProfile />
                                                    </IconContext.Provider>
                                                    <Text
                                                        h6
                                                        css={{
                                                            textGradient: textColor
                                                        }}
                                                        b
                                                        size={18}
                                                    >
                                                        Designation:
                                                    </Text>

                                                    <Spacer x={1} />
                                                    <Text
                                                        i
                                                        color="secondary"

                                                    >{item.designation}</Text>
                                                </Grid>
                                                {item.email && (
                                                    <Grid xs={12} justify="center">
                                                        <Mail fill={'#A66CFF'} size={16} style={{ marginRight: 4, marginTop: 4 }} />
                                                        <Text
                                                            h6
                                                            css={{
                                                                textGradient: textColor
                                                            }}
                                                            b
                                                            size={18}
                                                        >
                                                            Email:
                                                        </Text>

                                                        <Spacer x={1} />
                                                        <Text i>{item.email}</Text>
                                                    </Grid>
                                                )}
                                                <Spacer y={0.5} />
                                                <Grid xs={12} justify='center' className={home.cardButton}>
                                                    <Button
                                                        color='secondary'
                                                        flat auto
                                                        icon={<Mail fill='#fff' />}
                                                        onClick={() => onClickmail(item.email)}
                                                    >
                                                        Contact
                                                    </Button>
                                                </Grid>
                                            </Grid.Container>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </Carousel>


            </Grid.Container>
        </div>)
}

export default Teams;

