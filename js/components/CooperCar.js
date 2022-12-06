export default {
    name: "CooperCar",

    emits: ['loadcardata'],
    props:{
      car:Object
    },
    template:`
        <div @click="loadCarData" class="carItem">
            <h1>{{car.name}}</h1>
            <img :src='"images/" + car.images[0]' alt="car">
        </div>
        
    `,
    methods:{
        loadCarData(){
            this.$emit('loadcardata',this.car);
        }
    }
}