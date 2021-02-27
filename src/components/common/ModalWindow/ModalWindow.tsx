import React from 'react';
import './ModalWindow.scss';
import { CgClose } from 'react-icons/cg';

interface IModalWindowProps {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

const ModalWindow: React.FC<IModalWindowProps> = ({
  children,
  visible,
  onClose,
}: IModalWindowProps) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="modal-window__wrapper">
      <div className="modal-window">
        <div className="modal-window__header">
          <div className="modal-window__close-wrapper" onClick={onClose}>
            <CgClose className="modal-window__close-icon" />
          </div>
        </div>
        <div className="modal-window__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
