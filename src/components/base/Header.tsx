import {Fragment, useEffect, useState} from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Logo from '../../assets/logo/clickup logo.svg'

const products = [
    { name: 'Tasks', description: 'Break down any size project into customized tasks', href: '#', icon: ChartPieIcon },
    { name: 'Docs', description: 'Create beautiful docs and connect them to tasks', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Goals', description: 'Track work against strategy with measurable targets', href: '#', icon: FingerPrintIcon },
    { name: 'Whiteboards', description: 'Bring team ideas to life with visual collaboration', href: '#', icon: SquaresPlusIcon },
    { name: 'Dashboards', description: 'Visualize progress with real-time reporting', href: '#', icon: ArrowPathIcon },
    { name: 'Chat', description: 'Collaborate with your team in real-time', href: '#', icon: ArrowPathIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [top, setTop] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);


    return (
        <header className={`bg-white sticky top-0 z-[90] w-full headerr ${!top && `bg-white shadow-lg`}`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 hidden">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Clickup</span>
                        <img className="h-8 w-auto" src={Logo} alt="Logo" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-8 items-center">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Clickup</span>
                            <img className="h-8 w-auto" src={Logo} alt="Logo" />
                        </a>
                    </div>
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Product
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className=" absolute flex-col w-screen max-container bg-white top-full -left-[270px] z-10 mt-8 inset-x-0  overflow-hidden gap-[10px] flex shadow-lg ring-1 ring-gray-900/5">
                                <div className="flex">
                                    <div className="block visible w-[740px] pointer-events-auto leading-[24px]">
                                        <p className="block text-[#292d34] text-[14px] font-[700] h-[21px] mt-[38px] pointer-events-auto text-left mb-[25px] ml-[16px]">PRODUCT</p>

                                        <ul className='box-border text-[#292d34] flex flex-wrap font-axiforma gap-[20px] text-left visible'>
                                            <li className="box-border text-[#292d34] basis-[100%] grow-1 font-axiforma ">
                                                <div style={{
                                                    border: '1px solid rgb(242, 72, 255)',
                                                    backgroundPositionX: '50%',
                                                    backgroundPositionY: '50%',
                                                    backgroundSize: '150% 100%',
                                                    borderRadius: '10px',
                                                    boxSizing: 'border-box',
                                                    display: 'block',
                                                    fontFamily: 'axiforma',
                                                    lineHeight: '24px',
                                                    padding: '1px',
                                                    pointerEvents: 'auto',
                                                    transitionProperty: 'background-position',
                                                    willChange: 'background-position',
                                                }}>
                                                    <a className="" rel="" target="" href="https://clickup.com/features/ai" style={{
                                                        alignItems: 'center',
                                                        backgroundColor: "white",
                                                        borderRadius: '10px',
                                                        display: 'flex',
                                                        fontFamily: 'axiforma',
                                                        padding: '20px',
                                                        textAlign: 'left',
                                                        position: 'relative',
                                                        textUnderlineOffset: '2px',
                                                        visibility: 'visible',
                                                        width: '730px',
                                                        textDecorationColor: 'rgb(123, 104, 238)',
                                                        justifyContent: 'space-between',
                                                        listStylePosition: 'outside',
                                                        listStyleType: 'none',
                                                        textDecorationStyle: 'solid',
                                                        zIndex: '10'
                                                    }}
                                                    >
                                                        <svg width="115" height="26" viewBox="0 0 115 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M9.31611 4.65343C4.318 6.81097 1.37045 11.843 3.43581 16.6175C5.50117 21.392 11.3838 23.1445 16.3819 20.9869C21.38 18.8294 25.0878 14.6509 22.0685 8.57433C20.0031 3.79981 14.3142 2.49589 9.31611 4.65343ZM14.8456 17.4355C12.5261 18.4368 8.09767 18.371 6.90644 15.6172C5.71521 12.8634 8.33907 8.75768 10.6586 7.75638C12.9782 6.75509 15.4328 8.52254 16.6241 11.2763C17.8153 14.0301 17.1652 16.4342 14.8456 17.4355Z" fill="#78ffff"></path></g><g opacity="0.8"><path d="M3.97587 16.0622C5.73784 21.3773 11.291 24.6439 16.6126 22.8941C21.9343 21.1443 24.4429 15.2268 22.6809 9.91165C20.9189 4.59655 15.3657 1.3299 10.0441 3.07974C4.7225 4.82958 2.21389 10.7471 3.97587 16.0622ZM18.7225 11.2132C19.5402 13.6799 17.4132 19.7871 14.3439 20.7964C11.2746 21.8056 7.0108 18.9896 7.0038 15.3606C6.99681 11.7316 9.04757 10.4097 11.9485 9.44384C14.8493 8.47801 17.9048 8.74656 18.7225 11.2132Z" fill="#FF02F0"></path></g><g opacity="0.5"><path d="M21.1287 17.0835C23.656 12.7061 22.527 7.00103 18.1539 4.46206C13.7808 1.92308 8.2848 3.78186 5.75751 8.15926C3.23021 12.5367 4.35917 18.2418 8.7323 20.7807C13.1054 23.3197 18.6014 21.4609 21.1287 17.0835ZM9.01041 10.0478C10.1833 8.01634 15.5782 5.78637 18.1005 7.25076C20.6227 8.71515 21.282 13.2803 18.8387 15.4624C16.3955 17.6446 14.2735 17.0548 11.8816 15.6779C9.4897 14.3011 7.83752 12.0794 9.01041 10.0478Z" fill="#FF02F0"></path></g><path d="M44.1181 6.11035H40.7573V19.5535H44.1181V6.11035Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.3619 19.859C32.4457 19.859 30.8489 19.2284 29.5536 17.967C28.2584 16.6876 27.6196 15.0479 27.6196 13.0477C27.6196 11.0296 28.2761 9.37182 29.5714 8.07446C30.8843 6.75903 32.4812 6.11035 34.3797 6.11035C36.7217 6.11035 38.7977 7.13743 40.0041 8.74116L37.8927 10.9936C36.8813 9.89439 35.7814 9.3358 34.5926 9.3358C33.5812 9.3358 32.7473 9.67815 32.0554 10.3809C31.3811 11.0837 31.044 11.9666 31.044 13.0297C31.044 14.0568 31.3811 14.9218 32.0554 15.6245C32.7473 16.3092 33.5812 16.6516 34.5749 16.6516C35.8701 16.6516 37.0056 16.075 37.9459 14.9398L40.1462 17.0841C39.543 17.8949 38.7266 18.5616 37.7152 19.0842C36.7041 19.6068 35.5862 19.859 34.3619 19.859Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M49.0064 7.23954C49.0064 8.20057 48.1859 8.97961 47.1734 8.97961C46.1609 8.97961 45.3401 8.20057 45.3401 7.23954C45.3401 6.27855 46.1609 5.49951 47.1734 5.49951C48.1859 5.49951 49.0064 6.27855 49.0064 7.23954ZM48.8654 9.78268H45.4811V19.5537H48.8654V9.78268Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M55.0477 19.8588C53.5262 19.8588 52.3018 19.3736 51.34 18.4031C50.3955 17.4326 49.9231 16.1925 49.9231 14.6649C49.9231 13.1373 50.3955 11.8972 51.3573 10.9267C52.3194 9.9562 53.5611 9.47095 55.1002 9.47095C57.1117 9.47095 58.8779 10.4774 59.6999 12.3645L57.2339 13.6944C56.7442 12.8497 56.0623 12.4184 55.1702 12.4184C54.5232 12.4184 53.9983 12.634 53.5786 13.0653C53.1763 13.4967 52.9665 14.0358 52.9665 14.6649C52.9665 15.9768 53.8934 16.9473 55.1354 16.9473C56.0271 16.9473 56.8491 16.4441 57.199 15.6713L59.6651 17.181C58.8255 18.8344 57.0941 19.8588 55.0477 19.8588Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M63.7725 6.11035H60.6165V19.5535H63.7725V16.1312L64.1422 15.7787L67.0273 19.5535H70.6988L66.2662 13.754L70.477 9.73997H66.6204L63.7725 12.455V6.11035Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M71.3098 14.5363V6.11035H74.7048V14.3476C74.7048 15.8202 75.5651 16.5299 76.8094 16.5299C78.0356 16.5299 78.9141 15.7847 78.9141 14.3476V6.11035H82.3087V14.5363C82.3087 18.4041 79.5862 19.859 76.8094 19.859C74.0505 19.859 71.3098 18.4041 71.3098 14.5363Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M89.4865 20.047C92.1029 20.047 94.2242 17.7479 94.2242 14.9118C94.2242 12.0757 92.1029 9.77661 89.4865 9.77661C88.42 9.77661 87.436 10.1586 86.644 10.8032V9.91176H83.5308V23.8308H86.644V19.0204C87.436 19.665 88.42 20.047 89.4865 20.047ZM86.644 14.9171V14.9065C86.6468 13.6401 87.6455 12.6145 88.8773 12.6145C90.111 12.6145 91.111 13.643 91.111 14.9118C91.111 16.1805 90.111 17.2091 88.8773 17.2091C87.6455 17.2091 86.6468 16.1834 86.644 14.9171Z" fill="#292D34"></path><path d="M106.503 20.1645H110.169L105.147 6.11035H101.824L96.6685 20.1645H100.354L101.194 17.5971H105.682L106.503 20.1645ZM104.822 14.5162H102.092L103.486 10.3513L104.822 14.5162Z" fill="#292D34"></path><path d="M111.41 6.11035V20.1645H115V6.11035H111.41Z" fill="#292D34"></path><defs><linearGradient id="paint0_linear_6094_84004" x1="-17.6018" y1="10.6195" x2="9.33118" y2="25.5626" gradientUnits="userSpaceOnUse"><stop stop-color="#6F00FF"></stop><stop offset="1" stop-color="#49CCF9"></stop></linearGradient><linearGradient id="paint1_linear_6094_84004" x1="25.99" y1="4.59746" x2="2.73128" y2="12.3078" gradientUnits="userSpaceOnUse"><stop stop-color="#FF02F0"></stop><stop offset="1" stop-color="#E922C5"></stop></linearGradient><linearGradient id="paint2_linear_6094_84004" x1="0.188137" y1="9.1162" x2="19.3435" y2="20.1756" gradientUnits="userSpaceOnUse"><stop stop-color="#FF02F0"></stop><stop offset="1" stop-color="#EDE4C3"></stop></linearGradient></defs>
                                                        </svg>
                                                        <span className="flex gap-[10px] items-center leading-[24px] pointer-events-auto box-border">
                                                        <span className='box-border text-[#292d34] text-[14px] font-axiforma font-normal tracking-wider'>The only AI solution that's custom-built for you</span>
                                                        <svg className="CuNavigation_dropdownItemTextV3Arrow__MzrOI" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.999907 3.9979H12.5892L10.3005 1.70918C9.90997 1.31866 9.90997 0.685492 10.3005 0.294968C10.691 -0.0955561 11.3242 -0.0955554 11.7147 0.294969L15.7071 4.28737C15.9028 4.48307 16.0004 4.73971 16 4.99621C16.0004 5.25269 15.9028 5.50931 15.7071 5.705L11.7071 9.70497C11.3166 10.0955 10.6834 10.0955 10.2929 9.70497C9.9024 9.31445 9.9024 8.68128 10.2929 8.29076L12.5858 5.9979H0.999907C0.447621 5.9979 -9.34601e-05 5.55018 -9.34601e-05 4.9979C-9.34601e-05 4.44561 0.447621 3.9979 0.999907 3.9979Z" fill="#F248FF"></path></svg>
                                                    </span>
                                                    </a>
                                                </div>
                                            </li>
                                            {products.map((item) => (
                                                <li
                                                    key={item.name}
                                                    className="box list-item text-[#292d34] basis-[200px] font-axiforma leading-[24px] w-[230px] text-left visible"
                                                >
                                                    <div className="box-border flex gap-[10px] text-[#292d34] leading-[24px] p-[16px] text-left decoration-solid visible w-[inherit] ">
                                                        <div className="box-border w-[26px] h-[26px] block font-axiforma leading-[24px] list-outside pointer-events-auto">
                                                            <item.icon className="h-[26px] w-[26px] text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                        </div>
                                                        <div className="box-border text-[#292d34] cursor-pointer block font-axiforma min-h-[70px] min-w-[152px]">
                                                            <p className="block cursor-pointer text-[#292d34] font-axiforma text-[14px] font-[700] list-outside text-left w-[inherit] ">
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </p>
                                                            <p className="block cursor-pointer text-[#292d34] font-axiforma text-[11px] font-normal list-outside text-left w-[inherit]">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}

                                            <li className="box-border text-[#292d34] h-[60px] pointer-events-auto w-full py-[12px] px-[18px] relative text-center list-item my-5">
                                                <a className="header-product-btn font-axiforma" href="/features">
                                                    See All Features
                                                    <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden="true" focusable="false"><use href="/assets/CuNavigationSprite.svg#nav-icon-arrow"></use></svg>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="block box-border h-[500px] w-[500px] font-axiforma text-left border-l border-[#e9e8f0]">
                                        <p className="block text-[#292d34] text-[14px] font-[700] h-[21px] mt-[38px] pointer-events-auto text-left mb-[25px] ml-[16px]">
                                            PLATFORM
                                        </p>

                                        <ul className='box-border text-[#292d34] flex flex-wrap font-axiforma gap-[20px] text-left visible'>
                                            {products.map((item) => (
                                                <li
                                                    key={item.name}
                                                    className="box list-item text-[#292d34] basis-[200px] font-axiforma leading-[24px] w-[230px] text-left visible"
                                                >
                                                    <div className="box-border flex gap-[10px] text-[#292d34] leading-[24px] p-[16px] text-left decoration-solid visible w-[inherit] ">
                                                        <div className="box-border w-[26px] h-[26px] block font-axiforma leading-[24px] list-outside pointer-events-auto">
                                                            <item.icon className="h-[26px] w-[26px] text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                        </div>
                                                        <div className="box-border text-[#292d34] cursor-pointer block font-axiforma min-h-[70px] min-w-[152px]">
                                                            <p className="block cursor-pointer text-[#292d34] font-axiforma text-[14px] font-[700] list-outside text-left w-[inherit] ">
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </p>
                                                            <p className="block cursor-pointer text-[#292d34] font-axiforma text-[11px] font-normal list-outside text-left w-[inherit]">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className='border-t border-[#e9e8f0] flex items-center relative gap-[20px] pointer-events-auto h-[110px] p-[16px] '>

                                    <div className="box-border bloxk basis-[100%] visible ease-in-out opacity-100">
                                        <a className="flex gap-[10px] items-center" rel="" target="" data-segment-button-clicked="Contact Us" href="/contact/contact-sales">
                                            <div className="h-[40px] w-[40px] flex justify-center items-center rounded-[10px] text-white bg-[#7B68EE]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                                </svg>

                                            </div>
                                            <div>
                                                <p className="text-[14px] font-bold text-[#24223e]">Contact Us</p>
                                                <p className="-mt-5 text-[12px] font-normal text-[#24223e]">Get in touch with our 24/7 live sales team for free.</p>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Solutions
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className=" absolute flex-col w-screen max-container bg-white top-full -left-[350px] z-10 mt-8 inset-x-0  overflow-hidden gap-[10px] flex shadow-lg ring-1 ring-gray-900/5">
                                <div className="flex">
                                    <div className="block visible w-[740px] pointer-events-auto leading-[24px]">
                                        <p className="block text-[#292d34] text-[14px] font-[700] h-[21px] mt-[38px] pointer-events-auto text-left mb-[25px] ml-[16px]">PRODUCT</p>

                                        <ul className='box-border text-[#292d34] flex flex-wrap font-axiforma gap-[20px] text-left visible'>
                                            <li className="box-border text-[#292d34] basis-[100%] grow-1 font-axiforma ">
                                                <div style={{
                                                    border: '1px solid rgb(242, 72, 255)',
                                                    backgroundPositionX: '50%',
                                                    backgroundPositionY: '50%',
                                                    backgroundSize: '150% 100%',
                                                    borderRadius: '10px',
                                                    boxSizing: 'border-box',
                                                    display: 'block',
                                                    fontFamily: 'axiforma',
                                                    lineHeight: '24px',
                                                    padding: '1px',
                                                    pointerEvents: 'auto',
                                                    transitionProperty: 'background-position',
                                                    willChange: 'background-position',
                                                }}>
                                                    <a className="" rel="" target="" href="https://clickup.com/features/ai" style={{
                                                        alignItems: 'center',
                                                        backgroundColor: "white",
                                                        borderRadius: '10px',
                                                        display: 'flex',
                                                        fontFamily: 'axiforma',
                                                        padding: '20px',
                                                        textAlign: 'left',
                                                        position: 'relative',
                                                        textUnderlineOffset: '2px',
                                                        visibility: 'visible',
                                                        width: '730px',
                                                        textDecorationColor: 'rgb(123, 104, 238)',
                                                        justifyContent: 'space-between',
                                                        listStylePosition: 'outside',
                                                        listStyleType: 'none',
                                                        textDecorationStyle: 'solid',
                                                        zIndex: '10'
                                                    }}
                                                    >
                                                        <svg width="115" height="26" viewBox="0 0 115 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M9.31611 4.65343C4.318 6.81097 1.37045 11.843 3.43581 16.6175C5.50117 21.392 11.3838 23.1445 16.3819 20.9869C21.38 18.8294 25.0878 14.6509 22.0685 8.57433C20.0031 3.79981 14.3142 2.49589 9.31611 4.65343ZM14.8456 17.4355C12.5261 18.4368 8.09767 18.371 6.90644 15.6172C5.71521 12.8634 8.33907 8.75768 10.6586 7.75638C12.9782 6.75509 15.4328 8.52254 16.6241 11.2763C17.8153 14.0301 17.1652 16.4342 14.8456 17.4355Z" fill="#78ffff"></path></g><g opacity="0.8"><path d="M3.97587 16.0622C5.73784 21.3773 11.291 24.6439 16.6126 22.8941C21.9343 21.1443 24.4429 15.2268 22.6809 9.91165C20.9189 4.59655 15.3657 1.3299 10.0441 3.07974C4.7225 4.82958 2.21389 10.7471 3.97587 16.0622ZM18.7225 11.2132C19.5402 13.6799 17.4132 19.7871 14.3439 20.7964C11.2746 21.8056 7.0108 18.9896 7.0038 15.3606C6.99681 11.7316 9.04757 10.4097 11.9485 9.44384C14.8493 8.47801 17.9048 8.74656 18.7225 11.2132Z" fill="#FF02F0"></path></g><g opacity="0.5"><path d="M21.1287 17.0835C23.656 12.7061 22.527 7.00103 18.1539 4.46206C13.7808 1.92308 8.2848 3.78186 5.75751 8.15926C3.23021 12.5367 4.35917 18.2418 8.7323 20.7807C13.1054 23.3197 18.6014 21.4609 21.1287 17.0835ZM9.01041 10.0478C10.1833 8.01634 15.5782 5.78637 18.1005 7.25076C20.6227 8.71515 21.282 13.2803 18.8387 15.4624C16.3955 17.6446 14.2735 17.0548 11.8816 15.6779C9.4897 14.3011 7.83752 12.0794 9.01041 10.0478Z" fill="#FF02F0"></path></g><path d="M44.1181 6.11035H40.7573V19.5535H44.1181V6.11035Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.3619 19.859C32.4457 19.859 30.8489 19.2284 29.5536 17.967C28.2584 16.6876 27.6196 15.0479 27.6196 13.0477C27.6196 11.0296 28.2761 9.37182 29.5714 8.07446C30.8843 6.75903 32.4812 6.11035 34.3797 6.11035C36.7217 6.11035 38.7977 7.13743 40.0041 8.74116L37.8927 10.9936C36.8813 9.89439 35.7814 9.3358 34.5926 9.3358C33.5812 9.3358 32.7473 9.67815 32.0554 10.3809C31.3811 11.0837 31.044 11.9666 31.044 13.0297C31.044 14.0568 31.3811 14.9218 32.0554 15.6245C32.7473 16.3092 33.5812 16.6516 34.5749 16.6516C35.8701 16.6516 37.0056 16.075 37.9459 14.9398L40.1462 17.0841C39.543 17.8949 38.7266 18.5616 37.7152 19.0842C36.7041 19.6068 35.5862 19.859 34.3619 19.859Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M49.0064 7.23954C49.0064 8.20057 48.1859 8.97961 47.1734 8.97961C46.1609 8.97961 45.3401 8.20057 45.3401 7.23954C45.3401 6.27855 46.1609 5.49951 47.1734 5.49951C48.1859 5.49951 49.0064 6.27855 49.0064 7.23954ZM48.8654 9.78268H45.4811V19.5537H48.8654V9.78268Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M55.0477 19.8588C53.5262 19.8588 52.3018 19.3736 51.34 18.4031C50.3955 17.4326 49.9231 16.1925 49.9231 14.6649C49.9231 13.1373 50.3955 11.8972 51.3573 10.9267C52.3194 9.9562 53.5611 9.47095 55.1002 9.47095C57.1117 9.47095 58.8779 10.4774 59.6999 12.3645L57.2339 13.6944C56.7442 12.8497 56.0623 12.4184 55.1702 12.4184C54.5232 12.4184 53.9983 12.634 53.5786 13.0653C53.1763 13.4967 52.9665 14.0358 52.9665 14.6649C52.9665 15.9768 53.8934 16.9473 55.1354 16.9473C56.0271 16.9473 56.8491 16.4441 57.199 15.6713L59.6651 17.181C58.8255 18.8344 57.0941 19.8588 55.0477 19.8588Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M63.7725 6.11035H60.6165V19.5535H63.7725V16.1312L64.1422 15.7787L67.0273 19.5535H70.6988L66.2662 13.754L70.477 9.73997H66.6204L63.7725 12.455V6.11035Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M71.3098 14.5363V6.11035H74.7048V14.3476C74.7048 15.8202 75.5651 16.5299 76.8094 16.5299C78.0356 16.5299 78.9141 15.7847 78.9141 14.3476V6.11035H82.3087V14.5363C82.3087 18.4041 79.5862 19.859 76.8094 19.859C74.0505 19.859 71.3098 18.4041 71.3098 14.5363Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M89.4865 20.047C92.1029 20.047 94.2242 17.7479 94.2242 14.9118C94.2242 12.0757 92.1029 9.77661 89.4865 9.77661C88.42 9.77661 87.436 10.1586 86.644 10.8032V9.91176H83.5308V23.8308H86.644V19.0204C87.436 19.665 88.42 20.047 89.4865 20.047ZM86.644 14.9171V14.9065C86.6468 13.6401 87.6455 12.6145 88.8773 12.6145C90.111 12.6145 91.111 13.643 91.111 14.9118C91.111 16.1805 90.111 17.2091 88.8773 17.2091C87.6455 17.2091 86.6468 16.1834 86.644 14.9171Z" fill="#292D34"></path><path d="M106.503 20.1645H110.169L105.147 6.11035H101.824L96.6685 20.1645H100.354L101.194 17.5971H105.682L106.503 20.1645ZM104.822 14.5162H102.092L103.486 10.3513L104.822 14.5162Z" fill="#292D34"></path><path d="M111.41 6.11035V20.1645H115V6.11035H111.41Z" fill="#292D34"></path><defs><linearGradient id="paint0_linear_6094_84004" x1="-17.6018" y1="10.6195" x2="9.33118" y2="25.5626" gradientUnits="userSpaceOnUse"><stop stop-color="#6F00FF"></stop><stop offset="1" stop-color="#49CCF9"></stop></linearGradient><linearGradient id="paint1_linear_6094_84004" x1="25.99" y1="4.59746" x2="2.73128" y2="12.3078" gradientUnits="userSpaceOnUse"><stop stop-color="#FF02F0"></stop><stop offset="1" stop-color="#E922C5"></stop></linearGradient><linearGradient id="paint2_linear_6094_84004" x1="0.188137" y1="9.1162" x2="19.3435" y2="20.1756" gradientUnits="userSpaceOnUse"><stop stop-color="#FF02F0"></stop><stop offset="1" stop-color="#EDE4C3"></stop></linearGradient></defs>
                                                        </svg>
                                                        <span className="flex gap-[10px] items-center leading-[24px] pointer-events-auto box-border">
                                                        <span className='box-border text-[#292d34] text-[14px] font-axiforma font-normal tracking-wider'>The only AI solution that's custom-built for you</span>
                                                        <svg className="CuNavigation_dropdownItemTextV3Arrow__MzrOI" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.999907 3.9979H12.5892L10.3005 1.70918C9.90997 1.31866 9.90997 0.685492 10.3005 0.294968C10.691 -0.0955561 11.3242 -0.0955554 11.7147 0.294969L15.7071 4.28737C15.9028 4.48307 16.0004 4.73971 16 4.99621C16.0004 5.25269 15.9028 5.50931 15.7071 5.705L11.7071 9.70497C11.3166 10.0955 10.6834 10.0955 10.2929 9.70497C9.9024 9.31445 9.9024 8.68128 10.2929 8.29076L12.5858 5.9979H0.999907C0.447621 5.9979 -9.34601e-05 5.55018 -9.34601e-05 4.9979C-9.34601e-05 4.44561 0.447621 3.9979 0.999907 3.9979Z" fill="#F248FF"></path></svg>
                                                    </span>
                                                    </a>
                                                </div>
                                            </li>
                                            {products.map((item) => (
                                                <li
                                                    key={item.name}
                                                    className="box list-item text-[#292d34] basis-[200px] font-axiforma leading-[24px] w-[230px] text-left visible"
                                                >
                                                    <div className="box-border flex gap-[10px] text-[#292d34] leading-[24px] p-[16px] text-left decoration-solid visible w-[inherit] ">
                                                        <div className="box-border w-[26px] h-[26px] block font-axiforma leading-[24px] list-outside pointer-events-auto">
                                                            <item.icon className="h-[26px] w-[26px] text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                        </div>
                                                        <div className="box-border text-[#292d34] cursor-pointer block font-axiforma min-h-[70px] min-w-[152px]">
                                                            <p className="block cursor-pointer text-[#292d34] font-axiforma text-[14px] font-[700] list-outside text-left w-[inherit] ">
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </p>
                                                            <p className="block cursor-pointer text-[#292d34] font-axiforma text-[11px] font-normal list-outside text-left w-[inherit]">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}

                                            <li className="box-border text-[#292d34] h-[60px] pointer-events-auto w-full py-[12px] px-[18px] relative text-center list-item my-5">
                                                <a className="header-product-btn font-axiforma" href="/features">
                                                    See All Features
                                                    <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden="true" focusable="false"><use href="/assets/CuNavigationSprite.svg#nav-icon-arrow"></use></svg>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="block box-border h-[500px] w-[500px] font-axiforma text-left border-l border-[#e9e8f0]">
                                        <p className="block text-[#292d34] text-[14px] font-[700] h-[21px] mt-[38px] pointer-events-auto text-left mb-[25px] ml-[16px]">
                                            PLATFORM
                                        </p>

                                        <ul className='box-border text-[#292d34] flex flex-wrap font-axiforma gap-[20px] text-left visible'>
                                            {products.map((item) => (
                                                <li
                                                    key={item.name}
                                                    className="box list-item text-[#292d34] basis-[200px] font-axiforma leading-[24px] w-[230px] text-left visible"
                                                >
                                                    <div className="box-border flex gap-[10px] text-[#292d34] leading-[24px] p-[16px] text-left decoration-solid visible w-[inherit] ">
                                                        <div className="box-border w-[26px] h-[26px] block font-axiforma leading-[24px] list-outside pointer-events-auto">
                                                            <item.icon className="h-[26px] w-[26px] text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                        </div>
                                                        <div className="box-border text-[#292d34] cursor-pointer block font-axiforma min-h-[70px] min-w-[152px]">
                                                            <p className="block cursor-pointer text-[#292d34] font-axiforma text-[14px] font-[700] list-outside text-left w-[inherit] ">
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </p>
                                                            <p className="block cursor-pointer text-[#292d34] font-axiforma text-[11px] font-normal list-outside text-left w-[inherit]">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className='border-t border-[#e9e8f0] flex items-center relative gap-[20px] pointer-events-auto h-[110px] p-[16px] '>

                                    <div className="box-border bloxk basis-[100%] visible ease-in-out opacity-100">
                                        <a className="flex gap-[10px] items-center" rel="" target="" data-segment-button-clicked="Contact Us" href="/contact/contact-sales">
                                            <div className="h-[40px] w-[40px] flex justify-center items-center rounded-[10px] text-white bg-[#7B68EE]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                                </svg>

                                            </div>
                                            <div>
                                                <p className="text-[14px] font-bold text-[#24223e]">Contact Us</p>
                                                <p className="-mt-5 text-[12px] font-normal text-[#24223e]">Get in touch with our 24/7 live sales team for free.</p>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Learn
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className=" absolute flex-col w-screen max-container bg-white top-full -left-[500px] z-10 mt-8 inset-x-0  overflow-hidden gap-[10px] flex shadow-lg ring-1 ring-gray-900/5">
                                <div className="flex">
                                    <div className="block visible w-[740px] pointer-events-auto leading-[24px]">
                                        <p className="block text-[#292d34] text-[14px] font-[700] h-[21px] mt-[38px] pointer-events-auto text-left mb-[25px] ml-[16px]">PRODUCT</p>

                                        <ul className='box-border text-[#292d34] flex flex-wrap font-axiforma gap-[20px] text-left visible'>
                                            <li className="box-border text-[#292d34] basis-[100%] grow-1 font-axiforma ">
                                                <div style={{
                                                    border: '1px solid rgb(242, 72, 255)',
                                                    backgroundPositionX: '50%',
                                                    backgroundPositionY: '50%',
                                                    backgroundSize: '150% 100%',
                                                    borderRadius: '10px',
                                                    boxSizing: 'border-box',
                                                    display: 'block',
                                                    fontFamily: 'axiforma',
                                                    lineHeight: '24px',
                                                    padding: '1px',
                                                    pointerEvents: 'auto',
                                                    transitionProperty: 'background-position',
                                                    willChange: 'background-position',
                                                }}>
                                                    <a className="" rel="" target="" href="https://clickup.com/features/ai" style={{
                                                        alignItems: 'center',
                                                        backgroundColor: "white",
                                                        borderRadius: '10px',
                                                        display: 'flex',
                                                        fontFamily: 'axiforma',
                                                        padding: '20px',
                                                        textAlign: 'left',
                                                        position: 'relative',
                                                        textUnderlineOffset: '2px',
                                                        visibility: 'visible',
                                                        width: '730px',
                                                        textDecorationColor: 'rgb(123, 104, 238)',
                                                        justifyContent: 'space-between',
                                                        listStylePosition: 'outside',
                                                        listStyleType: 'none',
                                                        textDecorationStyle: 'solid',
                                                        zIndex: '10'
                                                    }}
                                                    >
                                                        <svg width="115" height="26" viewBox="0 0 115 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M9.31611 4.65343C4.318 6.81097 1.37045 11.843 3.43581 16.6175C5.50117 21.392 11.3838 23.1445 16.3819 20.9869C21.38 18.8294 25.0878 14.6509 22.0685 8.57433C20.0031 3.79981 14.3142 2.49589 9.31611 4.65343ZM14.8456 17.4355C12.5261 18.4368 8.09767 18.371 6.90644 15.6172C5.71521 12.8634 8.33907 8.75768 10.6586 7.75638C12.9782 6.75509 15.4328 8.52254 16.6241 11.2763C17.8153 14.0301 17.1652 16.4342 14.8456 17.4355Z" fill="#78ffff"></path></g><g opacity="0.8"><path d="M3.97587 16.0622C5.73784 21.3773 11.291 24.6439 16.6126 22.8941C21.9343 21.1443 24.4429 15.2268 22.6809 9.91165C20.9189 4.59655 15.3657 1.3299 10.0441 3.07974C4.7225 4.82958 2.21389 10.7471 3.97587 16.0622ZM18.7225 11.2132C19.5402 13.6799 17.4132 19.7871 14.3439 20.7964C11.2746 21.8056 7.0108 18.9896 7.0038 15.3606C6.99681 11.7316 9.04757 10.4097 11.9485 9.44384C14.8493 8.47801 17.9048 8.74656 18.7225 11.2132Z" fill="#FF02F0"></path></g><g opacity="0.5"><path d="M21.1287 17.0835C23.656 12.7061 22.527 7.00103 18.1539 4.46206C13.7808 1.92308 8.2848 3.78186 5.75751 8.15926C3.23021 12.5367 4.35917 18.2418 8.7323 20.7807C13.1054 23.3197 18.6014 21.4609 21.1287 17.0835ZM9.01041 10.0478C10.1833 8.01634 15.5782 5.78637 18.1005 7.25076C20.6227 8.71515 21.282 13.2803 18.8387 15.4624C16.3955 17.6446 14.2735 17.0548 11.8816 15.6779C9.4897 14.3011 7.83752 12.0794 9.01041 10.0478Z" fill="#FF02F0"></path></g><path d="M44.1181 6.11035H40.7573V19.5535H44.1181V6.11035Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.3619 19.859C32.4457 19.859 30.8489 19.2284 29.5536 17.967C28.2584 16.6876 27.6196 15.0479 27.6196 13.0477C27.6196 11.0296 28.2761 9.37182 29.5714 8.07446C30.8843 6.75903 32.4812 6.11035 34.3797 6.11035C36.7217 6.11035 38.7977 7.13743 40.0041 8.74116L37.8927 10.9936C36.8813 9.89439 35.7814 9.3358 34.5926 9.3358C33.5812 9.3358 32.7473 9.67815 32.0554 10.3809C31.3811 11.0837 31.044 11.9666 31.044 13.0297C31.044 14.0568 31.3811 14.9218 32.0554 15.6245C32.7473 16.3092 33.5812 16.6516 34.5749 16.6516C35.8701 16.6516 37.0056 16.075 37.9459 14.9398L40.1462 17.0841C39.543 17.8949 38.7266 18.5616 37.7152 19.0842C36.7041 19.6068 35.5862 19.859 34.3619 19.859Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M49.0064 7.23954C49.0064 8.20057 48.1859 8.97961 47.1734 8.97961C46.1609 8.97961 45.3401 8.20057 45.3401 7.23954C45.3401 6.27855 46.1609 5.49951 47.1734 5.49951C48.1859 5.49951 49.0064 6.27855 49.0064 7.23954ZM48.8654 9.78268H45.4811V19.5537H48.8654V9.78268Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M55.0477 19.8588C53.5262 19.8588 52.3018 19.3736 51.34 18.4031C50.3955 17.4326 49.9231 16.1925 49.9231 14.6649C49.9231 13.1373 50.3955 11.8972 51.3573 10.9267C52.3194 9.9562 53.5611 9.47095 55.1002 9.47095C57.1117 9.47095 58.8779 10.4774 59.6999 12.3645L57.2339 13.6944C56.7442 12.8497 56.0623 12.4184 55.1702 12.4184C54.5232 12.4184 53.9983 12.634 53.5786 13.0653C53.1763 13.4967 52.9665 14.0358 52.9665 14.6649C52.9665 15.9768 53.8934 16.9473 55.1354 16.9473C56.0271 16.9473 56.8491 16.4441 57.199 15.6713L59.6651 17.181C58.8255 18.8344 57.0941 19.8588 55.0477 19.8588Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M63.7725 6.11035H60.6165V19.5535H63.7725V16.1312L64.1422 15.7787L67.0273 19.5535H70.6988L66.2662 13.754L70.477 9.73997H66.6204L63.7725 12.455V6.11035Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M71.3098 14.5363V6.11035H74.7048V14.3476C74.7048 15.8202 75.5651 16.5299 76.8094 16.5299C78.0356 16.5299 78.9141 15.7847 78.9141 14.3476V6.11035H82.3087V14.5363C82.3087 18.4041 79.5862 19.859 76.8094 19.859C74.0505 19.859 71.3098 18.4041 71.3098 14.5363Z" fill="#292D34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M89.4865 20.047C92.1029 20.047 94.2242 17.7479 94.2242 14.9118C94.2242 12.0757 92.1029 9.77661 89.4865 9.77661C88.42 9.77661 87.436 10.1586 86.644 10.8032V9.91176H83.5308V23.8308H86.644V19.0204C87.436 19.665 88.42 20.047 89.4865 20.047ZM86.644 14.9171V14.9065C86.6468 13.6401 87.6455 12.6145 88.8773 12.6145C90.111 12.6145 91.111 13.643 91.111 14.9118C91.111 16.1805 90.111 17.2091 88.8773 17.2091C87.6455 17.2091 86.6468 16.1834 86.644 14.9171Z" fill="#292D34"></path><path d="M106.503 20.1645H110.169L105.147 6.11035H101.824L96.6685 20.1645H100.354L101.194 17.5971H105.682L106.503 20.1645ZM104.822 14.5162H102.092L103.486 10.3513L104.822 14.5162Z" fill="#292D34"></path><path d="M111.41 6.11035V20.1645H115V6.11035H111.41Z" fill="#292D34"></path><defs><linearGradient id="paint0_linear_6094_84004" x1="-17.6018" y1="10.6195" x2="9.33118" y2="25.5626" gradientUnits="userSpaceOnUse"><stop stop-color="#6F00FF"></stop><stop offset="1" stop-color="#49CCF9"></stop></linearGradient><linearGradient id="paint1_linear_6094_84004" x1="25.99" y1="4.59746" x2="2.73128" y2="12.3078" gradientUnits="userSpaceOnUse"><stop stop-color="#FF02F0"></stop><stop offset="1" stop-color="#E922C5"></stop></linearGradient><linearGradient id="paint2_linear_6094_84004" x1="0.188137" y1="9.1162" x2="19.3435" y2="20.1756" gradientUnits="userSpaceOnUse"><stop stop-color="#FF02F0"></stop><stop offset="1" stop-color="#EDE4C3"></stop></linearGradient></defs>
                                                        </svg>
                                                        <span className="flex gap-[10px] items-center leading-[24px] pointer-events-auto box-border">
                                                        <span className='box-border text-[#292d34] text-[14px] font-axiforma font-normal tracking-wider'>The only AI solution that's custom-built for you</span>
                                                        <svg className="CuNavigation_dropdownItemTextV3Arrow__MzrOI" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.999907 3.9979H12.5892L10.3005 1.70918C9.90997 1.31866 9.90997 0.685492 10.3005 0.294968C10.691 -0.0955561 11.3242 -0.0955554 11.7147 0.294969L15.7071 4.28737C15.9028 4.48307 16.0004 4.73971 16 4.99621C16.0004 5.25269 15.9028 5.50931 15.7071 5.705L11.7071 9.70497C11.3166 10.0955 10.6834 10.0955 10.2929 9.70497C9.9024 9.31445 9.9024 8.68128 10.2929 8.29076L12.5858 5.9979H0.999907C0.447621 5.9979 -9.34601e-05 5.55018 -9.34601e-05 4.9979C-9.34601e-05 4.44561 0.447621 3.9979 0.999907 3.9979Z" fill="#F248FF"></path></svg>
                                                    </span>
                                                    </a>
                                                </div>
                                            </li>
                                            {products.map((item) => (
                                                <li
                                                    key={item.name}
                                                    className="box list-item text-[#292d34] basis-[200px] font-axiforma leading-[24px] w-[230px] text-left visible"
                                                >
                                                    <div className="box-border flex gap-[10px] text-[#292d34] leading-[24px] p-[16px] text-left decoration-solid visible w-[inherit] ">
                                                        <div className="box-border w-[26px] h-[26px] block font-axiforma leading-[24px] list-outside pointer-events-auto">
                                                            <item.icon className="h-[26px] w-[26px] text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                        </div>
                                                        <div className="box-border text-[#292d34] cursor-pointer block font-axiforma min-h-[70px] min-w-[152px]">
                                                            <p className="block cursor-pointer text-[#292d34] font-axiforma text-[14px] font-[700] list-outside text-left w-[inherit] ">
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </p>
                                                            <p className="block cursor-pointer text-[#292d34] font-axiforma text-[11px] font-normal list-outside text-left w-[inherit]">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}

                                            <li className="box-border text-[#292d34] h-[60px] pointer-events-auto w-full py-[12px] px-[18px] relative text-center list-item my-5">
                                                <a className="header-product-btn font-axiforma" href="/features">
                                                    See All Features
                                                    <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden="true" focusable="false"><use href="/assets/CuNavigationSprite.svg#nav-icon-arrow"></use></svg>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="block box-border h-[500px] w-[500px] font-axiforma text-left border-l border-[#e9e8f0]">
                                        <p className="block text-[#292d34] text-[14px] font-[700] h-[21px] mt-[38px] pointer-events-auto text-left mb-[25px] ml-[16px]">
                                            PLATFORM
                                        </p>

                                        <ul className='box-border text-[#292d34] flex flex-wrap font-axiforma gap-[20px] text-left visible'>
                                            {products.map((item) => (
                                                <li
                                                    key={item.name}
                                                    className="box list-item text-[#292d34] basis-[200px] font-axiforma leading-[24px] w-[230px] text-left visible"
                                                >
                                                    <div className="box-border flex gap-[10px] text-[#292d34] leading-[24px] p-[16px] text-left decoration-solid visible w-[inherit] ">
                                                        <div className="box-border w-[26px] h-[26px] block font-axiforma leading-[24px] list-outside pointer-events-auto">
                                                            <item.icon className="h-[26px] w-[26px] text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                        </div>
                                                        <div className="box-border text-[#292d34] cursor-pointer block font-axiforma min-h-[70px] min-w-[152px]">
                                                            <p className="block cursor-pointer text-[#292d34] font-axiforma text-[14px] font-[700] list-outside text-left w-[inherit] ">
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </p>
                                                            <p className="block cursor-pointer text-[#292d34] font-axiforma text-[11px] font-normal list-outside text-left w-[inherit]">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className='border-t border-[#e9e8f0] flex items-center relative gap-[20px] pointer-events-auto h-[110px] p-[16px] '>

                                    <div className="box-border bloxk basis-[100%] visible ease-in-out opacity-100">
                                        <a className="flex gap-[10px] items-center" rel="" target="" data-segment-button-clicked="Contact Us" href="/contact/contact-sales">
                                            <div className="h-[40px] w-[40px] flex justify-center items-center rounded-[10px] text-white bg-[#7B68EE]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                                </svg>

                                            </div>
                                            <div>
                                                <p className="text-[14px] font-bold text-[#24223e]">Contact Us</p>
                                                <p className="-mt-5 text-[12px] font-normal text-[#24223e]">Get in touch with our 24/7 live sales team for free.</p>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Pricing
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Enterprise
                    </a>
                </Popover.Group>

                <div className="hidden lg:flex lg:flex-1 items-center justify-center font-extrabold  lg:gap-x-8 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Contact Sales
                    </a>
                    <a href="#" className="text-sm [700] leading-6  w-[100px] h-[45px] bg-[#7b68ee] inline-flex rounded-[10px] items-center justify-center text-white shadow-md">
                        Sign Up
                    </a>
                    <a href="#" className="text-[14px] [700] leading-6  w-[100px] h-[45px] bg[#e9ebf0] text-[#292d34] inline-flex rounded-[10px] items-center justify-center shadow-md">
                        Log in
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src={Logo}
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Product
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {products.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Solutions
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {products.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Learn
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {products.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Pricing
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Enterprise
                                </a>
                            </div>

                            <div className="flex pt-5 flex-col flex-1 font-extrabold gap-y-8">
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    Contact Sales
                                </a>
                                <a href="#" className="text-sm [700] leading-6  w-full h-[45px] bg-[#7b68ee] inline-flex rounded-[10px] items-center justify-center text-white shadow-md">
                                    Sign Up
                                </a>
                                <a href="#" className="text-[14px] [700] leading-6  w-full h-[45px] bg[#e9ebf0] text-[#292d34] inline-flex rounded-[10px] items-center justify-center shadow-md">
                                    Log in
                                </a>
                            </div>


                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
