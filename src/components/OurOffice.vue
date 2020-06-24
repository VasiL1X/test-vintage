<template>
    <div class="offices">
        <div class="container">
            <div class="offices__inner">
                <div class="offices__info white-color">
                    <h3 class="offices__title">Our Offices</h3>
                    <ul class="offices__tabs">
                        <li class="offices__tab" v-for="(tab, index) in getOfficesList" :key="index">
                            <span 
                                :class="{'green-color': tab === getCurrentOffice}"
                                @click="setCurrentOffice(tab)"
                                >{{tab.city}}
                            </span>
                        </li>
                    </ul>
                    <h4 class="offices__name">{{getCurrentOffice.officeName}}</h4>
                    <p class="offices__address">{{getCurrentOffice.officeAddress}}</p>
                    <p class="offices__address">{{getCurrentOffice.officeZip}}</p>
                    <p class="offices__address">{{getCurrentOffice.country}}</p>
                </div>
                <div class="offices__map">
                    <base-map></base-map>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import baseMap from './Base/BaseMap' 
import { mapGetters, mapActions } from 'vuex'


export default {
    name: 'OurOffice',
    data() {
        return {
            currentTab: {}
        }
    },
    components: {
        baseMap
    },
    computed: {
        ...mapGetters([
            'getCurrentOffice',
            'getOfficesList'
        ])
    },
    methods: {
        ...mapActions([
            'setCurrentOffice'
        ])
    },
    created() {
        this.currentTab = this.getOfficesList[0]
        this.setCurrentOffice(this.currentTab)
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/variables.scss";

.offices {
    background-image: url(~@/assets/images/gray-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    &__inner {
        margin-right: -60px;
        display: flex;
        @media (max-width:1100px) {
            margin-right: -30px;
        }
    }
    &__info {
        flex-basis: 50%;
        max-width: 580px;
        padding: 95px 10px 20px 0;
    }
    &__map {
        flex-grow: 1;
    }
    &__title {
        margin-bottom: 30px;
    }
    &__tabs {
        display: flex;
        margin-bottom: 45px;
    }
    &__tab + &__tab {
        margin-left: 20px;
    }
    &__tab {
        display: inline-block;
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 600;
        transition: all .5s;
        cursor: pointer;
        &:hover {
            color: $base-green-c;
            margin-top: -5px;
        }
    }
    &__name {
        margin-bottom: 30px;
    }
}
@media (max-width:1100px) {
    .offices {
        &__inner {
            flex-direction: column;
            margin-right: 0;
        }
        &__info {
            padding: 95px 0 40px;
        }
        &__map {
            margin: 0 -30px;
        }
    }
}
@media (max-width:768px) {
    .offices {
        &__map {
            margin: 0 -15px;
        }
        &__info {
            padding: 35px 0 40px;
        }
    }
}
@media (max-width:520px) {
    .offices {
        &__title {
            margin-bottom: 20px;
        }
        &__tabs {
            margin-bottom: 25px;
            white-space: nowrap;
            overflow-y: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
            &::-webkit-scrollbar {
                width: 0;
                background-color: transparent;
            }
        }
        &__name {
            margin-bottom: 10px;
        }
    }
}
</style>