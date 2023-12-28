import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BannerSecondSection from "./BannerTwo.tsx";
export default function HomeBanner() {
    return (
        <div className="flex flex-col min-h-[70vh] items-center justify-center gap-[30px] mt-[60px]">
            <p className='bg-black text-white text-[12px] p-0 h-[25px] w-[220px] flex items-center justify-center rounded-[20px]'>
                Discover the all-new ClickUp 3.0 <span aria-hidden="true">&rarr;</span>
            </p>
            <p style={{
                backgroundColor: 'rgb(36, 34, 62)',
                backgroundPosition: '-50px -90px',
                backgroundSize: 'cover',
                color: 'rgb(36, 34, 62)',
                marginBottom: '18px',
                WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
            }} className='block font-[900] text-[70px] leading-[90px] h-[170px] w-[700px] bg-cover box-border text-black text-center bg-clip-text text-transparent bg-[url(https://clickup.com/assets/home-test/text-bg/one-app-to-replace-them-all-desktop.svg)] bg-no-repeat'>
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

            <div className="items-center flex justify-center text-[14px] font-[500] h-[70px] w-fit gap-[10px] text-[#7f76b3]">
                <span className="flex items-center box-border">
                    <svg width="85" height="14" viewBox="0 0 85 14" fill="none" xmlns="http://www.w3.org/2000/svg"><title>five stars</title><path d="M14.0833 5.65881C14.1951 5.54786 14.3069 5.40276 14.3069 5.24913C14.3069 4.99307 14.0317 4.89065 13.8254 4.85651L9.50925 4.23344L7.57473 0.349942C7.49735 0.187774 7.35118 0 7.15343 0C6.95568 0 6.80952 0.187774 6.73214 0.349942L4.79761 4.23344L0.481481 4.85651C0.266534 4.89065 0 4.99307 0 5.24913C0 5.40276 0.111772 5.54786 0.214947 5.65881L3.34457 8.68026L2.60516 12.9478C2.60419 12.9546 2.60322 12.9612 2.60227 12.9677C2.59473 13.0192 2.58796 13.0655 2.58796 13.1185C2.58796 13.3405 2.69973 13.5453 2.94907 13.5453C3.06944 13.5453 3.18121 13.5026 3.29299 13.4429L7.15343 11.4286L11.0139 13.4429C11.1171 13.5026 11.2374 13.5453 11.3578 13.5453C11.6071 13.5453 11.7103 13.3405 11.7103 13.1185C11.7103 13.0588 11.7103 13.0076 11.7017 12.9478L10.9623 8.68026L14.0833 5.65881Z" fill="#FFC800"></path><path d="M31.6918 5.65881C31.8035 5.54786 31.9153 5.40276 31.9153 5.24913C31.9153 4.99307 31.6402 4.89065 31.4338 4.85651L27.1177 4.23344L25.1832 0.349942C25.1058 0.187774 24.9596 0 24.7619 0C24.5641 0 24.418 0.187774 24.3406 0.349942L22.4061 4.23344L18.0899 4.85651C17.875 4.89065 17.6085 4.99307 17.6085 5.24913C17.6085 5.40276 17.7202 5.54786 17.8234 5.65881L20.953 8.68026L20.2136 12.9478C20.2126 12.9546 20.2117 12.9612 20.2107 12.9677C20.2032 13.0192 20.1964 13.0655 20.1964 13.1185C20.1964 13.3405 20.3082 13.5453 20.5575 13.5453C20.6779 13.5453 20.7897 13.5026 20.9014 13.4429L24.7619 11.4286L28.6223 13.4429C28.7255 13.5026 28.8459 13.5453 28.9662 13.5453C29.2156 13.5453 29.3188 13.3405 29.3188 13.1185C29.3188 13.0588 29.3188 13.0076 29.3102 12.9478L28.5707 8.68026L31.6918 5.65881Z" fill="#FFC800"></path><path d="M49.3002 5.65881C49.412 5.54786 49.5238 5.40276 49.5238 5.24913C49.5238 4.99307 49.2486 4.89065 49.0423 4.85651L44.7262 4.23344L42.7916 0.349942C42.7143 0.187774 42.5681 0 42.3703 0C42.1726 0 42.0264 0.187774 41.949 0.349942L40.0145 4.23344L35.6984 4.85651C35.4834 4.89065 35.2169 4.99307 35.2169 5.24913C35.2169 5.40276 35.3287 5.54786 35.4319 5.65881L38.5615 8.68026L37.8221 12.9478C37.8211 12.9546 37.8201 12.9612 37.8192 12.9677C37.8116 13.0192 37.8049 13.0655 37.8049 13.1185C37.8049 13.3405 37.9166 13.5453 38.166 13.5453C38.2863 13.5453 38.3981 13.5026 38.5099 13.4429L42.3703 11.4286L46.2308 13.4429C46.334 13.5026 46.4543 13.5453 46.5747 13.5453C46.824 13.5453 46.9272 13.3405 46.9272 13.1185C46.9272 13.0588 46.9272 13.0076 46.9186 12.9478L46.1792 8.68026L49.3002 5.65881Z" fill="#FFC800"></path><path d="M66.9087 5.65881C67.0204 5.54786 67.1322 5.40276 67.1322 5.24913C67.1322 4.99307 66.8571 4.89065 66.6507 4.85651L62.3346 4.23344L60.4001 0.349942C60.3227 0.187774 60.1765 0 59.9788 0C59.781 0 59.6349 0.187774 59.5575 0.349942L57.623 4.23344L53.3068 4.85651C53.0919 4.89065 52.8254 4.99307 52.8254 5.24913C52.8254 5.40276 52.9371 5.54786 53.0403 5.65881L56.1699 8.68026L55.4305 12.9478C55.4295 12.9546 55.4286 12.9612 55.4276 12.9677C55.4201 13.0192 55.4133 13.0655 55.4133 13.1185C55.4133 13.3405 55.5251 13.5453 55.7744 13.5453C55.8948 13.5453 56.0066 13.5026 56.1183 13.4429L59.9788 11.4286L63.8392 13.4429C63.9424 13.5026 64.0628 13.5453 64.1832 13.5453C64.4325 13.5453 64.5357 13.3405 64.5357 13.1185C64.5357 13.0588 64.5357 13.0076 64.5271 12.9478L63.7876 8.68026L66.9087 5.65881Z" fill="#FFC800"></path><path d="M84.5171 5.65881C84.6289 5.54786 84.7407 5.40276 84.7407 5.24913C84.7407 4.99307 84.4655 4.89065 84.2592 4.85651L79.9431 4.23344L78.0085 0.349942C77.9312 0.187774 77.785 0 77.5872 0C77.3895 0 77.2433 0.187774 77.1659 0.349942L75.2314 4.23344L70.9153 4.85651C70.7003 4.89065 70.4338 4.99307 70.4338 5.24913C70.4338 5.40276 70.5456 5.54786 70.6488 5.65881L73.7784 8.68026L73.039 12.9478C73.038 12.9546 73.037 12.9612 73.0361 12.9677C73.0285 13.0192 73.0218 13.0655 73.0218 13.1185C73.0218 13.3405 73.1335 13.5453 73.3829 13.5453C73.5033 13.5453 73.615 13.5026 73.7268 13.4429L77.5872 11.4286L81.4477 13.4429C81.5509 13.5026 81.6712 13.5453 81.7916 13.5453C82.0409 13.5453 82.1441 13.3405 82.1441 13.1185C82.1441 13.0588 82.1441 13.0076 82.1355 12.9478L81.3961 8.68026L84.5171 5.65881Z" fill="#FFC800"></path>
                    </svg>
                </span>
                <span className="items-center flex text-[14px] font-[500] h-[20px] w-[200px] gap-[10px] text-[#7f76b3]">based on 10,000+ reviews from</span>
                <span className="flex items-center box-border h-[25px]">
                    <svg width="81" height="14" viewBox="0 0 81 14" fill="none" xmlns="http://www.w3.org/2000/svg"><title>store reviews</title><path d="M0 4.90052H6.46988H10.3989V1.65088L0 4.90052Z" fill="#FF9D28"></path><path d="M10.3989 1.95727V14.0001L13.6486 0.351562L10.3989 1.95727Z" fill="#68C5ED"></path><path d="M10.3986 4.90137H5.84912L10.3986 14.0004V4.90137Z" fill="#044D80"></path><path d="M0 4.90137L6.49929 6.85115L5.62046 4.90137H0Z" fill="#E54747"></path><path d="M35.003 5.56766L29.1369 5.56766L27.3311 0.352051L25.5146 5.56766L19.6484 5.55767L24.3926 8.78495L22.5762 14.0006L27.3204 10.7733L32.0646 14.0006L30.2588 8.78495L35.003 5.56766Z" fill="#00B67A"></path><path d="M29.8853 9.89396L29.6775 8.88232L28.1792 10.5884L29.8853 9.89396Z" fill="#005128"></path><path d="M50.2345 10.0372C50.7299 10.8969 51.2198 11.7469 51.7093 12.5959C49.5416 14.2555 46.1691 14.4561 43.6725 12.5449C40.7994 10.3439 40.3272 6.58826 41.8654 3.88481C43.6345 0.775258 46.9452 0.0875627 49.0768 0.591824C49.0191 0.71706 47.7425 3.36563 47.7425 3.36563C47.7425 3.36563 47.6415 3.37226 47.5844 3.37336C46.9544 3.40007 46.4851 3.54667 45.9821 3.80672C45.4303 4.09467 44.9574 4.5134 44.6048 5.02631C44.2521 5.53922 44.0305 6.13069 43.9592 6.74904C43.8848 7.37613 43.9716 8.01183 44.2112 8.59609C44.4137 9.09004 44.7003 9.52873 45.0845 9.8991C45.6738 10.4678 46.3752 10.82 47.1881 10.9365C47.9579 11.047 48.6983 10.9376 49.3921 10.589C49.6523 10.4584 49.8737 10.3142 50.1324 10.1164C50.1654 10.0951 50.1947 10.068 50.2345 10.0372Z" fill="#FF492C"></path><path d="M50.2393 2.49713C50.1135 2.37337 49.9969 2.25918 49.8809 2.14426C49.8117 2.07575 49.745 2.00447 49.6741 1.93762C49.6487 1.91349 49.6188 1.88053 49.6188 1.88053C49.6188 1.88053 49.643 1.82933 49.6533 1.80833C49.789 1.53594 50.0017 1.33685 50.254 1.17847C50.5331 1.00199 50.8581 0.9122 51.1882 0.920442C51.6105 0.92873 52.0031 1.03389 52.3344 1.31715C52.579 1.52618 52.7044 1.79139 52.7265 2.10798C52.7634 2.64208 52.5424 3.05112 52.1035 3.33658C51.8456 3.50455 51.5675 3.63439 51.2887 3.78817C51.1349 3.87308 51.0034 3.94766 50.8531 4.10126C50.7209 4.25542 50.7145 4.40073 50.7145 4.40073L52.7122 4.39815V5.28788H49.6286V5.20187C49.6168 4.76465 49.6678 4.35321 49.868 3.95614C50.0522 3.59185 50.3384 3.32517 50.6822 3.11982C50.9471 2.96161 51.2259 2.82698 51.4913 2.66952C51.655 2.57246 51.7707 2.43009 51.7698 2.22364C51.7698 2.04647 51.6408 1.889 51.4567 1.83983C51.0224 1.72269 50.5804 1.90963 50.3505 2.30707C50.317 2.36508 50.2828 2.42273 50.2393 2.49713ZM54.1034 9.0912L52.4199 6.18387H49.0884L47.394 9.12122H50.75L52.4061 12.0147L54.1034 9.0912Z" fill="#FF492C"></path><path d="M80.151 6.78327L74.7587 1.39104C74.5723 1.21796 74.2927 1.21796 74.1197 1.39104L73.0545 2.45617L77.3816 6.78327C77.5547 6.95635 77.5547 7.24927 77.3816 7.42235L72.9214 11.8826L73.9865 12.9477C74.1729 13.1208 74.4525 13.1208 74.6256 12.9477L80.1376 7.43566C80.324 7.24926 80.324 6.96967 80.151 6.78327Z" fill="#009C9C"></path><path d="M70.9648 1.79229L70.5787 1.40618C70.3923 1.2331 70.1127 1.2331 69.9396 1.40618L68.8745 2.47131L69.5802 3.17696L70.9648 4.56163L72.3495 3.17696L70.9648 1.79229Z" fill="#40E3E3"></path><path d="M70.8447 9.80566L69.46 11.1903L68.7544 11.896L69.8195 12.9611C70.0059 13.1342 70.2855 13.1342 70.4586 12.9611L70.8447 12.575L72.2294 11.1903L70.8447 9.80566Z" fill="#40E3E3"></path><path d="M73.2146 6.7855C73.3877 6.9719 73.3877 7.2515 73.2146 7.42459L70.8447 9.7945L72.2294 11.1792L75.984 7.42459C76.1571 7.2515 76.1571 6.95859 75.984 6.7855L72.3625 3.16406L70.9646 4.54873L73.2146 6.7855Z" fill="#1ABAB8"></path><path d="M64.414 6.91641L68.1686 3.16183L66.7839 1.77715L66.3845 1.39104C66.1981 1.21796 65.9185 1.21796 65.7454 1.39104L60.2333 6.91641C60.0602 7.08949 60.0602 7.38241 60.2333 7.55549L65.6256 12.9477C65.812 13.1208 66.0915 13.1208 66.2646 12.9477L66.6641 12.5616L68.0487 11.1769L64.4273 7.55549C64.2409 7.38241 64.2409 7.10281 64.414 6.91641Z" fill="#87F0F0"></path><path d="M68.5945 6.9151L70.2455 5.26415L68.8608 3.87948L68.1551 3.17383L64.4272 6.92842C64.2541 7.1015 64.2541 7.39441 64.4272 7.56749L68.0353 11.1756L68.741 10.47L70.1256 9.08531L68.5945 7.55418C68.4214 7.39441 68.4214 7.1015 68.5945 6.9151Z" fill="#40E3E3"></path><path d="M68.5944 7.55517L70.1256 9.08629L71.7765 7.43534C71.9496 7.26226 71.9496 6.96935 71.7765 6.79626L70.2454 5.26514L68.5944 6.91609C68.4347 7.10249 68.4347 7.38209 68.5944 7.55517Z" fill="#17CFCF"></path>
                </svg>
                </span>
            </div>

            <BannerSecondSection />
        </div>
    )
}