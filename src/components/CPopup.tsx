import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';

const CPopup = ({
  show = false,
  handleClose = () => {},
  position = 'bottom',
  children = <></>,
}: {
  show?: boolean;
  position?: 'bottom' | 'top' | 'left' | 'right' | 'middle';
  handleClose?: () => void;
  children?: React.JSX.Element;
}) => {
  let justifyContent: 'center' | 'flex-start' | 'flex-end' = 'center';
  let alignItems: 'center' | 'flex-start' | 'flex-end' = 'center';
  switch (position) {
    case 'bottom':
      justifyContent = 'flex-end';
      break;
    case 'top':
      justifyContent = 'flex-start';
      break;
    case 'left':
      alignItems = 'flex-start';
      break;
    case 'right':
      alignItems = 'flex-end';
      break;
    default:
      break;
  }

  return (
    <Modal
      animationType={position === 'middle' ? 'fade' : 'slide'}
      visible={show}
      transparent
      onRequestClose={handleClose}>
      {/* overlay  */}
      <TouchableOpacity
        onPress={handleClose}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          flex: 1,
          justifyContent,
          alignItems,
        }}>
        {children}
      </TouchableOpacity>
    </Modal>
  );
};

export default CPopup;
