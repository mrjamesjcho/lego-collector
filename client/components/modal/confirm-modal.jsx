import React from 'react';

export default function ConfirmModal(props) {
  return (
    <div className="modalBackground d-flex justify-content-center align-items-center fixed-top h-100 w-100">
      {props.children}
    </div>
  );
}
