import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function MainLayout({ children }) {
  const { dir } = useSelector((state) => ({
    dir: state.layout.config.direction,
  }));

  useEffect(() => {
    document.title = 'Glasster';
    if (dir === 'rtl') {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    }
  }, [dir]);

  return (
    <>
      <div>{children}</div>
    </>
  );
}
