<template lang="pug">
    //email validation
    section#section-email
        div( v-show='!showCode').container-main
            div.section-header
              a(href="/").logo
                logoSolati
            div.section-body
                div.section-body--line
                    div(v-if='showMsgNotFound').alert.alert-danger
                        p {{ isLoggingIn ? 'Email no registrado.' : 'Nombre de usuario o contraseña incorrectos.' }}
                    div(v-if='showMsgConflict').alert.alert-danger
                        p Error
                    div(v-if='showMsgError').alert.alert-danger
                      p Error
                    div(v-if='showMsgInvalidKey').alert.alert-danger
                      p Error en Email
                    div.section-body__title
                        p Inciar sesión Email
                    div.section-body__unlogged-input
                        auth-form( :type-form="typeForm" type="email", @nameChanged='nameChanged', @emailChanged='emailChanged', :name-valid='nameValid', :email-valid='emailValid' )
                    div.section-body__other
                        .terms-accept(v-show="typeForm === 'register'")
                          div.custom-control.custom-checkbox(:class="checkedValid === null ? '' : !checkedValid ? 'alert-check' : checkedValid ? 'has-check' : ''")
                            input#checkbox-1.custom-control-input(type="checkbox", v-model='checked', name='checkbox-1', value='accepted', @change='updateChecked')
                            label.custom-control-label(for='checkbox-1')
                          span.tyc
                            a(href="/terminos-y-condiciones.html", target="_blank", style="text-decoration: underline !important;") Aceptar terminos
                        button-comp(
                          @click='validate'
                          :class="showLoading ? 'disable' : ''"
                          ).btn.btn__validate.btn--orange
                            template(slot='general-text-btn')
                              span(:class="showLoading ? 'spinner-circle' : ''") Iniciar sesión

</template>


<script>
    import logoSolati from "@/components/elements/icons/logoSolati";
    import ButtonComp from "@/components/elements/Ui/Button/buttonComp.vue";
    import AuthForm from "./authForm.vue";
    import { validateFields } from "./global.js";

    export default {
        name: "emailValidation",
        components: { AuthForm, ButtonComp, logoSolati},
        props: {
          initialTypeForm: {
            type: String,
            default: 'register',
          },
        },
        data: () => ({
            isLoggingIn: true,
            showCode: false,
            name: "",
            email: "",
            typeForm: '',
            typeSend: 'email',
            checked: null,
            isChecked: null,
            checkedValid: null,
            nameValid: null,
            emailValid: null,
            showMsgNotFound: null,
            isMsgNotFoundOtp: null,
            showMsgConflict: null,
            showMsgInvalidKey: null,
            showMsgError: null,
            showMsgSuccess: null,
            showLoading: false,
            otp:null,
            csrf: null,
            showCodeMsg: false
        }),

        methods: {
            showMsgInvalidOtp: function () {
                this.isMsgNotFoundOtp = true;
            },
            showMsgConnectionError: function () {
                this.showMsgConflict = true;
            },
            onAuthenticated: function () {
               this.$emit('authenticated');
            },
            // Consume the email validation service (ENDPOINT)
            sendOTP: function ( email ) {
                this.showLoading = true;
                const params = {
                    validation_method: 'email',
                    key: email,
                    state: this.typeForm
                };
                return axios
                    .post('util/otp', params, {
                    })
                    .then(( response ) => {
                        this.showCode = true;
                        this.showCodeMsg = true;
                    })
                    .catch( ( error ) => {
                        switch (error.response.status) {
                            case 404:
                                this.showMsgNotFound = true;
                                break;
                            case 409:
                                this.showMsgConflict = true;
                                break;
                            case 422:
                                this.showMsgInvalidKey = true;
                                break;
                            default:
                                this.showMsgError = true;
                                break;
                        }
                    }).finally(() => {
                        let vm = this;
                        this.showLoading = false;
                        setTimeout(function(){ vm.showCodeMsg = false; }, 2000);
                        this.isMsgNotFoundOtp = false;
                    });
            },
            switchState() {
                const typeForm = this.isLoggingIn ? 'register' : 'login';
                this.typeForm = typeForm;
            },
            nameChanged: function ( text ) {
                this.name = text;
                this.nameValid = validateFields ( this.name , 'name', this.typeForm );
            },
            emailChanged: function ( text ) {
                this.email = text;
                this.emailValid = validateFields ( this.email , 'email' );
            },
            updateChecked: function () {
              this.isChecked = !this.isChecked;
              this.checkedValid = validateFields ( this.isChecked , 'checkBox' );
            },
            validate: function () {
                this.nameValid = validateFields ( this.name , 'name', this.typeForm  );
                this.emailValid = validateFields ( this.email , 'email' );
                this.checkedValid = validateFields ( this.isChecked , 'checkBox' );

                if ( this.nameValid && this.emailValid ) {
                    if (this.typeForm === 'register') {
                        if ( this.checkedValid ) {
                            return this.sendOTP( this.email );
                        }
                    } else {
                        return this.sendOTP( this.email );
                    }
                }
            }

        },
        watch: {
          initialTypeForm(value){
            this.typeForm = value;
          },
          typeForm(value) {
            this.$emit('stateChanged', value);
            this.isLoggingIn = (value === 'login');
          }
        },

        mounted() {
          this.typeForm = (this.initialTypeForm == '') ? 'register' : this.initialTypeForm;
        }
    }
</script>
<style lang="sass" scoped>
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
  .fade-enter, .fade-leave-to
    opacity: 0
  .spinner-circle
    position: relative
    &::before
      content: ''
      position: absolute
      right: 0
      top: 0
      -webkit-animation: spin 2s infinite linear
      animation: spin 2s infinite linear
      display: inline-block
      width: 1rem
      height: 1rem
      vertical-align: -.125em
      border: .25em solid black
      border-right-color: transparent
      border-radius: 50%
  @keyframes spin
    0%
      -webkit-transform: rotate(0deg)
      transform: rotate(0deg)
    100%
      -webkit-transform: rotate(359deg)
      transform: rotate(359deg)
  .disable
    pointer-events: none
    -webkit-user-select: none
    -moz-user-select: none
    user-select: none
    opacity: .25
  .code-msg
    color: #055160
    background-color: #cff4fc
    border-color: #b6effb
    position: relative
    padding: 1rem 1rem
    margin-bottom: 1rem
    border: 1px solid transparent
    border-radius: .25rem
    transition: .3s
  .txt-phone-number
    font-size: 1.6em
    margin-top: .5em
    display: block
</style>
<style lang="sass">
    @import "../../scss/utilities/variables"
    body
        background-color: #f0f0f0
        min-height: auto
    #section-email
        font-family: "Raleway", sans-serif
        width: 42em
        margin: 6em auto 0
        text-align: center
        .section-header
            margin-bottom: 3em
            .logo
              padding: 0.8em
              background: #1C2030
              border-radius: 12px
              width: fit-content
              margin: auto
              display: block
              svg
                width: 70px
                height: 70px
        .section-body
            &--line
              padding: 3em
              background: #ffffff
              border: 1px solid #dcdcdc
              @media only screen and (max-width: 410px)
                padding: 3em 1.5em
            &__title
                margin-bottom: 2em
                p
                    font-size: 1.7em
                    font-weight: 600
                    color: $greenDarkHex
                    line-height: normal
                    width: 84%
                    margin: 0 auto !important
            &__unlogged-input
                margin-bottom: 2em
                &--container
                    position: relative
                    margin-bottom: 2.5em
                    &:focus
                        outline: none

                    label
                        color: #acacae
                        font-size: .9em
                        left: 16px
                        pointer-events: none
                        position: absolute
                        z-index: 3
                        transition: 0.3s all ease-in-out
                        -webkit-transform: translateY(4px)
                        transform: translateY(4px)
                        opacity: 0.7
                        font-style: normal
                        top: 0
                    input
                        background-clip: padding-box
                        border: 1px solid rgba(94, 94, 94, 0.23)
                        -webkit-box-shadow: 0 20px 20px 0 rgba(0,0,0,0)
                        box-shadow: 0 20px 20px 0 rgba(0,0,0,0)
                        -webkit-box-sizing: border-box
                        box-sizing: border-box
                        display: block
                        font-size: 1.6em
                        line-height: 1.41
                        padding: 1em 1em 0
                        width: 100%
                        -webkit-transition-duration: .15s
                        transition-duration: .15s
                        -webkit-transition-property: -webkit-box-shadow
                        transition-property: -webkit-box-shadow
                        transition-property: box-shadow
                        border-radius: 5px
                        height: 3em
                        margin-bottom: 0
                        transition: 0.3s
                        &:focus
                          outline: none
                          & + label
                            margin-top: 0 !important
                            font-size: 0.9em !important
                            color: rgb(172, 172, 174) !important

            .btn
                box-shadow: none
                text-transform: none
                border: 1px solid rgb(94 94 94 / 23%)
                border-radius: 5px
                box-sizing: border-box
                width: 100%
                display: flex
                align-items: center
                color: #474747
                background: #fafafa
                padding: 1em 2em !important
                span
                    display: inline-block
                    margin-left: 10px
                    padding-right: 22px
                    width: 100%
                    letter-spacing: .22px
                    font-size: 1.5em
                    white-space: nowrap
                    font-weight: 600
                i
                    color: #a5a5a5
                &__validate
                    margin-bottom: 2em
            &__other
                margin-bottom: 2em
                .terms-accept
                    display: flex
                    align-items: center
                    justify-content: flex-start
                    margin-bottom: 2em
                    span
                      margin-left: 1em
                    .custom-control
                      position: relative
                      .custom-control-input
                        position: absolute
                        left: 0
                        z-index: -1
                        width: 1rem
                        height: 1.25rem
                        opacity: 0
                      .custom-control-label
                        position: relative
                        margin: 0
                        width: 1.5em
                        height: 1.5em
                        padding: 0
                        &:before
                          width: 1.5em
                          height: 1.5em
                          position: absolute
                          display: block
                          top: 0
                          left: 0
                          pointer-events: none
                          content: ""
                          background-color: #fff
                          border: #adb5bd solid 1px
                        &::after
                          width: 1.5em
                          height: 1.5em
                          left: 0
                          top: 0
                          position: absolute
                          content: ""
                          background: no-repeat 50% / 50% 50%
                      .custom-control-input:checked ~ .custom-control-label::before
                        color: #fff
                        border-color: $blueLightHex
                        background-color: $blueLightHex
                      .custom-control-input:checked ~ .custom-control-label::after
                        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 25.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 405.3 405.3' style='enable-background:new 0 0 405.3 405.3;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M393.4,124.4L179.6,338.2c-15.8,15.8-41.5,15.8-57.4,0L11.9,227.8C-4,212-4,186.3,11.9,170.5 c15.8-15.8,41.5-15.8,57.4,0l81.7,81.7L336,67.1c15.8-15.8,41.5-15.8,57.4,0C409.2,82.9,409.2,108.6,393.4,124.4z'/%3E%3C/g%3E%3C/svg%3E%0A")
                      span
                          font-size: 1.3em
            &__message
                margin-bottom: 2em
                p
                    font-size: 1.5em
                    color: $greenDarkHex
                    span
                        font-weight: 900

            hr
                margin-bottom: 2em
                border-top: 1px solid rgba(210, 210, 210)
            &__switch
              display: flex
              justify-content: center
              p
                font-size: 1.3em
                span
                  font-weight: 900
                  cursor: pointer
                  color: $blueLightHex
                  text-decoration: underline
              .btn-primary-link
                text-decoration: underline
                color: $blueLightHex
                margin-left: .4em !important
                font-weight: 700
                cursor: pointer
            //&__options
                a
                    font-size: 1.3em !important
                    color: $greenDarkHex !important
                    span
                        text-transform: none
                    i
                        color: $greenDarkHex !important
        .alert-check
            .custom-control-label
                &:before
                        border: 1px solid $warning !important
            + span
              color: $warning
              a
                color: $warning !important

        .has-check
            .custom-control-label
                &:before
                        border: 1px solid $success

</style>
