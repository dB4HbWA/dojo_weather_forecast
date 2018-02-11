import React, { Component } from 'react';
class AddView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityText: ""
        }
        this.handleChangingCityText = this.handleChangingCityText.bind(this)
    }

    handleChangingCityText(event) {
        this.setState({cityText: event.target.value})
    }

    render() {
        return (
            <div className='addView card' style={{ width: '700px' }}>
                <div className="addHeader">
                    <h1>Add a City</h1>
                </div>
                <div className="row">
                    <div className="small-1 medium-1 large-1 columns">&nbsp;</div>
                    <div className="small-6 medium-6 large-6 columns">
                        <input onChange={this.handleChangingCityText} type="text" placeholder="Enter a city" />
                    </div>
                    <div className="small-3 medium-3 large-3 columns">
                        <button>Add a City</button>
                    </div>
                    <div className="small-2 medium-2 large-2 columns">&nbsp;</div>
                </div>


            </div>
        )
    }
}

export default AddView