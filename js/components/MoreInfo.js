export default {
    name: 'MoreInfo',
    props: {
        data: Object
    },
    emits:['closeinfo'],
    template:`
        <div class="moreInfo">
                <button @click="closeWindow" class="closeWindow">X</button>
                <h1>{{data.name}}</h1>
                <span>Body style: {{data.bodyStyle}}</span>
                <span>Production years: {{data.productionYears.toString()}}</span>
                <p>{{data.info}}</p>
                <h3>Engines available:</h3>
                <ul>
                    <li v-for="engine in data.engines">{{engine}}</li>
                </ul>
                <img v-for="image in data.images" :src='"images/" + image' alt="car">
                
        </div>
    `,
    methods:{
        closeWindow(){
            this.$emit('closeinfo');
        }
    }
}