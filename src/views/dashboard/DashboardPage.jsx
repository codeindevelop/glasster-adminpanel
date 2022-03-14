import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

export default function DashboardPage() {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>
          <FormattedMessage id='MENU.DASHBOARD' />
        </h1>
      </div>
    </>
  );
}
