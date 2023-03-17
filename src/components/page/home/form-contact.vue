<template lang="pug">
//Component Form
form(ref="form" @submit.prevent="sendEmail")
    .container.container-fluid.p-0.h-100
        .row
            .pr.col-sm-12.col-md-12.col-lg-12.col-xl-12.col-12
                p.text-head-contact ¡Contacta ya con nosotros y
                    br
                    | accede a los beneficios del Plan Pioneros!
        .row
            .pr.col-sm-12.col-md-6.col-lg-6.col-xl-6.col-12
                .body--wrap.validate-input(:class="(user_names === null ? '' : !nameValid ? 'alert-validate' : 'has-value' )", data-validate='Se requiere el Nombre')
                    input.form--input(v-model='user_names', type='text', name='user_names')
                    span.fas.fa-user.focus-input2(v-bind:class="{ 'float': !!(user_names) }", data-placeholder='Nombre completo*:')
                .ui-message-error(v-if='!nameValid === true')
                    p &iexcl;Ingresa Nombre!
            .pr.col-sm-12.col-md-6.col-lg-6.col-xl-6.col-12
                .body--wrap.validate-input(:class="(user_email === null ? '' : !emailValid ? 'alert-validate' : 'has-value')", data-validate='Se requiere el Email')
                    input.form--input(type='email', v-model='user_email', name='user_email')
                    span.fas.fa-envelope.focus-input2(v-bind:class="{ 'float': !!(user_email) }", data-placeholder='Email*:')
                .ui-message-error(v-if='!emailValid')
                    p(v-html="'¡Ingresa email!'")
        .row
            .pr.col-sm-12.col-md-6.col-lg-6.col-xl-6.col-12
                .body--wrap.validate-input(:class="(user_institution === null ? '' : !institutionValid ? 'alert-validate' : 'has-value')", data-validate='Se requiere el Email')
                    input.form--input(type='text', v-model='user_institution', name='user_institution')
                    span.fas.fa-envelope.focus-input2(v-bind:class="{ 'float': !!(user_institution) }", data-placeholder='Institución*:')
                .ui-message-error(v-if='!institutionValid')
                    p(v-html="'¡Ingresa Institución!'")
            .pr.col-sm-12.col-md-6.col-lg-6.col-xl-6.col-12
                .body--wrap.validate-input(:class="(user_job === null ? '' : !jobValid ? 'alert-validate' : 'has-value')", data-validate='Se requiere el Cargo')
                    input.form--input(type='text', v-model='user_job', name='user_job')
                    span.fas.fa-envelope.focus-input2(v-bind:class="{ 'float': !!(user_job) }", data-placeholder='Cargo*:')
                .ui-message-error(v-if='!jobValid')
                    p(v-html="'¡Ingresa Cargo!'")
        .row
            .pr.col-sm-12.col-md-6.col-lg-6.col-xl-6.col-12
                .body--wrap.validate-input(:class="(user_city === null ? '' : !cityValid ? 'alert-validate' : 'has-value')", data-validate='Se requiere la Ciudad')
                    input.form--input(type='text', v-model='user_city', name='user_city')
                    span.fas.fa-envelope.focus-input2(v-bind:class="{ 'float': !!(user_city) }", data-placeholder='Ciudad*:')
                .ui-message-error(v-if='!cityValid')
                    p(v-html="'¡Ingresa Ciudad!'")
            .pr.col-sm-12.col-md-6.col-lg-6.col-xl-6.col-12
                .body--wrap.validate-input(:class="(user_country === null ? '' : !countryValid ? 'alert-validate' : 'has-value')", data-validate='Se requiere el País')
                    input.form--input(type='text', v-model='user_country', name='user_country')
                    span.fas.fa-envelope.focus-input2(v-bind:class="{ 'float': !!(user_country) }", data-placeholder='País*:')
                .ui-message-error(v-if='!countryValid')
                    p(v-html="'¡Ingresa País!'")
        .row
            .pr.col-sm-12.col-md-12.col-lg-12.col-xl-12.col-12
                .body--wrap.validate-input(:class="(user_mobile === null ? '' : !mobileValid ? 'alert-validate' : 'has-value')", data-validate='Se requiere el celular')
                    input.form--input(type='number', v-model='user_mobile', name='user_mobile')
                    span.fas.fa-envelope.focus-input2(v-bind:class="{ 'float': !!(user_mobile) }", data-placeholder='Número de contacto*:')
                .ui-message-error(v-if='!mobileValid')
                    p(v-html="'¡Ingresa Teléfono celular!'")
        .row(v-show="true" )
            .pr.col-sm-12.col-md-12.col-lg-12.col-xl-12.col-12
                .terms-accept
                    div.custom-control.custom-checkbox(:class="checkedValid === null ? '' : !checkedValid ? 'alert-check' : checkedValid ? 'has-check' : ''")
                        input.custom-control-input(
                            :id="fieldId"
                            type="checkbox",
                            v-model='checked',
                            :name='fieldId',
                            value='accepted',
                            @change='updateChecked'
                            )
                        label.custom-control-label(
                            :for="fieldId"
                            )
                    span.tyc
                        p(style="line-height: 1.4;") Al enviar esta información, aceptas los
                            a(href="/terminos-y-condiciones", target='_blank', style="text-decoration: underline !important;")
                                strong(v-html="' términos y condiciones '")
                            span
                                span(v-html="' y la '" )
                            a(href="/terminos-y-condiciones", target='_blank', style="text-decoration: underline !important;")
                                strong(v-html="' Política de privacidad.'")
        .row
            .pr.col-sm-12.col-md-12.col-lg-12.col-xl-12.col-12
                input.btn.btn--contact.btn-primary(type="submit" value="¡Enviar!")
                //a(@click.prevent='toPay').btn.btn--green.btn-primary Cotizar ahora
            div.alert-msg
                div.alert.alert-success(v-show="sendEmailOk" )
                      p Gracias, Mensaje enviado
                      p Pronto estableceremos contacto contigo. Muchas gracias.
                div.alert.alert-danger(v-show="msgErrr" )
                  | Debes llenar todos los campos
</template>

<script>

// import emailjs from '@emailjs/browser';
// import {result} from "lodash";
export default {
  name: 'formContact',
    props: {
        fieldId: {
            type: String,
            required: false,
            default: 'checkbox-1',
        },
    },
  components: {  },
  data() {
    return {
        user_names: null,
        user_institution: null,
        user_job: null,
        user_city: null,
        user_country: null,
        user_email: null,
        user_mobile: null,
        modalShow: false,
        msgErrr: false,
        value: null,
        options: ['list', 'of', 'options'],
        emailNotExist: true,
        sendEmailOk: false,
        checked: null,
        isChecked: null,
        checkedValid: null,
    }
  },
  methods: {
      updateChecked: function () {
          this.isChecked = !this.isChecked;
          this.checkedValid = this.validateFields ( this.isChecked , 'checkBox' );
      },
      sendEmail(){
          if (this.user_names === null) {
              this.user_names = ''
          }
          if (this.user_institution === null) {
              this.user_institution = ''
          }
          if (this.user_job === null) {
              this.user_job = ''
          }
          if (this.user_city === null) {
              this.user_city = ''
          }
          if (this.user_country === null) {
              this.user_country = ''
          }
          if (this.user_email === null) {
            this.user_email = ''
          }
          if (this.user_mobile === null) {
            this.user_mobile = ''
          }
          if (this.checkedValid === null) {
            this.checkedValid = ''
          }

          if (this.nameValid && this.institutionValid && this.jobValid && this.cityValid && this.countryValid && this.emailValid && this.mobileValid && this.checkedValid) {

              emailjs.sendForm('service_ipikzm6', 'template_hmgbsfi', this.$refs.form, 'tx9aZF9xStRGrABaw')
                  .then((result) => {
                      // this.sendEmailOk = true;
                      //console.log('SUCCESS!', result.text);
                      this.$toast.open({
                          message: '<p class="text-left">Gracias, Mensaje enviado. Pronto estableceremos contacto contigo. Muchas gracias.</p>',
                          type: 'success',
                          position: 'top'
                      });
                      this.getTrack();

                  }, (error) => {
                      this.$toast.open({
                          message: '<p class="text-left">Error de conexión intenta de nuevo</p>',
                          type: 'error',
                          position: 'top'
                      });
                  });
          } else {
            // this.msgErrr = true
              this.$toast.open({
                  message: '<p class="text-left">Debes llenar todos los campos</p>',
                  type: 'error',
                  position: 'top'
              });
          }

        },
      validateFields ( value, type ) {
        let result = true;
        let regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // let regExpMobil = /^[0-9]{12,13}$/;

        if ( type === 'email') {
          if ( !regExpEmail.test( value ) ) {
            result = false;
          } else {
            result = true;
          }
        }
          if ( type === 'checkBox') {
              if ( !value ) {
                  result = false;
              } else {
                  result = true;
              }
          }
        return result
      },
      getTrack() {
        console.log('getTract');
          this.$gtag.event('YOLEO ONLINE', {
              'event_category': 'LANDING PAGE',
              'event_label': 'Pagína de inicio',
              'value': 'Formulario contacto'
          })
      }
  },
  computed: {
    nameValid () {
        return !(this.user_names === '')
    },
    institutionValid () {
    return !(this.user_institution === '')
    },
    jobValid () {
    return !(this.user_job === '')
    },
    cityValid () {
    return !(this.user_city === '')
    },
    countryValid(){
      return !(this.user_country === '')
    },
    autoModelValid(){
      return !(this.model_type === '')
    },
    autoYearValid(){
      return !(this.year_type === '')
    },
    emailValid () {
      let valid = false;
      if (this.user_email === null) {
        valid = true
      }else if(!this.emailNotExist) {
        valid = false;
      }else {
        valid = this.validateFields ( this.user_email , 'email' );
      }
      return valid
    },
    mobileValid(){
      return !(this.user_mobile === '')
    },
  },
  watch: {

  },
  mounted() {

  }
}
</script>
<style lang="sass">
.multiselect__tags
  border-radius: 0
.multiselect__option--highlight:after
  background: #ff6a6adb !important
  content: "" !important
  color: #fff !important
  top: 0 !important
  right: 0 !important
  position: absolute !important
  line-height: 40px !important
  padding-right: 6px !important
  padding-left: 6px !important
  font-size: 9px !important
.multiselect__option--selected:after
  content: "" !important
.body--wrap.validate-input .multiselect__tags .multiselect__placeholder
  opacity: 0 !important
  position: absolute
.body--wrap .multiselect .multiselect__single
  display: block !important
  @media all and (max-width: 991px)
    font-size: .8em
</style>
<style lang="sass" scoped>
  @import "../../../scss/utilities/variables"
  .terms-accept
      display: flex
      align-items: flex-start
      justify-content: center
      margin-bottom: .81em
      p
        margin-left: 1em
        margin-bottom: 4px
        font-size: 0.8em
        text-align: left
        line-height: 1.6
        a
          color: $whiteHex
          &:hover
            color: $whiteHex
            opacity: .5
      .custom-control
          position: relative
          min-height: 1em
          margin-left: 0
          height: 1em
          margin-top: 5px
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
              width: 1em
              height: 1em
              padding: 0
              &:before
                  width: 1em
                  height: 1em
                  position: absolute
                  display: block
                  top: 0
                  left: 0
                  pointer-events: none
                  content: ""
                  background-color: #fff
                  border: #adb5bd solid 1px
              &::after
                  width: 1em
                  height: 1em
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


      .alert-check
          .custom-control-label
              &:before
                  border: 1px solid $OrangeHex !important
          + span
              color: $OrangeHex
              a
                  color: $OrangeHex !important
  .btn--contact
    margin-bottom: 0
    background-color: $OrangeHex
    color: #fff
    font-size: 1.3em
    padding: 0.5rem 2.75rem
    border: 0
    border-bottom: 3px solid $OrangeHex !important
    border-radius: 3px
    transition: 0.3s !important
    &:hover
      background-color: #c64e0b
      border: 0 !important
      border-bottom: 3px solid #c64e0b !important
      transform: translate3d(0, -2px, 0) !important
      box-shadow: 0 18px 35px rgb(50 50 93 / 1%), 0 8px 15px rgb(0 0 0 / 7%) !important
      transition: 0.3s !important
    @media all and (max-width: 991px)
      width: 100%
  .ui-message-error
    color: $OrangeHex
    position: absolute
    left: 14px
    font-size: 11px
    bottom: -2px
    display: flex
    justify-content: center
    align-items: center
    text-align: left
    transition: 0.3s
    padding: 0 0 0
  .pr
    position: relative
  form
    padding: 2em 1em
    @media all and (max-width: 991px)
      margin-top: 0
    .text-head-contact
        font-size: 1.1em
        margin-bottom: 1.2em
        line-height: 1.4
    .alert-msg
        position: absolute
    .body--wrap
      width: 100%
      position: relative
      margin-bottom: 1.5em
      .focus-input2
        position: absolute
        display: flex
        width: 100%
        height: 100%
        top: 0
        left: 0
        pointer-events: none
        color: #999999
        justify-content: flex-start
        &:before
          opacity: 1
          left: 8px
          display: block
          position: absolute
          top: 16px
          line-height: 1.2
          transition: all 0.4s
          font-size: 1.3rem
        &:after
          content: attr(data-placeholder)
          display: block
          position: absolute
          line-height: 1.2
          transition: all 0.4s
          font-size: 1em
          font-weight: 400
          top: 14px
          left: 26px
          font-family: 'Poppins', sans-serif
        &.float
          &:after
              top: 6px !important
              font-size: 1rem
              left: 23px !important
              opacity: .8
          &:before
              top: 6px
              font-size: 1rem
              opacity: .8
      &.has-value
          .form--input
              border: .5px solid #55bcd6 !important
              color: #55bcd6 !important
              transition: 0.3s
              &.form--input[data-v-1819df9c]:-webkit-autofill
                  -webkit-text-fill-color: #55bcd6 !important
          .float
              color: #55bcd6 !important
      &.alert-validate
        .form--input
            border: .5px solid $OrangeHex !important
            color: $OrangeHex !important
            transition: 0.3s
            &.form--input[data-v-1819df9c]:-webkit-autofill
                -webkit-text-fill-color: $OrangeHex !important
        .focus-input2, .float
            color: $OrangeHex !important
    input.form--input
      width: 100%
      min-height: 45px
      display: block
      padding: 15px 4px 0px 8px
      border-radius: 0
      border: .5px solid #e8e8e8
      background: #242831
      color: #ffffff
      transition: 0.3s
      font-size: 14px
      &:-webkit-autofill
        -webkit-box-shadow: 0 0 0 30px rgb(36 40 49) inset !important
        -webkit-text-fill-color: #ffffff !important
      &:hover, &:focus, &:active
        -webkit-box-shadow: 0 0 0 30px rgb(36 40 49) inset !important
        -webkit-text-fill-color: #ffffff !important
      @media all and (max-width: 991px)
        font-size: .8em
      &:focus
        & + .focus-input2::before, .multiselect__input:focus + .focus-input2::before, .float:before
            top: 6px
            font-size: 1rem
            opacity: .8
        & + .focus-input2::after, .multiselect__input:focus + .focus-input2::after, .float:after
            top: 6px !important
            font-size: 1rem
            left: 23px !important
            opacity: .8
</style>

