import * as React from 'react';
import Stack from '@mui/material/Stack';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

export default function Button({ disabled, children, className }) {
  const CustomButtonRoot = styled('button')`
    padding: 12px 24px;

    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: #1895db;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const CustomButton = (props) => {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
  };

  return (
    <CustomButton className={className} disabled={disabled}>
      {children}
    </CustomButton>
  );
}
