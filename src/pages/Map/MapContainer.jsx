import React, { useEffect, createRef } from 'react';
import mapboxgl from "mapbox-gl";
import { getCords } from '../../modules/Order';
import { drawRoute } from '../../helpers/drawRoute';
import { connect } from 'react-redux';

const MapContainer = ({ cords }) => {
    const mapContainer = createRef(null);

    useEffect(() => {
        if (mapContainer) {
            const params = {
                accessToken:
                    'pk.eyJ1IjoieWxkdXMiLCJhIjoiY2t4cDY5dHJ0MmQwdjJ5cGU1Z2U4d3BqbiJ9.N5BNG6NBD1qtj91ggEx8nA',
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/light-v10',
                center: [30.26565043575062, 59.80291264492968],
                zoom: 12,
            };
            document.map = new mapboxgl.Map(params);
        }

        return () => {
            document.map.remove();
        }

    }, [mapContainer]);

    useEffect(() => {
        if (cords.length > 0) {
            drawRoute(cords);
        }
    }, [cords]);

    return (
        <div className="map-wrapper">
            <div id="map" data-testId="map" className="map" ref={mapContainer}/>
        </div>
    );
};

const mapStateToProps = (state) => ({ cords: getCords(state) });

export default connect(mapStateToProps)(MapContainer);