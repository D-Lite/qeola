import Feat1 from '../../assets/images/feat1.png'
import Feat2 from '../../assets/images/feat2.png'
import Feat3 from '../../assets/images/feat3.png'
import Feat4 from '../../assets/images/feat4.png'
import Feat5 from '../../assets/images/feat5.png'
import Feat6 from '../../assets/images/feat6.png'
import Feat7 from '../../assets/images/feat7.png'

export default function HomeFeatures() {
    return (
        <div className="flex flex-col min-h-[70vh] items-center  gap-[30px]">
            <p style={{
                backgroundColor: 'rgb(36, 34, 62)',
                backgroundPosition: '-50px -90px',
                backgroundSize: 'cover',
                color: 'rgb(36, 34, 62)',
                marginBottom: '18px',
                WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
            }} className='block font-[900] text-[70px] leading-[90px] h-[200px] w-[700px] bg-cover box-border text-black text-center bg-clip-text text-transparent bg-[url(https://clickup.com/assets/home-test/text-bg/one-app-to-replace-them-all-desktop.svg)] bg-no-repeat'>
            Everything your <br/> team is looking for
            </p>
            <div>
                <p className="text-[23px] font-axiforma font-normal tracking-wider leading-[35px] text-center text-black">
                    <strong>ClickUp’s exceptional flexibility can handle any type of work.</strong> And <br/>we never stop innovating.
                </p>
            </div>
            <div className='flex flex-col gap-8 mt-10'>
                <div className='flex gap-4'>
                    <img src={Feat1} className='w-1/3' />
                    <img src={Feat2} className='w-1/3' />
                    <img src={Feat3} className='w-1/3' />
                </div>

                <div className='flex gap-4'>
                    <img src={Feat4} className='w-2/3' />
                    <img src={Feat5} className='w-1/3' />
                </div>

                <div className='flex gap-4'>
                    <img src={Feat6} className='w-1/3' />
                    <img src={Feat7} className='w-2/3' />
                </div>
            </div>
        </div>
    )
}