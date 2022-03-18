import SVG from 'react-inlinesvg';
import { FormattedMessage } from 'react-intl';
import Logo from 'img/logo/logo.svg';
export function FallbackView() {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          left: '0',
          right: '0',
          top: '0',
          margin: '0 auto',
        }}
        className=' flex items-center justify-center'
      >
        <div className=' w-full flex flex-col  justify-center 	 items-center  '>
          <SVG src={Logo} alt='Start logo' />
          <h5 className='font-pop text-slate-500 dark:text-white text-lg text-center mt-2 '>
            <FormattedMessage id='GLASSTER_LOADING_TEXT' />
          </h5>
          <h6 className='font-bold text-slate-700 dark:text-white my-2'>
            <FormattedMessage id='LOADING_TEXT' />
          </h6>
        </div>
      </div>
    </>
  );
}
