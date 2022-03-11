import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export default function HelpMobileRegisterModal() {
  const dispatch = useDispatch();
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  const { helpRegisterMobileModal } = useSelector(
    ({ auth }) => ({
      helpRegisterMobileModal: auth.register.helpRegisterMobileModal,
    }),
    shallowEqual
  );

  const handleOpenHelpModal = () => dispatch({ type: 'HELP_REGISTER_MOBILE_MODAL', payload: true });
  const handleCloseHelpModal = () =>
    dispatch({ type: 'HELP_REGISTER_MOBILE_MODAL', payload: false });

  const style = {
    position: 'absolute',
    borderRadius: '10px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
  };
  return (
    <>
      <Modal
        open={helpRegisterMobileModal}
        onClose={handleCloseHelpModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='flex p-5'>
            <h2>راهنمای ثبت شماره همراه</h2>
          </div>
        </Box>
      </Modal>
    </>
  );
}
