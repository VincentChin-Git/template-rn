import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CModal = ({
  show = false,
  showConfirm = true,
  showCancel = true,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  children = <></>,
  handleConfirm = () => {
    console.log('confirm');
  },
  handleCancel = () => {
    console.log('cancel');
  },
}: {
  show?: boolean;
  showConfirm?: boolean;
  showCancel?: boolean;
  confirmText?: string;
  cancelText?: string;
  children?: React.JSX.Element;
  handleConfirm?: () => void;
  handleCancel?: () => void;
}) => {
  // TODO: setup background color
  const backgroundColor = '#FFFFFF';

  const { modalButton } = styles;

  return (
    <Modal animationType="slide" transparent={true} visible={show}>
      <TouchableOpacity onPress={handleCancel}>
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 15,
              borderRadius: 5,
              minWidth: '80%',
            }}>
            <View style={{ paddingBottom: showCancel && showConfirm ? 15 : 0 }}>
              {children}
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                columnGap: 15,
              }}>
              {/* 取消 */}
              {showCancel && (
                <Text
                  style={{
                    ...modalButton,
                    backgroundColor: '#f1f1f1',
                    color: '#666',
                  }}
                  onPress={handleCancel}>
                  {cancelText}
                </Text>
              )}

              {/* 确定 */}
              {showConfirm && (
                <Text
                  style={{
                    ...modalButton,
                    backgroundColor,
                    color: '#fff',
                  }}
                  onPress={handleConfirm}>
                  {confirmText}
                </Text>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalButton: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
    maxWidth: '50%',
  },
});

export default CModal;
