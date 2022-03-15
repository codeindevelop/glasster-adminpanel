import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import ShortcutsWidget from '../../widgets/shortcuts/ShortcutsWidget';

export default function DashboardPage() {
  const dispatch = useDispatch();
  return (
    <>
      <div className='grid md:grid-cols-3 sm:grid-cols-1'>
        <ShortcutsWidget />
      </div>
    </>
  );
}
