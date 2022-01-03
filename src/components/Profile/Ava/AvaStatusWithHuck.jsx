import ava from './Ava.module.css';
import React, {useEffect, useState} from 'react';

const AvaStatusWithHuck = props => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onChangeStatus = e => {
        let value = e.currentTarget.value;
        setStatus(value);
    }

    const highlightText = e => {
        e.target.select();
    }

    return (
        <div className={ava.status}>
            <div className={ava.statuc__container}>
                { !editMode &&
                    <div className={ava.status__text}>
                        <span onDoubleClick={activateEditMode}>{status}</span>
                    </div>
                }
                { editMode &&
                    <div className={ava.status__input_container}>
                        <input type="text" name="status" 
                            className={ava.status__input} 
                            id={ava.input_status} 
                            value={status} 
                            onChange={onChangeStatus}
                            autoFocus={true}
                            onFocus={highlightText}
                            onBlur={deactivateEditMode}
                            />
                    </div>
                }
            </div>
        </div>
    );
}

export default AvaStatusWithHuck;