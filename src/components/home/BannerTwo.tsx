import {bannerData} from "../../data/banner.ts";
import {useEffect, useState} from "react";

export default function BannerSecondSection() {
    const [selectedBannerButton, setSelectedBannerButton] = useState(3); // Set the default to 3
    const [filteredBannerData, setFilteredBannerData] = useState(null);

    useEffect(() => {
        const filtered = bannerData.find(item => item.id === selectedBannerButton);
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
                                    <div id="summary" dangerouslySetInnerHTML={{__html: data.icon}} />
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
                            <picture className=""><img src={filteredBannerData.smallnpm }
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