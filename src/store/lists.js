import Vue from "vue";

export default {
    state: {
        lists: [
            {
                id: 1,
                params: {
                    checked: false,
                    sorted: false,
                    show: false,
                },
                items: [
                    {
                        id: 1,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 2,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 3,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 4,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                ]
            },
            {
                id: 2,
                params: {
                    checked: false,
                    sorted: false,
                    show: false,
                },
                items: [
                    {
                        id: 1,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 2,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 3,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 4,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                ]
            },
            {
                id: 3,
                params: {
                    checked: false,
                    sorted: false,
                    show: false,
                },
                items: [
                    {
                        id: 1,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 2,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 3,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 4,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                ]
            },
            {
                id: 4,
                params: {
                    checked: false,
                    sorted: false,
                    show: false,
                },
                items: [
                    {
                        id: 1,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 2,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 3,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 4,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                ]
            },
            {
                id: 5,
                params: {
                    checked: false,
                    sorted: false,
                    show: false,
                },
                items: [
                    {
                        id: 1,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 2,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 3,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                    {
                        id: 4,
                        color: '#ffffff',
                        number: 10,
                        checked: false,
                    },
                ]
            },
        ]
    },
    mutations: {
        CHANGELIST(state, {index, param}) {
            state.lists[index].params[param] = !state.lists[index].params[param];
        },
        SETITEM(state, {listIndex, iIndex, newItem}) {
            state.lists[listIndex].items.splice(iIndex, 0, newItem);
        },
        REMOVEITEM(state, {listIndex, iIndex}) {
            state.lists[listIndex].items.splice(iIndex, 1);
        },
    },
    actions: {

    },
    getters: {
        GETDATA (state) {
            return state.lists
        },
    }

}

