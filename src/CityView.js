import React from 'react';
const HomeView = props => (

  <div className='cityView card' style={{ width: '700px' }}>

    <div className='row'>
      <div className="cityView" style={{ width: '100%' }}>
        <h1>San Jose, CA</h1>

        <div class="small-6 large-5 columns">
          <div>Humidity:</div>
          <div>Temperature (High):</div>
          <div>Temperature (Low):</div>
          <div>Status Scattered Clouds</div>
          <div>checkbox fahrenheit</div>
        </div>
        <div class="small-6 large-7 columns">
          Image
        </div>
      </div>
    </div>
  </div>
)

export default HomeView