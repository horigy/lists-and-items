<template>

    <ul class="lists-list">

        <!-- list  -->
        <li class="list" v-for="(list, listIndex) in lists" :key="listIndex">
            <div class="head">
                <h2>List {{list.id}}</h2>

                <!-- sorting list items -->
                <button v-show="list.params.show" v-on:click="changeList(listIndex, 'sorted')">
                    <span v-if="list.params.sorted">Перемешать</span>
                    <span v-else>Сортировать</span>
                </button>
            </div>

            <!-- list items data -->
            <listItem :list="list" v-show="list.params.show"></listItem>
        </li>
    </ul>
</template>

<script>
import listItem from './Listitem.vue'

export default {
    components: {listItem},
    props: {
        lists: {
            type: Array,
            required: true
        },
    },
    methods: {
        //display sorted/unsorted list
        changeList(index, param) {
            this.$store.commit('CHANGELIST', {index, param})
        },
    }

}
</script>

<style lang="scss" scoped>
.list {
    border: 1px solid black;
    padding: 0 20px 20px;
}
.head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
button {
    background-color: blue;
    color: white;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
}
</style>
