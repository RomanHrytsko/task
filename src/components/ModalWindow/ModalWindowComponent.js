import React from 'react'
import {ReduxForm} from "./Form";


const ModalWindow = ({open, close}) => {

    return (
        <div className={open ? 'modal-window' : 'modal-window active'} onClick={() => close()}>
            <div className="modal-window-content" onClick={(e) => e.stopPropagation()}>
                <h1>Add new Post</h1>
                {/*<div className='inputs-block'>*/}
                {/*    <form action="" onSubmit={(e) => {*/}
                {/*        e.preventDefault()*/}
                {/*    }}>*/}
                {/*        <input type="text" placeholder={'User id'}/>*/}
                {/*        <input type="text" placeholder={'Post number'}/>*/}
                {/*        <input type="text" placeholder={'Title of the post'}/>*/}
                {/*        <input type="text" placeholder={'Main text'}/>*/}
                {/*        <div className='buttons-block'>*/}

                {/*        <button className='addNew-btn' onClick={() => open}>Add</button>*/}
                {/*        <button className='delete-btn' onClick={() => close()}>Close</button>*/}
                {/*        </div>*/}

                {/*    </form>*/}
                {/*</div>*/}
                <div className='inputs-block'>

              <ReduxForm/>
                </div>
            </div>
        </div>
    )
}
export default ModalWindow;