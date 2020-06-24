<template>
    <div class="map">
        <GmapMap
            class="map__content"
            :center="getCurrentOffice.position"
            :zoom="12"
            map-type-id="terrain"
            :options="mapOptions"
        >
            <GmapMarker
                :position="getCurrentOffice.position"
                :icon="require('@/assets/images/dot.png')"
            />
        </GmapMap>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            mapOptions: {
                mapTypeControl: false,
                scaleControl: false,
                zoomControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#212121"
                        }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                        {
                            "visibility": "off"
                        }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#757575"
                        }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                        {
                            "color": "#212121"
                        }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#757575"
                        }
                        ]
                    },
                    {
                        "featureType": "administrative.country",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "stylers": [
                        {
                            "visibility": "off"
                        }
                        ]
                    },
                    {
                        "featureType": "administrative.locality",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#757575"
                        }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#181818"
                        }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#616161"
                        }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                        {
                            "color": "#1b1b1b"
                        }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [
                        {
                            "color": "#2c2c2c"
                        }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#8a8a8a"
                        }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#373737"
                        }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#3c3c3c"
                        }
                        ]
                    },
                    {
                        "featureType": "road.highway.controlled_access",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#4e4e4e"
                        }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#616161"
                        }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#757575"
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#000000"
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#3d3d3d"
                        }
                        ]
                    }
                ]           
            }
        }
    },
    computed: {
        ...mapGetters([
            'getCurrentOffice'
        ])
    }
}
</script>

<style lang="scss" scoped>
    .map__content {
        width: 100%;
        height: 500px;
        @media (max-width:767px) { 
            height: 400px;
        }
        @media (max-width:520px) { 
            height: 300px;
        }
    }
</style>