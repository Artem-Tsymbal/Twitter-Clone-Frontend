import React from 'react';
import './ModalWindow.scss';
import { CgClose } from 'react-icons/cg';

interface IModalWindowProps {
  children?: React.ReactNode
}

const ModalWindow: React.FC<IModalWindowProps> = ({ children }: IModalWindowProps) => {
  return (
    <div className="modal-window__wrapper">
      <div className="modal-window">
        <div className="modal-window__header">
          <div className="modal-window__close-wrapper">
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
