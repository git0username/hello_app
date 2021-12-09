import {createStore} from 'vuex'

export const store = createStore({
    state(){
        return {
            message: 'This is store data.',
            counter: 0,
        }
    },
    
    mutations:{
        count:(state,n)=>{
            state.message += n          
        },
        say:(state,msg)=>{
            state.counter = msg
        },
        reset:(state)=>{
            state.counter=0
            state.message='reset!!'
        },
    },
    actions:{
        doit:(context)=>{
            var n = Math.floor(Math.random()*10)
            context.commit('count',n)
            context.commit('say','add' + n +'!')
        },
    }
})