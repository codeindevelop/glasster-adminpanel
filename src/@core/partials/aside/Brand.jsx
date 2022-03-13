import React from 'react';
import SVG from 'react-inlinesvg';
import LogoImg from 'img/logo/logo.svg';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
export default function AsideBrand() {
  return (
    <>
      <div className='flex items-center gap-1'>
        {/* Begin Logo */}
        <Link to='/dashboard'>
          <SVG src={LogoImg} />
        </Link>
        {/* End Logo */}
        {/* Begin Brand Texts */}
        <div className='flex flex-col items-center'>
          <h2 className='font-pop-bold text-slate-600 text-center'>
            <FormattedMessage id='DASHBOARD_BRAND_GLASSTER_NAME' />
          </h2>
          <h6 className='font-iranyekan font-bold text-sm text-slate-600 text-center'>
            <FormattedMessage id='DASHBOARD_BRAND_GLASSTER_DESC' />
          </h6>
        </div>
        {/* End Brand Texts */}
      </div>
    </>
  );
}
