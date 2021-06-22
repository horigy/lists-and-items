<template>

    <div class="body">

        <!-- sorted items -->
        <ul class="items-list" v-if="list.params.sorted">
            <li class="item" v-for="(item, index) in checkedItems" :key="index">
                <div class="square" v-for="index in item.number" :key="index" :style="`background-color: ${item.color}`" v-on:click="removeItem(list.id, item.id)"></div>
            </li>
        </ul>

        <!-- unsorted items -->
        <div class="shuffled-list" v-else>
            <div class="shuffled-item" v-for="(item, index) in shuffledItems" :key="index">
                <div class="square" :style="`background-color: ${item.color}`" v-on:click="removeItem(list.id, item.id)"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Object,
            required: true
        }
    },
    computed: {
        //show checked sorted items
        checkedItems: function() {
            let items = this.list.items;
            let checkedItems = []
            for(let i = 0; i < items.length; i++) {
                if(items[i].checked) {
                    checkedItems.push(items[i]);
                }
            }
            return checkedItems;
        },

        //show checked unsorted items
        shuffledItems: function() {
            let items = this.list.items;
            let shuffledItems = [];
            for(let i = 0; i < items.length; i++) {
                if(items[i].checked) {
                    let count = items[i].number;
                    let color = items[i].color;
                    let id = items[i].id;
                    let obj = {};
                    obj.color = color;
                    obj.id = id;
                    for(let x = 0; x < count; x++) {
                        shuffledItems.push(obj);
                    }
                }
            }
            shuffledItems.sort(() => Math.random() - 0.5);
            return shuffledItems;
        },

    },
    methods: {
        //changing item amount
        removeItem(listID, itemID) {
            let listIndex = listID - 1;
            let iIndex = itemID - 1;
            let newItem = this.list.items[iIndex];
            newItem.number = newItem.number - 1;
            this.$store.commit('REMOVEITEM', {listIndex, iIndex});
            this.$store.commit('SETITEM', {listIndex, iIndex, newItem})
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 15px;
}
.shuffled-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
.shuffled-item {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
.square {
    width: 20px;
    height: 20px;
    margin: 2px;
}
</style>
