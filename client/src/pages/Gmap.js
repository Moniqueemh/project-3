import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class Gmap extends Component {
    componentDidMount(){
        //https://cors-anywhere.herokuapp.com/
        axios('http://api.positionstack.com/v1/forward?access_key=fda3dd181045c2a660f80ebd63817b22&query='+this.props.city).then(res=>{
            console.log(res);
        });
    }
    render() {
        return (
            <div>
                
                <Map
                    google={this.props.google}
                    zoom={10}
                    style={mapStyles}
                    centerAroundCurrentLocation={true}
                />
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDHCqk3TAyypvBsNjBMwSRBWlXKEJlOxIw'
})(Gmap);
