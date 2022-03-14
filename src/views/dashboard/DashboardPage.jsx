import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

export default function DashboardPage() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>
        <FormattedMessage id='MENU.DASHBOARD' />
      </h1>
      <button onClick={(e) => dispatch({ type: 'ASIDE_OPEN' })}>بازکردن</button>
    </>
  );
}
