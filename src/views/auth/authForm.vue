<template lang="pug">
    //authForm
    div
        div().section-body__unlogged-input--container
            label-validation(
                placeholder='Name',
                icon='fa-user', typeInput="text",
                @input='nameChanged', v-model='user.name',
                id='name', :validateClass="(user.name === '' ? '' : nameValid ? 'has-value' : 'alert-validate')")
            div(v-show="!nameValid && (user.name !== '')").ui-message-error
                p Error Nombre
        div(v-if="type === 'email'").section-body__unlogged-input--container
            label-validation(
                placeholder='email', icon='fa-envelope',
                typeInput="email",
                v-model='user.email',
                @input='emailChanged',
                id='email',
                :validateClass="(user.email === '' ? '' : emailValid ? 'has-value' : 'alert-validate')")
            div(v-show="!emailValid && (user.email !== '')").ui-message-error
              p Error Email"

</template>

<script>
    import LabelValidation from "./elements/labelValidation.vue";
    import {validateFields} from "./global";

    export default {
        name: "auth-form",
        components: { LabelValidation},
        props: {
            type: {
                type: String
            },
            phoneNumber:{
                type:[String, Number]
            },
            typeForm: {
              type: String,
              default: 'register',
            },
        },
        data: () => ({
            isLoggingIn: true,
            plans: null,
            user: {
                name: "",
                email: "",
                phoneNumber: "",
                document: ""
            },
            document_type: { name: 'CC', language: 'CC' },
            typeDocument: [
              { name: 'CC', language: 'CC' },
              { name: 'NIT', language: 'NIT' },
              { name: 'CE', language: 'CE' },
              { name: 'TI', language: 'TI' }
            ]
        }),
        methods: {
            nameChanged: function ( name ) {
              this.user.name = name;
              this.$emit('nameChanged', name);
              this.$emit('userUpdated', this.user);
            },
            emailChanged: function ( email ) {
              this.user.email = email;
              this.$emit('emailChanged', email);
              this.$emit('userUpdated', this.user);
            },
            phoneNumberChanged: function ( phoneNumber ) {
              this.user.phoneNumber = phoneNumber;
              this.$emit('phoneNumberChanged', phoneNumber)
              this.$emit('userUpdated', this.user);
            },
            phoneNumberValidationChanged: function ( valid ) {
              this.$emit('phoneNumberValidationChanged', valid)
              this.$emit('userUpdated', this.user);
            },
            documentChanged: function ( document ) {
              this.user.document = document;
              this.$emit('documentChanged', document);
              this.$emit('userUpdated', this.user);
            },
            inputChanged: function(event, value){
              this.$emit(event, value);
              this.$emit('userUpdated', this.user);
            }
        },
        computed: {
          documentTypeValid(){
            return !(this.document_type === '')
          },
          nameValid(){
            return !(this.user.name === '')
          },
          emailValid(){
            let valid = false;
            valid = validateFields(this.user.email, 'email');

            return valid;
          },
          phoneValid(){
            return ((this.user.phoneNumber == null ) || ( !(this.user.phoneNumber === '')))
          },
          documentValid(){
            return !(this.user.document === '')
          }
        },
        watch: {
          typeForm(value) {
            this.isLoggingIn = (value === 'login');
          }
        },

        mounted() {
            console.log('phoneValid ' + this.phoneValid);
            if ((window.user !== null) && ( typeof window.user != 'undefined')) {
              this.user.name = window.user.name;
              this.user.email = window.user.email;
              this.user.phoneNumber = window.user.phone;
              this.user.document = window.user.document;
            }

            this.plans = window.plans;
        },
    }
</script>

<style lang="sass">
    @import "../../scss/utilities/variables"
    @import "../../scss/utilities/functions"
    #section-phone
        .section-body__unlogged-input--container
            .alert-validate
                input.input-tel__input
                    border: 1px solid #f30f50 !important
                .is-focused
                    label.input-tel__label
                        color: #f30f50 !important
    .alert-validate
        color: $warning !important
        input
            border: 1px solid $warning !important
        &:before
            content: unicode("f12a")
            font-family: FontAwesome
            display: block
            position: absolute
            font-size: 1.6em
            right: 1em
            top: 1.2em
            z-index: 1
    .has-value
        input
            border: 1px solid $success !important
            background: #f8feff
            transition: .3s
        label
            color: $success !important
        .icon
            color: $success
    .ui-message-error
        font-size: 1em
        text-align: left
        transition: .3s
        padding: 0 0 0
        color: $warning !important
        position: absolute
        p
          font-size: .9em
          margin-top: 3px !important

</style>
