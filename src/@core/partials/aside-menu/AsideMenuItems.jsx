import React from 'react';
import { Link } from 'react-router-dom';

export default function AsideMenuItems() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to='/dashboard'>
                    <span>داشبود</span>
                </Link>
            </li>
        </ul>
    </nav>
    </>
  );
}
