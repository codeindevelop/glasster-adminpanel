import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

export default function FooterLinks() {
  const dispatch = useDispatch();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Button onClick={(e) => dispatch({ type: 'TERMS_MODAL', payload: true })} variant='text'>
          شرایط و قوانین
        </Button>

        <Button variant='text'>درباره ما</Button>
      </div>
    </>
  );
}
