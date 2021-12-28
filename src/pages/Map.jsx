import React, {Component} from "react"; 
import mapboxgl from "mapbox-gl";

class Map extends Component {
    mapContainer = React.createRef();
    map = null;

    componentDidMount() {
        mapboxgl.accessToken = "pk.eyJ1IjoieWxkdXMiLCJhIjoiY2t4cDY5dHJ0MmQwdjJ5cGU1Z2U4d3BqbiJ9.N5BNG6NBD1qtj91ggEx8nA";
        this.map = new mapboxgl.Map ({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [30.3056504, 59.9429126],
            zoom: 10,

        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render () {
        return (
            <div className="map-wrapper">
                <div data-testId="map" className="map" ref={this.mapContainer}/>
            </div>
        );
    }

}

export default Map;