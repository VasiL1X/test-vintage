export default { 
    actions: {
        setCurrentOffice({ commit }, payload) {
        commit("changeCurrentOffice", payload);
        }
    },
    mutations: {
        changeCurrentOffice(state, payload) {
            state.currentOffice = payload;
        }
    },
    state: {
        currentOffice: {},
        officesList: [
            {
                city: "Kyiv",
                country: "Ukraine",
                position: { lat: 50.439118, lng: 30.522857 },
                officeName: "Global Message Services Ukraine LLC",
                officeAddress: "Kyiv, Stepan Bandera, 33",
                officeZip: "02066"
            },
            {
                city: "New York",
                country: "USA",
                position: { lat: 40.815477, lng: -74.110520 },
                officeName: "Global Message Services Ukraine LLC",
                officeAddress: "Thomas E. Dunn Memorial Hwy, Rutherford, 13",
                officeZip: "07077"
            },
            {
                city: "Guangzhou",
                country: "China",
                position: { lat: 23.388119, lng: 113.268187 },
                officeName: "Global Message Services Ukraine LLC",
                officeAddress: "Huadu District, 10-16",
                officeZip: "09854"
            },
            {
                city: "Barcelona",
                country: "Spain",
                position: { lat: 41.378348, lng: 2.136749 },
                officeName: "Global Message Services Ukraine LLC",
                officeAddress: "Carrer de Santa Caterina, 10-16",
                officeZip: "08014"
            }
        ]
    },
    getters: {
        getCurrentOffice(state) {
            return state.currentOffice
        },
        getOfficesList(state) {
            return state.officesList
        } 
    }
}