import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function PostStatusToaster() {
  const [openToaster, setOpenToaster] = React.useState(false);
  // Load Status Form Redux Store
  const { postStoreSucc } = useSelector(
    (state) => ({
      postStoreSucc: state.post.post.postStoreSucc,
    }),
    shallowEqual
  );

  const handleClose = (event, reason) => {
    setOpenToaster(false);
  };

  useEffect(() => {
    if (postStoreSucc === true) {
      setOpenToaster(true);
    }
  }, [postStoreSucc]);

  return (
    <>
      <Snackbar
      
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={openToaster}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          مقاله با موفقیت در سامانه ذخیره گردید
        </Alert>
      </Snackbar>
    </>
  );
}
