export default {
    name: 'MoreInfo',
    props: {
        data: Object
    },
    emits:['closeWindow'],
    template:`
        <div class="moreInfo">
                <p @click="closeWindow">{{data.info}}</p>
        </div>
    `,
    methods:{
        closeWindow(){
            this.$emit('closeWindow');
        }
    }
}