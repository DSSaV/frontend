import React from 'react';
import '../interface/css/submenu.scss';

export default ({ pipeline, config, dispatch }) => { return (
    <div id={ 'submenu' }>
        <li onClick={() => { dispatch({
            type: 'prompt',
            payload: {
                type: 'viewer',
                header: 'pipeline config',
                other: {
                    data: config
                }
            }
        }) }}>Config</li>
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