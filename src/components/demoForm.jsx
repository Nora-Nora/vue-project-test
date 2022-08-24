import {defineComponent, ref} from "vue";

export default defineComponent({
    props:{
        formData: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props){
        let form = ref({})
        function submitForm(e){
            e.preventDefault()
            alert('form submitted')
            form.value = ref({})
        }
        function clearData(e){
            e.preventDefault()
            list.value = []
        }
        function addData(e){
            e.preventDefault()
            list.value.push({name: 'jack', age: 23})
        }
        let list = ref([{name:'nora', age: 3}])
        return () => <form action='#'>
            name:<input type="text" vModel={props.formData.name}/>
            age:<input type="text" vModel={props.formData.age}/>
            <button onClick={submitForm}>submit</button>
            <br/>
                <ul>
                {
                    list.value.length ? list.value.map( i => <li>{ i.name } - {i.age}</li> ) : <li>no data</li>
                }
                </ul>
            <button onClick={clearData}>clear list</button>
            <button onClick={addData}>add Item</button>
        </form>
    }
})