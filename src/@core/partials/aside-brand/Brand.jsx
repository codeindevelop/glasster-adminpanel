import React from 'react';
import SVG from 'react-inlinesvg';
import LogoImg from 'img/logo/logo.svg';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
export default function AsideBrand() {
  const { asideOpen } = useSelector((state) => ({
    asideOpen: state.layout.aside.open,
  }));
  return (
    <>
      <div className={clsx(`flex items-center ${asideOpen === false ? 'hidden' : 'flex'}  `)}>
        {/* Begin Logo */}
        <Link to='/dashboard'>
          <SVG
            src={LogoImg}
            className={clsx(
              `${asideOpen === false ? 'w-[3rem]' : 'flex flex-col items-center'}`
            )}
          />
        </Link>
        {/* End Logo */}
        {/* Begin Brand Texts */}
        <div className={clsx(`${asideOpen === false ? 'hidden' : 'flex flex-col items-center'}`)}>
          <h2 className='font-pop  text-slate-600 dark:text-white text-center'>
            <FormattedMessage id='DASHBOARD_BRAND_GLASSTER_NAME' />
          </h2>
          <h6 className='font-iranyekan font-bold text-sm text-slate-600 dark:text-white text-center'>
            <FormattedMessage id='DASHBOARD_BRAND_GLASSTER_DESC' />
          </h6>
        </div>
        {/* End Brand Texts */}
      </div>
    </>
  );
}
