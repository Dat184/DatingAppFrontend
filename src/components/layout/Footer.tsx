import IconInsta from '../../assets/img/Icon_Insta.png'
import IconFB from '../../assets/img/Icon_Fb.png'
import IconTiktok from '../../assets/img/Icon_Tiktok.png'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-[#815C80] py-16 px-3 gap-5">
      <div
        className="flex flex-col items-center justify-center text-center text-white gap-2"
      >
        <h1 className='text-[30px]'>PERFECTDATE</h1>
        <p>02 Võ Oanh, Bình Thạnh, TP.HCM</p>
        <p>0967 028 117</p>
      </div>
      <div className="flex items-center gap-16">
        <img src={IconInsta} alt="" className='w-10'/>
        <img src={IconFB} alt="" className='w-10'/>
        <img src={IconTiktok} alt="" className='w-10'/>
      </div>
    </footer>
  )
}

export default Footer