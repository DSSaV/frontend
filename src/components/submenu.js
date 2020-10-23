import React from 'react';
import '../interface/css/submenu.scss';

export default ({ pipeline, dispatch }) => { return (
    <div id={ 'submenu' }>
        <li>Config</li>
        <li onClick={() => { dispatch({
            type: 'prompt',
            payload: {
                type: 'import',
                header: 'predict using pipeline',
                other: {
                    api: 'use',
                    pipeline: pipeline
                }
            }
        }) }}>Predict</li>
    </div>
)}