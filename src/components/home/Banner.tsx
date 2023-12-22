export default function HomeBanner() {
    return (
        <div className="flex flex-col min-h-[70vh] items-center justify-center gap-[30px]">
            <p className='bg-black text-white text-[12px] p-0 h-[25px] w-[220px] flex items-center justify-center rounded-[20px]'>
                Discover the all-new ClickUp 3.0 <span aria-hidden="true">&rarr;</span>
            </p>
            <p className=' text-[70px] font-[900] leading-[90px] w-[700px] text-black text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                One app to <br/> replace them all
            </p>
            <div>
                <p className="text-[23px] font-axiforma font-[800] tracking-wider leading-[35px] text-center text-black">
                    Get everyone working in a single platform
                </p>
                <p className="text-[23px] font-axiforma tracking-wider box-border font-[400] leading-[35px] text-center text-black">
                    designed to manage any type of work.
                </p>
            </div>
            <button className='box-border font-axiforma cursor-default text-white bg-gradient-to-r from-pink-500 to-violet-500 w-[420px] rounded-[12px] h-[65px] text-[24px] font-[700]'>
                Get Started. It's FREE <span aria-hidden="true">&rarr;</span>
            </button>

        </div>
    )
}