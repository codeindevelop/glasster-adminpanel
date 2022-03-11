import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export default function TermsModal() {
    const dispatch = useDispatch();
    const [TermsModalOpen, setTermsModalOpen] = useState(false);
  
    const { termsModal } = useSelector(
      ({ auth }) => ({
        termsModal: auth.register.termsModal,
      }),
      shallowEqual
    );

    const handleOpenTermsModal = () => dispatch({ type: 'TERMS_MODAL', payload: true });
    const handleCloseTermsModal = () =>
      dispatch({ type: 'TERMS_MODAL', payload: false });

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
        open={termsModal}
        onClose={handleCloseTermsModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='flex p-5'>
            <h2>شرایط و قوانین</h2>
          </div>
        </Box>
      </Modal>
    </>
  );
}
