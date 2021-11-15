import React from 'react';
import pre_loader from '../../../assets/img/loader.gif';

let Preloader = () => {
    return (
        <div style={ {maxWidth: "200px"} }>
            <img src={pre_loader} style={{width: "100%"}} />
        </div>
    )
}

export default Preloader;