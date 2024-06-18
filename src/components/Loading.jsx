import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div className='loading'>
            <h1>Procurando</h1>
            <div className='spinner'></div>
            {/* <svg className="spinner" height="64px" width="64px">
                <circle className="path" cx="32" cy="32" fill="none" r="28" strokeWidth="8"></circle>
            </svg> */}
        </div>
    )
}

export default Loading