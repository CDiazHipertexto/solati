<template lang="pug">
    //label Validation
    div.label--float
        div(style='position: relative', :class='validateClass')
          input(:type='typeInput', v-model='inputValue', @focus='handleInputFocus(false)', :id='id' , @blur='handleInputFocus(true)' @textchange="(text)=>{$emit('input', text.value )}").register_form_username_input.unlogged-input
          label.unlogged-label(:style="{'color': placeholderColor, 'fontSize':unActive === null ? fontSize+'rem' : unActive? fontSize+'rem':'', 'marginTop': unActive? textOffsetBot +'rem':''}", :class='{placeholder_active:unActive}',)
            i( :class='icon' ).fas
            span(v-html=" placeholder" )

</template>

<script>

    export default {
        name: "label-validation",
        components: {  },
        data: () => ({
            unActive: null,
            inputValue: '',
            closeShow: false,
        }),
        props: {
            icon: {
                type: String
            },
            placeholder: {
                type: String,
                default: 'Datos',
            },
            value: {},
            maxlength: {
                type: Number,
                default: 11,
            },
            type: {
                type: String,
                default: 'text',
            },
            textColor: {
                type: String,
                default: 'blue',
            },
            lineColor: {
                type: String,
                default: '#acacae',
            },
            closeBtnColor: {
                type: String,
                default: '#acacae',
            },
            placeholderColor: {
                type: String,
                default: '#acacae',
            },
            fontSize: {
                type: Number,
                default: 1.3,
            },
            textOffsetBot: {
                type: Number,
                default: .9,
            },
            typeInput: {
                type: String,
                default: 'password',
            },
            validateClass: {
                type: String
            },
            id: {
                type: String
            }
        },
        computed: {
          isActive () {
            return false
          }
        },
        watch: {
          inputValue(value) {
              this.$emit('input', value);
              this.handleCloseBtn(value);
          },
          value(val){
              this.inputValue = val;
          }
        },
        mounted() {
            this.inputValue = this.value;
            // this.handleCloseBtn(this.inputValue);
            this.unActive = this.inputValue === '';
        },
        methods: {
            handleInputFocus(flag) {
                this.unActive = this.inputValue === '' && flag;
            },
            handleCloseBtn(data) {
                this.closeShow = (data === '');
            },
            handleClear() {
                this.inputValue = '';
                this.$refs.input.focus();
            },
        },
    }
</script>


<style lang="sass" scoped>
  .label--float
    i
      margin-right: .4em
</style>
<style lang="sass">
    @import "../../../scss/utilities/variables"

    .label--float
      font-family: "Raleway", sans-serif
      span
        font-family: "Lato", sans-serif

      input, textarea, select
          margin-bottom: 2em
          line-height: 1.15
          font-size: 14px
          padding: .4em
          width: 100%

      .magic_input_wapper
          position: relative
          i
              cursor: pointer
              position: relative
              z-index: 3
              margin-top: -35px
              transform: translateX(0px)
              float: right
              display: block
              height: 16px
              width: 16px
              font-size: 22px
              transition: .3s all ease-in-out
              background-size: contain
              background-repeat: no-repeat
              font-style: normal
              background-position: center center

          input
              font-size: 25px
              padding-right: 30px
              text-indent: 0
              letter-spacing: 1px


      .placeholder
          transition: .3s all ease-in-out
          position: absolute
          transform: translateY(-20px)
          z-index: 1
          color: royalblue
          opacity: .7
          font-style: normal

      .placeholder_active
          opacity: 1

      input
          &:-webkit-autofill
              background-color: transparent !important

          &[type="text"], &[type="password"]
              display: block
              border: none
              background-color: transparent
              border-bottom: 2px solid #acacae
              width: 100%
              outline: none
              z-index: 2
              position: relative
</style>
