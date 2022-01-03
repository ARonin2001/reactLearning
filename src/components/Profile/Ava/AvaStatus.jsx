import ava from './Ava.module.css';
import React from 'react';

class AvaStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });

    }
    
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onChangeStatus = e => {
        let value = e.currentTarget.value;
        this.setState({
            status: value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render()  {
        return (
            <div className={ava.status}>
                <div className={ava.statuc__container}>
                    {
                        !this.state.editMode && 
                            <div className={ava.status__text}>
                                <span onDoubleClick={this.activateEditMode} >{this.state.status}</span>
                            </div>
                    }

                    {
                        this.state.editMode &&
                            <div className={ava.status__input_container}>
                                <input type="text" name="status" 
                                    className={ava.status__input} 
                                    id={ava.input_status} 
                                    value={this.state.status} 
                                    autoFocus={true}
                                    onBlur={this.deactivateEditMode } 
                                    onChange={this.onChangeStatus} />
                            </div>
                    }
                    
                </div>
            </div>
        );
    }
}

export default AvaStatus;