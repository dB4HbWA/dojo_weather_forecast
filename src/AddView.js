import React from 'react';
const AddView = props => (
    <div className='addView card' style={{ width: '700px' }}>
        <div style={{width: '100%'}}>
            <h1>Add a City</h1>
        </div>
        <div>
            <input type="text" placeholder="Enter a city" />
            <button>Add a City</button>
        </div>
    </div>
)

export default AddView