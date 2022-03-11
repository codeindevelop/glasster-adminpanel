import SVG from 'react-inlinesvg';
import Logo from '../../assets/img/logo/logo.svg';
export function FallbackView() {
  return (
    <>
      <div className=''>
        <div className=' w-full flex flex-col absolute justify-center h-screen	 items-center  z-10'>
          <SVG src={Logo} alt='Start logo' />
          <h5 className='font-pop text-slate-500 text-lg text-center mt-2 '>Glasster Website Manager</h5>
          <h6 className='font-bold text-slate-700 my-2'>در حال بارگذاری ...</h6>
        </div>
      </div>
    </>
  );
}
