import LikeUs from '../../assets/images/users-love-us.png'
export default function HomeTeams() {
    return(
        <div className="flex flex-col min-h-[70vh] items-center  gap-[30px]">
            <p className=' text-[70px] font-[900] leading-[90px] w-[900px] text-black text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                Perfect fit for every team
            </p>
            <div>
                <p className="text-[23px] font-axiforma font-normal tracking-wider leading-[35px] text-center text-black">
                    <strong>Get started fast with out-of-the-box solutions.</strong>
                </p>
                <p className="text-[23px] font-axiforma font-normal tracking-wider leading-[35px] text-center text-black">
                    Easily customize ClickUp as team needs grow!
                </p>
            </div>
            <div className='flex flex-col gap-8 mt-10 relative items-center justify-center'>
             <img src='https://clickup.com/assets/home-test/animated-callout-bg.png' className='w-full h-[100%] relative object-cover object-center' />
                <div className="absolute text-black text-center flex items-center justify-center flex-wrap">
                    <h2 className=' text-[60px] font-[900] leading-[90px] w-[900px] text-black text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                        Ready to unleash your team's full potential?
                    </h2>
                    <div className="w-full flex items-center justify-center gap-8 my-10">
                        <button className='box-border bg-white items-center justify-center w-[280px] h-[60px] text-center font-axiforma font-[700] flex cursor-pointer text-[24px] text-[#471d7c] rounded-[14px]'>YES, lets do this</button>
                        <button className='box-border bg-[#682e93] items-center justify-center w-[225px] h-[60px] text-center border border-[#9375b0] font-axiforma font-[700] flex cursor-pointer text-[24px] text-[#9375b0] rounded-[14px]'>Show me more</button>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[#aa79e8] text-[20px] font-[500] font-axiforma text-center w-[584px]'>Free forever. No credit card required.</p>
                        <p className='text-[#aa79e8] text-[20px] -mt-4 font-[500] font-axiforma text-center w-[584px]'>Join 2+ million teams today!</p>
                    </div>
                </div>
            </div>

            <div>
                <div className='my-10 flex items-center justify-center flex-col'>
                    <p className=' text-[70px] font-[900] leading-[90px] w-[900px] text-black text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                        All teams love ClickUp
                    </p>
                    <div>
                        <p className="text-[23px] font-axiforma font-normal tracking-wider leading-[35px] text-center text-black">
                            <strong>Teams love how ClickUp helps them get things done efficiently.</strong>
                        </p>
                        <p className="text-[23px] font-axiforma font-normal tracking-wider leading-[35px] text-center text-black">
                            But don’t take our word for it, hear it directly from them.
                        </p>
                    </div>
                </div>
                <div className='flex gap-10 items-center justify-center'>
                    <div className='rounded-[14px] relative shadow-sm shadow-[rgba(74, 20, 140, 0.2) 0px 4px 10px 0px] h-[560px] w-[385px]'>
                        <div className='h-auto w-auto z-[2] hidden box-border'></div>
                        <img src="https://clickup.com/assets/home-test/finastra.png" alt="finastra" className="w-[385px] h-[443px] leading-[24px] font-axiforma size-[443px] aspect-auto" />
                        <div className="comp-bg">
                            <div className="box-border comp-bg-svg leading-[24px] font-axiforma w-[inherit]">
                                <svg width="154" height="22" viewBox="0 0 154 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.39031 5.20621V8.66335H13.4005V13.241H5.39031V21.3919H0V0.635404H13.9888V5.20621H5.39031ZM18.2915 21.3919V0.635404H23.6818V21.3919H18.2915ZM44.1212 21.3919L34.1888 8.69068V21.3851H28.7985V0.635404H34.1888L44.128 13.3298V0.635404H49.5183V21.3919H44.1212ZM68.5212 21.3919L67.1805 17.7845H59.738L58.3083 21.3919H52.6444L60.4905 0.635404H66.4691L74.2877 21.3919H68.5212ZM63.4729 7.07826L61.2292 13.6783H65.7166L63.4729 7.07826ZM104.954 5.20621V21.3851H99.5634V5.20621H94.5698V0.635404H110.043V5.20621H104.954ZM124.203 21.3919L119.031 13.4255V21.3919H113.641V0.635404H122.055C124.018 0.635404 125.728 1.01118 127.131 2.47329C128.314 3.68944 128.909 5.39752 128.909 7.07826C128.909 8.38323 128.505 9.84534 127.726 10.9043C126.884 12.0522 125.762 12.5851 124.394 12.8925L130.906 21.3851H124.203V21.3919ZM120.057 4.8031H119.031V9.94099H120.057C121.74 9.94099 123.361 9.28509 123.361 7.35838C123.361 5.42484 121.706 4.8031 120.057 4.8031ZM148.227 21.3919L146.886 17.7845H139.443L138.014 21.3919H132.316L140.292 0.635404H146.181L154 21.3919H148.227ZM143.178 7.07826L140.935 13.6783H145.422L143.178 7.07826ZM91.5326 18.3242C90.1782 20.9615 86.9358 22 84.1381 22C81.525 22 78.9051 21.0708 76.764 19.595L79.165 15.2429C80.5194 16.4385 82.1201 17.3814 83.9807 17.3814C85.3009 17.3814 86.5938 16.8143 86.5938 15.3043C86.5938 11.6559 77.6875 14.423 77.6875 7.07143C77.6875 2.82857 80.581 0 84.8016 0C87.1273 0 89.1727 0.498758 91.218 1.5646L89.3847 5.99876C88.345 5.15155 87.1 4.52981 85.7114 4.52981C84.6442 4.52981 83.3856 5.12422 83.3856 6.35403C83.3856 9.4354 92.3193 7.41988 92.3193 14.587C92.3193 15.7826 92.1004 17.2584 91.5326 18.3242Z" fill="white"></path>
                                </svg>
                            </div>
                            <div className="box-border leading-[24px] font-axiforma w-[305px]">
                                <p className="text-white font-[500] text-[20px] h-[80px] my-[30px] w-[305px]">
                                    “With ClickUp we've seen a <strong>40% improvement</strong> in our total go-to-market efficiency!”
                                </p>
                            </div>
                            <a className="items-center flex justify-center bg-[#8832FB] rounded-[14px] decoration-solid text-white gap-[14px] font-[500px] text-[14px] leading-[17px] py-[12px]" rel="" target=""  href="/customers/convene">
                                Read story
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.81429 1.03206L0.839343 7.00701M6.81429 1.03206L2.49982 1.16407M6.81429 1.03206L6.68228 5.34653" stroke="white" stroke-width="1.26748" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>

                    </div>

                    <div className='rounded-[14px] relative shadow-sm shadow-[rgba(74, 20, 140, 0.2) 0px 4px 10px 0px] h-[560px] w-[385px]'>
                        <div className='h-auto w-auto z-[2] hidden box-border'></div>
                        <img src="https://clickup.com/assets/home-test/convene.png" alt="Convene" className="w-[385px] h-[443px] leading-[24px] font-axiforma size-[443px] aspect-auto" />
                        <div className="comp-bg">
                            <div className="box-border comp-bg-svg leading-[24px] font-axiforma w-[inherit]">
                                <svg width="145" height="26" viewBox="0 0 145 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.2849 16.2406C19.1467 19.7636 17.1544 22.8215 11.9909 23.0237C4.3081 23.0237 1.9707 16.6458 1.9707 13.2231C1.9707 4.41564 9.06483 2.2887 11.9105 2.2887C15.1418 2.2887 19.7158 3.76781 19.7158 7.57392C19.7158 8.91003 18.8618 10.2064 17.4799 10.2064C16.1387 10.2064 15.1418 9.31592 15.1418 7.87797C15.1418 5.9547 16.7274 5.69109 16.7274 5.16459C16.7274 3.82847 13.5975 3.28175 12.4999 3.28175C7.72285 3.28175 6.48238 6.74408 6.48238 13.2239C6.48238 16.2001 7.23493 18.4679 7.51913 19.1562C8.27168 20.7964 9.79563 21.8291 12.3774 21.9707C15.2846 22.1332 18.049 19.804 19.2482 16.2406H20.2849ZM26.4257 12.6367C26.4257 16.7873 26.467 22.0321 31.4876 22.0321C36.5083 22.0321 36.5481 16.7873 36.5481 12.636C36.5481 8.52653 36.5083 3.28175 31.4876 3.28175C26.467 3.28175 26.4257 8.52581 26.4257 12.6367ZM41.0816 12.6367C41.0816 18.6297 36.7113 23.0237 31.5079 23.0237C26.3039 23.0237 21.914 18.6095 21.914 12.6367C21.914 6.6632 26.2836 2.28942 31.4876 2.28942C36.691 2.28942 41.0816 6.64297 41.0816 12.6367ZM44.5978 3.92886H41.874V2.79497H42.9107C43.846 2.81592 44.7602 2.77547 45.6947 2.69386C46.63 2.63392 47.5652 2.49164 48.4802 2.28942V7.53347H48.5817C49.9635 4.41564 51.8949 2.28942 55.5127 2.28942C57.302 2.28942 61.428 2.69386 61.428 7.22942V21.2218H64.1105V22.3556H54.9646V21.2218H57.5456V7.85775C57.5456 4.25386 56.4073 3.70642 54.4158 3.70642C51.0416 3.70642 48.4606 8.30336 48.4606 12.0084V21.2015H51.1431V22.3354H41.874V21.2015H44.5978V3.92886ZM75.8395 2.7957V3.92959H78.8678L73.8472 18.1241H73.7457L68.9281 3.92886H71.5707V2.79497H62.6271V3.92886H65.0051L71.6519 23.023H73.3593L80.2091 3.92886H82.5878V2.79497H75.8395V2.7957ZM95.9401 9.6597V7.97909C95.9401 4.41564 93.8463 3.28175 91.3668 3.28175C88.3784 3.28175 87.0371 6.05509 86.9356 6.39959C86.6304 7.45259 86.4477 8.56625 86.4477 9.6597H95.9401ZM100.412 16.2406C99.4158 20.8368 96.0416 23.0237 91.6713 23.0237C86.6101 23.0237 81.7316 18.9742 81.7316 13.4665C81.7316 7.63531 85.614 2.28942 91.5089 2.28942C96.5702 2.28942 100.392 5.71131 100.453 11.0976H86.3868V13.122C86.3868 18.0223 87.0371 21.9707 92.4442 21.9707C95.2695 21.9707 98.6031 19.5007 99.294 16.2406H100.412ZM104.235 3.92886H101.511V2.79497H102.547C103.482 2.81592 104.397 2.77547 105.332 2.69386C106.267 2.63392 107.202 2.49164 108.117 2.28942V7.53347H108.219C109.601 4.41564 111.532 2.28942 115.17 2.28942C116.959 2.28942 121.085 2.69386 121.085 7.22942V21.2218H123.769V22.3556H114.621V21.2218H117.203V7.85775C117.203 4.25386 116.065 3.70642 114.072 3.70642C110.698 3.70642 108.117 8.30336 108.117 12.0084V21.2015H110.8V22.3354H101.511V21.2015H104.235V3.92886ZM138.465 9.6597V7.97909C138.465 4.41564 136.372 3.28175 133.892 3.28175C130.904 3.28175 129.562 6.05509 129.481 6.39959C129.176 7.45259 128.993 8.56625 128.993 9.6597H138.465ZM142.937 16.2406C141.941 20.8368 138.567 23.0237 134.197 23.0237C129.136 23.0237 124.277 18.9742 124.277 13.4665C124.277 7.63531 128.14 2.28942 134.055 2.28942C139.116 2.28942 142.937 5.71131 142.998 11.0976H128.932V13.122C128.932 18.0223 129.582 21.9707 134.989 21.9707C137.815 21.9707 141.148 19.5007 141.839 16.2406H142.937Z" fill="white"></path>
                                </svg>
                            </div>
                            <div className="box-border leading-[24px] font-axiforma w-[305px]">
                                <p className="text-white font-[500] text-[20px] h-[80px] my-[30px] w-[305px]">“ClickUp is how our teams <strong>centralize work</strong>, stay on track, and easily collaborate.”</p>
                            </div>
                            <a className="items-center flex justify-center bg-[#8832FB] rounded-[14px] decoration-solid text-white gap-[14px] font-[500px] text-[14px] leading-[17px] py-[12px]" rel="" target=""  href="/customers/convene">
                                Read story
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.81429 1.03206L0.839343 7.00701M6.81429 1.03206L2.49982 1.16407M6.81429 1.03206L6.68228 5.34653" stroke="white" stroke-width="1.26748" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>

                    </div>

                    <div className='rounded-[14px] relative shadow-sm shadow-[rgba(74, 20, 140, 0.2) 0px 4px 10px 0px] h-[560px] w-[385px]'>
                        <div className='h-auto w-auto z-[2] hidden box-border'></div>
                        <img src="https://clickup.com/assets/home-test/pressed.png" alt="Pressed" className="w-[385px] h-[443px] leading-[24px] font-axiforma size-[443px] aspect-auto" />
                        <div className="comp-bg">
                            <div className="box-border comp-bg-svg leading-[24px] font-axiforma w-[inherit] invert">
                                <svg width="110" height="30" viewBox="0 0 110 30" fill="none">
                                    <image width="110" height="30" href="data:image/png;base64,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"></image>
                                </svg>
                            </div>
                            <div className="box-border leading-[24px] font-axiforma w-[305px]">
                                <p className="text-white font-[500] text-[20px] h-[80px] my-[30px] w-[305px]">
                                    “ClickUp has helped us <strong>3x our productivity</strong> without having to scale our team.”</p>
                            </div>
                            <a className="items-center flex justify-center bg-[#8832FB] rounded-[14px] decoration-solid text-white gap-[14px] font-[500px] text-[14px] leading-[17px] py-[12px]" rel="" target=""  href="/customers/convene">
                                Read story
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.81429 1.03206L0.839343 7.00701M6.81429 1.03206L2.49982 1.16407M6.81429 1.03206L6.68228 5.34653" stroke="white" stroke-width="1.26748" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>

                    </div>

                </div>

                <div>
                   <div className='flex gap-2 items-center justify-center my-16'>
                       <span className='font-axiforma text-[16px] font-[800] leading-[25px] text-[#24223e]'>95% of users increased their productivity after switching to ClickUp.</span>
                       <button className='bg-[#f1f1f9] box-border w-[95px] h-[30px] px-[11px] py-[8px] text-[14px] flex items-center justify-center text-[#24223e] font-[700] rounded-[9px]'>Join them</button>
                   </div>
                    <img src={LikeUs} className='overflow-clip max-container' />
                </div>
            </div>
        </div>
    )
}