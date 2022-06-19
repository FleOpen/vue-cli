import {createStore} from 'vuex'

export default createStore({
    state: {
        contador: 80,
        myModal: {},
        elementos: [],
        urlFirebase: '',
        elemento: {
            id: '',
            nombres: '',
            apellidos: '',
            numero: 0,
            gustos: []
        }
    },
    getters: {},
    mutations: {
        incrementar(state, payload) {
            state.contador += payload
        },
        disminuir(state, payload) {
            state.contador -= payload
        },
        //crud
        clear(state){
            state.elemento = {
                id: '',
                nombres: '',
                apellidos: '',
                numero: 0,
                gustos: []
            }
        },
        add(state, payload) {
            state.elementos.push(payload);
            localStorage.setItem('elementos', JSON.stringify(state.elementos))
            state.elemento = {
                id: '',
                nombres: '',
                apellidos: '',
                numero: 0,
                gustos: []
            }
        },
        delete(state, payload) {
            state.elementos = state.elementos.filter(item => item.id !== payload)
            localStorage.setItem('elementos', JSON.stringify(state.elementos))
        },
        set(state, payload) {
            state.elemento = state.elementos.find(item => item.id === payload)
        },
        edit(state, payload) {
            state.elementos = state.elementos.map(item => item.id === payload.id ? payload : item)
            localStorage.setItem('elementos', JSON.stringify(state.elementos))
        },
        load(state, payload) {
            state.elementos = payload
        },
        async generateFirebaseUrl(state, db) {
            state.urlFirebase = `https://test-5d9f3-default-rtdb.firebaseio.com/${db}`
        },
        async postFirebase(state, payload) {
            try {
                let res = await fetch(`${state.urlFirebase}/${payload.id}/.json`, {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                })
            } catch (error) {
                console.log(error);
            }
        },
        async getAllFirebase(state) {
            try {
                let res = await fetch(state.urlFirebase + '/.json')
                let dataDB = await res.json()
                for(let id in dataDB){
                    state.elementos.push(dataDB[id])
                }
            } catch (error) {
                console.log(error);
            }
        },
        async deleteFirebase(state, payload){
            let res = await fetch(`${state.urlFirebase}/${payload}/.json`, {
                method: 'DELETE',
            })
        },
        async getFirebase(state,payload){
            let res = await fetch(`${state.urlFirebase}/${payload}/.json`, {
                method: 'GET',
            })
            state.elemento = await res.json();
        },
        async patchFirebase(state,payload){
            let res = await fetch(`${state.urlFirebase}/${payload}/.json`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
        }
    },
    actions: {
        boton({commit}, objeto) {
            if (objeto.title === 'incrementar') {
                commit('incrementar', objeto.cantidad)
            } else {
                commit('disminuir', objeto.cantidad)
            }
        },
        //crud
        addAction({commit}, objeto) {
            //commit('add',objeto)
            commit('generateFirebaseUrl', 'crud')
            commit('postFirebase', objeto)
            commit('add', objeto)
        },
        deleteAction({commit}, id) {
            commit('generateFirebaseUrl', 'crud')
            commit('deleteFirebase', id)
            commit('delete', id)
        },
        setElementAction({commit}, id) {
            //commit('generateFirebaseUrl', 'crud')
            //commit('getFirebase', id)
            commit('set', id)
        },
        editAction({commit}, id) {
            commit('generateFirebaseUrl', 'crud')
            commit('patchFirebase', id)
            commit('edit', id)
        },
        addLocalStorague({commit}) {
            if (localStorage.getItem('elementos')) {
                const elementos = JSON.parse(localStorage.getItem('elementos'))
                commit('load', elementos)
                return
            }
            localStorage.setItem('elementos', JSON.stringify([]))
        },
        addAllFirebase({commit}) {
            commit('generateFirebaseUrl', 'crud')
            commit('getAllFirebase')
        }
    },
    modules: {}
})
