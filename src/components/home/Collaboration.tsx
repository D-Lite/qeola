import CollaborateImage from '../../assets/images/collaborate.png'
import CollaborateCalloutImage from '../../assets/images/collaborate-callout.png'

export default function HomeCollaboration() {
    return (
        <div className="flex w-[100vw] h-full pb-72 overflow-hidden justify-between items-center">
            <div className=' w-1/5'></div>
            <div className='flex items-start h-[inherit] justify-center mt-36 w-2/5 flex-col gap-[10px]'>
                <p className=' text-[40px] font-[900] leading-[90px] w-[700px] text-black text-left bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    Improve collaboration
                </p>
                <p className="text-[16px] text-left  font-axiforma font-[500] leading-[30px] w-[500px] text-black">
                    <strong>Get your teams working together more closely, even if they’re far apart.</strong> Centralize project-related communications in one place, brainstorm ideas with Whiteboards, and draft plans together with collaborative Docs.
                </p>

                <ul className="flex gap-[5px]">
                    <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Comments</li>
                    <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Docs</li>
                    <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Whiteboards</li>
                    <li className='items-center rounded-[8px] border-[#ceceea] border box-border shadow-sm text-[#888] tracking-widest flex text-[16px] px-3 font-medium'>Clips</li>
                </ul>

                <div>
                    <p className='text-[#B2ADD1] bg-cover bg-fixed tracking-wider text-[50px] font-[800] leading-[90px] w-[700px] text-left hover:bg-clip-text hover:text-transparent hover:bg-backgroundGradient'>
                        Enhance visibility
                    </p>
                    <p className='text-[#B2ADD1] tracking-wider text-[50px] font-[800] leading-[90px] w-[700px] text-left hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500'>
                        Automate work
                    </p>
                </div>
            </div>
            <div className='relative w-2/5 bg-cover p-7  h-[inherit] rounded-[15px]'
                 style={{
                     backgroundSize: "cover",
                     backgroundAttachment: "fixed",
                     backgroundImage: `url('https://clickup.com/assets/home-test/text-bg/all-teams-love-clickup-desktop.svg')`,
                 }}
            >
                <img src={CollaborateImage} className='absolute min-w-[860px] overflow-clip'/>
                <img src={CollaborateCalloutImage} className='relative top-36 w-[350px] h-[380px] -left-36' />
            </div>

        </div>
    )
}