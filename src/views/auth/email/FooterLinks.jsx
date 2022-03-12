import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

export default function FooterLinks() {
  const dispatch = useDispatch();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Button onClick={(e) => dispatch({ type: 'TERMS_MODAL', payload: true })} variant='text'>
          <FormattedMessage id='AUTH_FOOTER_TERMS_LINK' />
        </Button>

        <Button variant='text'>
          <FormattedMessage id='AUTH_FOOTER_ABOUT_LINK' />
        </Button>
      </div>
    </>
  );
}
