import CooperCar from "./components/CooperCar.js";
import MoreInfo from "./components/MoreInfo.js";

(()=>{

    const { createApp } = Vue;

    createApp({
        created(){
            console.log("created");
            fetch('./data.json')
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    this.cars = data;
                })
                .catch(error=>console.error(error));
        },
        data(){
            return{
                cars:{},
                showWindow: false,
                carInfo:{}
            }
        },
        components:{
            cooperCar:CooperCar,
            moreInfo:MoreInfo
        },
        methods:{
            loadCarInfo(car){
                this.carInfo = car;
                this.showWindow = true
            }
        }
    }).mount('#app');
})()