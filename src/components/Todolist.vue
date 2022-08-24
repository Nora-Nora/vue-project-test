<template>
    <h1 @click="add">{{ count }}</h1>
    <h1>猜猜我是谁</h1>
    <div @click="addName">{{ title }}</div>
    <h2>{{ nameArr }}</h2>
</template>
<script setup>
    import {computed, ref} from 'vue'
    let count = ref(1)
    function add(){
        count.value ++
    }

    // 
    function who(){
        let title = ref('fddf')
        let name = ref('haha')
        let nameArr = ref([])
        function addName(){
            nameArr.value.push('newName'+ count.value)
        }
        let nameNum = computed(()=> nameArr.value.length )
        return {title, name, nameArr, addName, nameNum}
    }
    let {title, name, nameArr, addName, nameNum} = who()



</script>