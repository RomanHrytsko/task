import React from 'react'


const ModalWindow = ({open, close, children}) => {
    return (
        <div className={open ? 'modal-window' : 'modal-window active'} onClick={() => close()}>
            <div className="modal-window-content" onClick={(e) => e.stopPropagation()}>
                {children}

            </div>
        </div>
    )
}
export default ModalWindow;