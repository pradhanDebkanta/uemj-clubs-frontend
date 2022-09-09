import { icons } from '../../utils/icon/newIcon';
import { BsBroadcast, BsCalendar4Event } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { GoInbox } from 'react-icons/go';
import { MdOutlineCampaign } from 'react-icons/md';
import { RiDashboardLine, RiTeamLine } from 'react-icons/ri';
import { TiGroup } from 'react-icons/ti';
import { HiOutlineUserGroup } from 'react-icons/hi';


const NavItems = [
    {
        name: "Dashboard",
        url: "/super-admin/dashboard",
        key: 'dashboard',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <RiDashboardLine />
                </span>
            </IconContext.Provider>
        )
    },
    {
        name: "Members",
        key: 'members',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <RiTeamLine />
                </span>
            </IconContext.Provider>
        ),
        child: [
            {
                name: 'Co-ordinators',
                url: "/super-admin/members/co-ordinators",
                key: 'co_ordinator',
                description: "All student & faculty co-ordinators.",
                icon: (
                    <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                        <span>
                            <TiGroup />
                        </span>
                    </IconContext.Provider>
                )
            },
            {
                name: 'Club Members',
                url: "/super-admin/members/club-members",
                key: 'club_members',
                description: "All students register for any club.",
                icon: (
                    <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                        <span>
                            <HiOutlineUserGroup />
                        </span>
                    </IconContext.Provider>
                )
            },
        ]
    },
    {
        name: "Campaign",
        key: 'campaign',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <MdOutlineCampaign />
                </span>
            </IconContext.Provider>
        ),
        child: [
            {
                name: 'Unicast',
                url: "/super-admin/campaign/unicast",
                key: 'unicast',
                description: "Send a massage to perticular member, or communicate one to one.",
                icon: icons.activity
            },
            {
                name: 'BroadCast',
                url: "/super-admin/campaign/broadcast",
                key: 'broadcast',
                description: "Send a massage to every member, or broadcast a massage with all.",
                icon: (
                    <IconContext.Provider value={{ size: 24 }}>
                        <BsBroadcast />
                    </IconContext.Provider>
                )
            }
        ],
    },
    {
        name: "More",
        key: 'more',
        icon: (
            <IconContext.Provider value={{ size: 18, style: { marginRight: 8 } }}>
                <span>
                    <GoInbox />
                </span>
            </IconContext.Provider>
        ),
        child: [
            {
                name: "Events",
                url: "/super-admin/events",
                key: 'events',
                icon: (
                    <IconContext.Provider value={{ size: 24 }}>
                        <BsCalendar4Event />
                    </IconContext.Provider>
                ),
                description: 'Access all events of every clubs.'
            }
        ]
    },
];

export default NavItems;