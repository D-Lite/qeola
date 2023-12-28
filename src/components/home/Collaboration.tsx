import CollaborateImage from '../../assets/images/collaborate.png'
import CollaborateCalloutImage from '../../assets/images/collaborate-callout.png'
import {useState} from "react";

export default function HomeCollaboration() {
    const [selectedTab, setSelectedTab] = useState(1);

    return (
        <div className="flex flex-col items-center">
            <div className="box-border flex justify-center flex-col items-center h-[100px] pb-60 ">
                <div className="items-start box-border flex flex-col text-center text-[40px] font-[800] text-[#292d34]">
                    <h2 className="paragraph-header">Save time and <br /> get more done</h2>
                </div>
                <p className="text-[#292d34] block box-border font-[400] text-[14px] text-center paragraph font-axiforma">
                    Supercharge productivity. Streamline work by doing it, and seeing it, in one place.
                </p>
            </div>


            <div className="flex w-[100vw] h-full pb-72 overflow-hidden justify-center max-container items-center">

                <div className=''>
                    <div className='flex items-start h-[inherit] justify-center mt-36  flex-col gap-[10px]'>
                        <p onClick={() => setSelectedTab(1)} className={` ${selectedTab === 1 ? 'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500' : 'text-[#B2ADD1]'} cursor-pointer text-[40px] font-[900] leading-[90px] w-[700px] text-left hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500`}>
                            Improve collaboration
                        </p>
                        <p className={`${selectedTab === 1 ? 'block' : 'hidden'} text-[16px] text-left  font-axiforma font-[500] leading-[30px] w-[500px] text-black`}>
                            <strong>Get your teams working together more closely, even if they’re far apart.</strong> Centralize project-related communications in one place, brainstorm ideas with Whiteboards, and draft plans together with collaborative Docs.
                        </p>

                        <ul className={`${selectedTab === 1 ? 'block' : 'hidden'} flex gap-[5px]`}>
                            <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Comments</li>
                            <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Docs</li>
                            <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Whiteboards</li>
                            <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Clips</li>
                        </ul>
                    </div>

                    <div className=''>
                        <p onClick={() => setSelectedTab(2)} className={`cursor-pointer ${selectedTab === 2 ? 'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500' : 'text-[#B2ADD1]'} text-[40px] font-[900] leading-[90px] w-[700px] text-left hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500`}>
                            Enhance visibility
                        </p>
                        <p className={`${selectedTab === 2 ? 'block' : 'hidden'} text-[16px] text-left  font-axiforma font-[500] leading-[30px] w-[500px] text-black`}>
                            <strong>Ditch the needless meetings and repetitive updates.</strong> With a single source of truth for all ongoing projects across your entire org, you get a crystal-clear view of what's happening (or not), and who's responsible.
                        </p>

                        <ul className={`${selectedTab === 2 ? 'block' : 'hidden'} flex gap-[5px]`}>
                            <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Views</li>
                            <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Dashboards</li>
                            <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Reports</li>
                            <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Goals</li>
                        </ul>
                    </div>

                    <div className=''>
                        <p onClick={() => setSelectedTab(3)} className={` cursor-pointer ${selectedTab === 3 ? 'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500' : 'text-[#B2ADD1]'} text-[40px] font-[900] leading-[90px] w-[700px] text-left hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500`}>
                            Automate work
                        </p>
                        <p className={`${selectedTab === 3 ? 'block' : 'hidden'} text-[16px] text-left  font-axiforma font-[500] leading-[30px] w-[500px] text-black`}>
                            <strong>Streamline business processes without breaking a sweat.</strong> Whether it's onboarding employees, handling IT requests, or managing expense reimbursements, you can automate it all with powerful no-code Automations.
                        </p>

                        <ul className={`${selectedTab === 3 ? 'block' : 'hidden'} flex gap-[5px]`}>
                            <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Automations</li>
                            <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Forms</li>
                            <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Task Templates</li>
                            <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Custom Fields</li>
                        </ul>
                    </div>
                </div>

                <div className='relative  p-7 h-[inherit] rounded-[15px]'
                     style={{
                         backgroundSize: "auto",
                         backgroundAttachment: "fixed",
                         backgroundImage: 'linear-gradient(247deg, rgb(250, 18, 227) 17.39%, rgb(118, 18, 250) 64.22%, rgb(18, 208, 250) 97.73%)',
                         backgroundClip: "border-box",
                         backgroundRepeat: "repeat",
                         blockSize: "auto",
                         boxShadow: "rgba(67, 46, 134, 0.1) 0px 3px 20px 0px",
                         display: "block",
                         inlineSize: "840px",
                         overflow: "hidden",
                         height: '600px',
                     }}
                >
                    <img src={CollaborateImage} className='absolute min-w-[860px] overflow-clip'/>
                    <img src={CollaborateCalloutImage} className='relative top-36 w-[350px] h-[380px] -left-36' />
                </div>

            </div>
        </div>
    )
}