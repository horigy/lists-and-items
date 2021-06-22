<template>

    <!-- lists -->
    <ul class="lists-list">

        <!-- list input -->
        <li class="list" v-for="(list, listIndex) in lists" :key="listIndex">

            <div class="head">
                <input type="checkbox" :value="list.params.checked" v-on:click="changeList(listIndex, 'checked')" v-on:change="checkAll(listIndex, $event.target.value)">
                <a href="#" v-on:click="changeList(listIndex, 'show')">
                    <h2>List {{list.id}}</h2>
                </a>
            </div>

            <div class="body" v-show="list.params.show">

                <!-- item inputs -->
                <ul class="items-list">
                    <li class="item" v-for="(item, iIndex) in list.items" :key="iIndex">
                        <input class="check" type="checkbox" :checked="item.checked" @change="changeItem($event.target.value, $event.target.type, item, listIndex, iIndex)">
                        <h3>Item {{item.id}}</h3>
                        <input class="number" type="number" min="0" :value="item.number" @change="changeItem(+$event.target.value, $event.target.type, item, listIndex, iIndex)">
                        <input class="color" type="color" :value="item.color" @change="changeItem($event.target.value, $event.target.type, item, listIndex, iIndex)">
                    </li>
                </ul>
            </div>
        </li>

    </ul>
</template>

<script>
export default {
    props: {
        lists: {
            type: Array,
            required: true
        },
    },
    methods: {
        //chanding list visibility and checkbox
        changeList(index, param) {
            this.$store.commit('CHANGELIST', {index, param})
        },
        //check all items in list
        checkAll(listIndex, value) {
            let boolVal = true;
            if(value === 'false') {boolVal = false}
            console.log(boolVal);
            let count = this.lists[listIndex].items.length;
            for(let iIndex=0; iIndex<count; iIndex++) {
                let newItem = this.lists[listIndex].items[iIndex];
                newItem.checked = boolVal;
                this.$store.commit('REMOVEITEM', {listIndex, iIndex});
                this.$store.commit('SETITEM', {listIndex, iIndex, newItem});
            }
        },
        //changing item inputs
        changeItem(value, type, item, listIndex, iIndex) {
            let newItem = item;
            if(type == 'checkbox') {
                newItem.checked = !newItem.checked;
            } else {
                newItem[type] = value;
            }
            this.$store.commit('REMOVEITEM', {listIndex, iIndex});
            this.$store.commit('SETITEM', {listIndex, iIndex, newItem})
        },
    }
}
</script>

<style lang="scss" scoped>
.lists-list {
    padding: 0;
}

input {
    margin-right: 10px;
    border: none;
    font-size: 10px;
    padding: 0;
}
input[type='checkbox'] {
    width: 25px;
    height: 25px;
}
input[type='number'] {
    width: 40px;
    border: 1px solid black;
}
h3 {
    flex: 1;
}
.head {
    position: relative;
    display: flex;
    align-items: center;
}
.head::before {
    content: " > ";
    display: block;
    left: 0;
    transform: scaleY(1.5);
    font-size: 16px;
    margin-right: 20px;
}
.body {
    padding-left: 50px;
}
.item {
    display: flex;
    align-items: center;
    padding-right: 10%;
}
.number {
    font-size: 18px;
    width: 30px;
}
.color {
    width: 30px;
    height: 30px;
}


</style>

