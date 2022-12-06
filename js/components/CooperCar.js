export default {
    name: "CooperCar",

    emits: ['loadcardata'],
    props:{
      car:Object
    },
    template:`
        <p @click="loadCarData">{{car.name}}</p>
    `,
    methods:{
        loadCarData(){
            this.$emit('loadcardata',this.car);
        }
    }
}