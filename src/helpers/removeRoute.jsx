export const removeRoute = () => {
    const map = document.map;
    const mapLayer = map.getLayer('route');

    map.on('load', function () {
        if (!!mapLayer) {
            map.removeLayer('route').removeSource('route');
        }
    });
};