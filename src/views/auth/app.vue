<template lang="pug">
    #body-code.row
        main-auth(v-show="method == null" @auth-method-selected="authMethodSelected" :state="'login'")
        email-validation(v-if="method == 'email'" :initial-type-form="state" @stateChanged="stateChanged" @back="redirectLogin" @authenticated="authenticated")
        phone-validation(v-if="method == 'phone'" :initial-type-form="state" @stateChanged="stateChanged" @back="redirectLogin" @authenticated="authenticated")
</template>

<script>

export default {
    name: 'app-auth',
    props: {},
    components: {},
    data(){
        return {
            state: null,
            method: null,
        }
    },
    methods: {
        authMethodSelected({state, method}) {
            this.state = state;
            this.method = method;
            this.$emit('authMethodSelected', {state, method});
        },
        redirectLogin() {
            this.method = null;
        },
        stateChanged(state){
            this.state = state;
            this.$emit('stateChanged', this.state);
        },
        authenticated(){
            window.location.href = '/user.controller/get-dto.html';
        }
    },
    watch:{},
    computed: {},
    mounted () {}
}
</script>