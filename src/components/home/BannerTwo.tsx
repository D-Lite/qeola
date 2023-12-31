import {bannerData} from "../../data/banner.ts";
import {useEffect, useState} from "react";

interface BannerData {
    id: number,
    title: string,
    icon: string,
    big: string,
    small: string
}

export default function BannerSecondSection() {
    const [selectedBannerButton, setSelectedBannerButton] = useState(3); // Set the default to 3
    const [filteredBannerData, setFilteredBannerData] = useState<BannerData>();

    useEffect(() => {
        // @ts-ignore
        const filtered: BannerData = bannerData.find(item => item.id === selectedBannerButton);
        // @ts-ignore
        setFilteredBannerData(filtered);
    }, [selectedBannerButton]);

    return (
        <div className="secondsection-banner">
            <div className="">
                <div className="flex items-center justify-center">
                    <div style={{transform: "translate(-57.5px)", transition: "transform 0.5s ease-in-out 0s;"}}>
                        <div className="secondarybanner-parentdiv">
                            { bannerData && bannerData.map((data, index) => (
                                <button
                                className="secondarybanner-btn"
                                key={index}
                                onClick={() => setSelectedBannerButton((data.id))}
                                >
                                <div className="secondarybanner-btn-div">
                                <div className="secondarybanner-btn-div-div1">
                                <div></div>
                                <div></div>
                                    <div id="summary">
                                        { data.id === 1 &&
                                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.9223 13.9318L33.9328 13.9561L33.9446 13.9798C36.1982 18.5153 35.8991 22.2091 34.2276 25.1611C32.5213 28.1746 29.3022 30.5579 25.4658 32.214C17.9693 35.45 9.33798 32.7623 6.34237 25.8373C3.37294 18.9729 7.53683 11.5301 15.1048 8.26324C22.6728 4.99635 30.9529 7.06745 33.9223 13.9318ZM9.98537 25.0507C11.1218 27.6778 13.7505 28.9047 16.3522 29.3011C18.967 29.6994 21.821 29.3119 23.8344 28.4428C25.9231 27.5411 27.3157 25.971 27.8821 23.9737C28.4406 22.0044 28.1678 19.7274 27.1632 17.4049C26.16 15.0858 24.6027 13.1254 22.736 11.9532C20.8496 10.7686 18.618 10.382 16.4302 11.3264C14.3259 12.2348 12.2297 14.4534 10.9039 16.9415C9.58264 19.4213 8.86987 22.472 9.98537 25.0507Z" fill="url(#paint0_linear_5349_140949)" stroke="#7F76B3" stroke-width="2"></path><path opacity="0.8" d="M6.27683 25.3553C9.05857 33.7464 17.8257 38.9036 26.2271 36.1411C34.6286 33.3786 38.589 24.0365 35.8073 15.6453C33.0255 7.25415 24.2585 2.09693 15.857 4.85943C7.45549 7.62193 3.49508 16.9641 6.27683 25.3553ZM29.558 17.7002C30.8489 21.5944 27.491 31.236 22.6454 32.8293C17.7997 34.4227 11.0682 29.977 11.0572 24.2477C11.0461 18.5184 14.2837 16.4314 18.8635 14.9067C23.4432 13.3819 28.267 13.8059 29.558 17.7002Z" fill="#7F76B3"></path><path opacity="0.5" d="M33.3568 26.9708C37.3468 20.0601 35.5644 11.0532 28.6604 7.0448C21.7563 3.03641 13.0797 5.97094 9.08971 12.8817C5.09977 19.7925 6.88209 28.7994 13.7861 32.8078C20.6902 36.8161 29.3669 33.8816 33.3568 26.9708ZM14.2252 15.8633C16.0769 12.6561 24.594 9.13554 28.576 11.4474C32.5581 13.7593 33.5988 20.9664 29.7416 24.4116C25.8844 27.8567 22.5343 26.9254 18.7581 24.7517C14.9819 22.578 12.3735 19.0705 14.2252 15.8633Z" fill="url(#paint1_linear_5349_140949)"></path><defs><linearGradient id="paint0_linear_5349_140949" x1="14.7211" y1="7.33966" x2="25.8561" y2="33.1347" gradientUnits="userSpaceOnUse"><stop stop-color="#7F76B3"></stop><stop offset="1" stop-color="#7F76B3" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_5349_140949" x1="33.3568" y1="26.9708" x2="9.05572" y2="12.9406" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg>
                                        }
                                        { data.id === 2 &&
                                            <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.4283 12.4981C31.4283 10.834 31.3602 9.38804 31.2574 8.15311C30.9641 4.63108 28.1543 2.17497 24.6273 1.94948C22.5654 1.81765 19.9236 1.71631 16.6744 1.71631C13.4251 1.71631 10.7834 1.81765 8.72146 1.94948C5.19444 2.17497 2.38467 4.63108 2.09136 8.15311C1.98852 9.38804 1.92041 10.834 1.92041 12.4981C1.92041 14.244 1.99538 15.7498 2.10679 17.0238C2.40615 20.4469 5.10998 22.8336 8.53926 23.0509C10.5865 23.1807 13.266 23.2798 16.6744 23.2798C20.0828 23.2798 22.7623 23.1807 24.8095 23.0509C28.2388 22.8336 30.9426 20.4469 31.242 17.0238C31.3534 15.7498 31.4283 14.244 31.4283 12.4981Z" fill="#7F76B3" fill-opacity="0.1" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.8096 14.7671L21.7818 17.6044L25.754 14.7671" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.7539 10.228L21.7817 7.39073L17.8095 10.228" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        }
                                        { data.id === 3 &&
                                            <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 21C20.7195 21 19.671 21.0221 18.8443 21.0512C17.2961 21.1059 16 21.9509 16 23.5C16 25.0512 17.2928 25.8998 18.8432 25.9522C19.6551 25.9797 20.6964 26 22 26C23.3036 26 24.3449 25.9797 25.1568 25.9522C26.7072 25.8998 28 25.0512 28 23.5C28 21.9509 26.7039 21.1059 25.1557 21.0512C24.329 21.0221 23.2805 21 22 21Z" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 13.5C24 13.4682 23.9998 13.4368 23.9994 13.4058C23.9782 11.827 22.4482 11.1372 20.87 11.0878C19.4277 11.0427 17.3189 11 14.5 11C11.6811 11 9.57227 11.0427 8.12997 11.0878C6.55177 11.1372 5.02182 11.827 5.00063 13.4058C5.00021 13.4368 5 13.4682 5 13.5C5 13.5503 5.00053 13.5996 5.00156 13.6479C5.03455 15.1918 6.53082 15.8666 8.0743 15.915C9.47923 15.9591 11.5719 16 14.5 16C17.4281 16 19.5208 15.9591 20.9257 15.915C22.4692 15.8666 23.9655 15.1918 23.9984 13.6479C23.9995 13.5996 24 13.5503 24 13.5Z" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 1C5.71951 1 4.67101 1.02207 3.84427 1.05125C2.29613 1.1059 1 1.9509 1 3.5C1 5.05124 2.29279 5.89983 3.84315 5.95223C4.65505 5.97967 5.69645 6 7 6C8.30355 6 9.34495 5.97967 10.1568 5.95223C11.7072 5.89983 13 5.05124 13 3.5C13 1.9509 11.7039 1.1059 10.1557 1.05125C9.32899 1.02207 8.28049 1 7 1Z" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        }
                                    { data.id === 4 &&
                                        <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3473 30.7286C10.8782 30.7286 8.89195 30.6115 7.33302 30.4526C4.3617 30.1496 2.27568 27.8491 2.03183 24.8723C1.85742 22.7432 1.71436 19.8237 1.71436 15.9747C1.71436 12.1257 1.85742 9.20615 2.03183 7.07705C2.27568 4.10029 4.3617 1.79977 7.33302 1.49677C8.89195 1.3378 10.8783 1.2207 13.3473 1.2207C15.7764 1.2207 17.7949 1.33405 19.4198 1.4891C22.6642 1.79869 24.9983 4.33323 25.2509 7.58262C25.4158 9.70402 25.5477 12.49 25.5477 15.9747C25.5477 17.3111 25.5283 18.5448 25.4951 19.6776C22.7294 22.0071 19.3898 22.0357 17.651 21.8475C17.1374 21.7919 16.6472 22.3099 16.722 22.821C16.9705 24.5202 17.002 27.7874 14.4615 30.7205C14.1002 30.7258 13.7288 30.7286 13.3473 30.7286Z" fill="#7F76B3" fill-opacity="0.1"></path><path d="M7.80266 30.4984C9.28506 30.6338 11.1198 30.7291 13.3475 30.7291C15.5241 30.7291 17.371 30.6381 18.9005 30.5077C22.4691 30.2032 25.0347 27.4205 25.2898 23.848C25.4361 21.7979 25.5479 19.1825 25.5479 15.9752C25.5479 12.7678 25.4361 10.1524 25.2898 8.10227C25.0347 4.52984 22.4691 1.74708 18.9005 1.44267C17.371 1.3122 15.5241 1.22119 13.3475 1.22119C11.1198 1.22119 9.28507 1.31652 7.80267 1.45191C4.53415 1.75045 2.24207 4.27504 1.995 7.54785C1.8378 9.63016 1.71452 12.4022 1.71452 15.9752C1.71452 19.5481 1.8378 22.3202 1.995 24.4025C2.24207 27.6753 4.53414 30.1999 7.80266 30.4984Z" fill="#7F76B3" fill-opacity="0.1" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.2642 19.3804C22.0256 22.9027 19.5444 19.4255 17.036 21.9339C14.5276 24.4424 18.0047 26.9236 14.1987 30.4458" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.95654 8.03125H19.3057" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.95654 13.7061H15.3335" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    }
                                        { data.id === 5 &&
                                            <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.147 4.57874L14.147 19.9002L24.645 28.6958C24.645 28.6958 32.3057 21.0685 27.766 12.5232C22.9426 3.44382 14.147 4.57874 14.147 4.57874Z" fill="#7F76B3" fill-opacity="0.1"></path><path d="M1.09521 18.4819C1.09521 10.8036 7.3197 4.5791 14.998 4.5791C22.6763 4.5791 28.9008 10.8036 28.9008 18.4819C28.9008 26.1602 22.6763 32.3847 14.998 32.3847C7.3197 32.3847 1.09521 26.1602 1.09521 18.4819Z" fill="#7F76B3" fill-opacity="0.1" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.147 19.8975L18.1192 23.3022" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.147 19.8975V11.3856" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.2262 2.87581C23.2262 2.87581 27.3673 2.47715 29.1846 4.29445C31.0019 6.11176 30.6033 10.2528 30.6033 10.2528" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        }

                                        { data.id === 6 &&
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8492 25.435C23.9976 25.435 30.6031 20.0146 30.6031 13.3281C30.6031 6.64164 23.9976 1.22119 15.8492 1.22119C7.70079 1.22119 1.09521 6.64164 1.09521 13.3281C1.09521 16.4289 2.51579 19.2574 4.85203 21.3994C7.18828 23.5413 5.35117 30.7291 5.35117 30.7291L8.44736 27.8657C10.4359 26.0267 13.1406 25.435 15.8492 25.435Z" fill="#7F76B3" fill-opacity="0.1" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.1748 15.9771L16.9843 15.9771" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.1748 10.8687L22.0915 10.8687" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        }

                                        { data.id === 7 &&
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.6168 1.51904L30.8867 4.64007L23.7934 23.3663L16.9839 20.8127L24.9283 1.80277L28.6168 1.51904Z" fill="#7F76B3" fill-opacity="0.1"></path><path d="M21.6471 26.8649C20.1979 28.2067 17.3557 30.7719 16.9629 30.6225C16.5677 30.4723 16.2974 26.6778 16.1852 24.7528C16.143 24.0279 16.2635 23.3048 16.5276 22.6284L16.9629 21.5138L23.9591 3.59898C24.662 1.7992 26.6586 0.838259 28.4646 1.52498C30.2223 2.19331 31.0361 4.19569 30.3521 5.94727L23.4371 23.6543L22.9135 24.9949C22.6359 25.7059 22.2072 26.3463 21.6471 26.8649Z" fill="#7F76B3" fill-opacity="0.1"></path><path d="M16.9629 21.5138L16.5276 22.6284C16.2635 23.3048 16.143 24.0279 16.1852 24.7528C16.2974 26.6778 16.5677 30.4723 16.9629 30.6225C17.3557 30.7719 20.1979 28.2067 21.6471 26.8649C22.2072 26.3463 22.6359 25.7059 22.9135 24.9949L23.4371 23.6543M16.9629 21.5138L23.9591 3.59898C24.662 1.7992 26.6586 0.838259 28.4646 1.52498V1.52498V1.52498C30.2223 2.19331 31.0361 4.19569 30.3521 5.94726L23.4371 23.6543M16.9629 21.5138C16.9629 21.5138 18.4027 21.2968 20.3888 21.9535C22.3749 22.6102 23.4371 23.6543 23.4371 23.6543" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.36523 6.34619C3.36523 6.34619 2.23031 8.59933 2.23031 15.993C2.23031 23.3867 3.36523 25.6398 3.36523 25.6398" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.20228 3.50928C6.20228 3.50928 7.62093 2.65809 12.3025 2.37436C16.984 2.09063 19.5376 2.65809 19.5376 2.65809" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.20231 28.4785L12.1606 28.4785" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.09521 3.79478C1.09521 5.20508 2.23849 6.34835 3.64879 6.34835C5.05908 6.34835 6.20236 5.20508 6.20236 3.79478C6.20236 2.38448 5.05908 1.24121 3.64879 1.24121C2.23849 1.24121 1.09521 2.38448 1.09521 3.79478Z" fill="#7F76B3" fill-opacity="0.1" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.09521 28.1952C1.09521 29.6055 2.23849 30.7487 3.64879 30.7487C5.05908 30.7487 6.20236 29.6055 6.20236 28.1952C6.20236 26.7849 5.05908 25.6416 3.64879 25.6416C2.23849 25.6416 1.09521 26.7849 1.09521 28.1952Z" fill="#7F76B3" fill-opacity="0.1" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        }

                                        { data.id === 8 &&
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.6032 15.8506C30.6032 19.1695 30.4585 21.8545 30.2724 23.9353C29.9626 27.4007 27.4023 29.9976 23.9358 30.2956C21.8948 30.4711 19.2307 30.6046 15.8492 30.6046C12.4676 30.6046 9.80354 30.4711 7.76255 30.2956C4.29608 29.9976 1.73578 27.4007 1.42593 23.9353C1.23989 21.8545 1.09521 19.1695 1.09521 15.8506C1.09521 12.6599 1.22894 10.055 1.40458 8.0097C1.71338 4.41382 4.41236 1.71484 8.00824 1.40604C10.0536 1.2304 12.6585 1.09668 15.8492 1.09668" stroke="#7b73ae" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.82514 15.5405C13.3924 17.9488 14.9206 20.0857 14.9206 20.0857C14.9206 20.0857 16.4583 16.585 19.4075 12.7251C22.5841 8.56757 24.9387 7.00165 24.9387 7.00165" stroke="#7b73ae" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        }

                                        { data.id === 9 &&
                                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.3414 16.15C31.3414 12.9593 31.2077 10.3543 31.0321 8.30902C30.7233 4.71314 28.0243 2.01416 24.4284 1.70536C22.3831 1.52972 19.7782 1.396 16.5875 1.396C13.3968 1.396 10.7918 1.52972 8.74652 1.70536C5.15064 2.01416 2.45166 4.71314 2.14286 8.30902C1.96722 10.3543 1.8335 12.9593 1.8335 16.15C1.8335 19.4688 1.97817 22.1538 2.16422 24.2346C2.47406 27.7 5.03436 30.2969 8.50083 30.5949C10.5418 30.7704 13.2059 30.9039 16.5875 30.9039C19.969 30.9039 22.6331 30.7704 24.6741 30.5949C28.1406 30.2969 30.7009 27.7 31.0107 24.2346C31.1968 22.1538 31.3414 19.4688 31.3414 16.15Z" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.7738 9.625L24.3078 16.6083C23.9108 17.0371 23.3423 17.2652 22.759 17.2299L15.356 16.7812C14.7069 16.7419 14.081 17.0286 13.6869 17.5458L10.2461 22.0619C9.94527 22.4568 9.50519 22.722 9.01558 22.8036L2.96826 23.8115" stroke="#7F76B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.6807 17.002L31.3414 9.625L30.7739 27.2163L25.9505 30.621L8.07552 30.9047L4.1033 28.9186L2.11719 23.8115L9.7779 22.6766L14.885 16.7183L23.6807 17.002Z" fill="#7F76B3" fill-opacity="0.1"></path></svg>
                                        }
                                    </div>
                                    {/*<div id="summary" dangerouslySetInnerHTML={{__html: data.icon}} />*/}
                                </div>
                                <div className="secondarybanner-btn-div-div2">{data.title}</div>
                                </div>
                                </button>
                                )) }
                        </div>
                    </div>
                </div>
                { filteredBannerData &&
                    <div className="secondarybanner-img">
                        <div className="secondarybanner-img-div" data-testid="cu-media-element">
                            <picture className=""><img src={filteredBannerData.big} srcSet=""
                                                       height="1248" width="1870" alt="Projects"
                                                       loading="eager" decoding="async"
                                                       sizes="(max-width: 900px) 100vw, 50vw" />
                            </picture>
                        </div>
                        <div className="secondarybanner-subimg-div">
                            <picture className=""><img src={filteredBannerData.small }
                                                       srcSet="" height="393" width="658"
                                                       alt="Projects" loading="eager"
                                                       decoding="async"
                                                       sizes="(max-width: 900px) 100vw, 50vw" />
                            </picture>
                        </div>
                    </div>
                }
                <svg className="secondsection-banner-leftsvg" xmlns="http://www.w3.org/2000/svg" width="1014" height="919"
                     viewBox="0 0 1014 919" fill="none">
                    <g opacity="0.4" filter="url(#filter0_f_801_83213)">
                        <path
                            d="M133.838 591.958C168.415 371.71 14.2491 161.699 250.901 166.77C510.136 172.326 580.695 26.9879 796.336 204.508C983.128 358.28 894.404 604.408 680.657 690.087C555.188 740.381 361.656 787.841 340.798 792.897C339.501 793.211 338.476 793.491 337.19 793.845C315.024 799.951 92.5442 854.992 133.838 591.958Z"
                            fill="url(#paint0_linear_801_83213)"></path>
                    </g>
                    <defs>
                        <filter id="filter0_f_801_83213" x="0.451286" y="0.451286" width="1013.28" height="917.811"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="57.7744"
                                            result="effect1_foregroundBlur_801_83213"></feGaussianBlur>
                        </filter>
                        <linearGradient id="paint0_linear_801_83213" x1="73" y1="326.5" x2="526.5" y2="191.5"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#12D0FA"></stop>
                            <stop offset="0.34375" stop-color="#7612FA"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <svg className="secondsection-banner-rightsvg" xmlns="http://www.w3.org/2000/svg" width="1032" height="937"
                     viewBox="0 0 1032 937" fill="none">
                    <g opacity="0.4" filter="url(#filter0_f_801_83212)">
                        <path
                            d="M196.945 660.341C412.121 473.409 43.3074 244.198 326.62 249.187C636.967 254.652 843.101 -39.2324 904 229.288C962.579 487.581 774.491 145.828 866 524.5C970.647 957.539 389.71 798.846 269.923 761.904C255.854 757.565 241.121 757.62 226.933 761.553C169.188 777.559 27.3532 807.673 196.945 660.341Z"
                            fill="url(#paint0_linear_801_83212)" fill-opacity="0.8"></path>
                    </g>
                    <defs>
                        <filter id="filter0_f_801_83212" x="0.816521" y="0.466423" width="1030.28" height="935.821"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="57.7744"
                                            result="effect1_foregroundBlur_801_83212"></feGaussianBlur>
                        </filter>
                        <linearGradient id="paint0_linear_801_83212" x1="641.5" y1="139" x2="812.5" y2="693"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FA12E3"></stop>
                            <stop offset="1" stop-color="#FFD700"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
)
}