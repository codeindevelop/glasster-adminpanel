import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import AsideMainMenu from './AsideMainMenu';

export default function AsideMenu() {
  const scrollRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    }, 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <>
      {/* Create Ref For scroll to top after browse menu item */}
      <div ref={scrollRef}>
        <AsideMainMenu />
      </div>
    </>
  );
}
