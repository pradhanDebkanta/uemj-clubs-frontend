export const NavItems = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Clubs',
        children: [
            {
                label: 'Coding',
                // subLabel: 'Trending Design to inspire you',
                href: '/codesta',
            },
            {
                label: 'Nature',
                href: '/nature',
            },
            {
                label: 'Gaming',
                href: '/gaming',
            },
            {
                label: 'Music & Cultural',
                href: '/music',
            },
            {
                label: 'Photography',
                href: '/photography',
            },
        ],
        parent: '/clubs',

    },
    {
        label: 'Features',
        children: [
            {
                label: 'Coding',
                href: '/features/codesta',
            },
            {
                label: 'Nature',
                href: '/features/nature',
            },
            {
                label: 'Gaming',
                href: '/features/gaming',
            },
            {
                label: 'Music & Cultural',
                href: '/features/music',
            },
            {
                label: 'Photography',
                href: '/features/photography',
            },
        ],
        parent: '/features',
    },
    {
        label: 'Latest Activity',
        children: [
            {
                label: 'Coding',
                href: '/latest-activity/codesta',
            },
            {
                label: 'Nature',
                href: '/latest-activity/nature',
            },
            {
                label: 'Gaming',
                href: '/latest-activity/gaming',
            },
            {
                label: 'Music & Cultural',
                href: '/latest-activity/music',
            },
            {
                label: 'Photography',
                href: '/latest-activity/photography',
            },
        ],
        parent: '/latest-activity',

    },

]