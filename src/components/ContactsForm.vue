<template>
    <div class="contact-us">
        <div class="container">
            <div class="contact-us__inner">
                <div class="contact-us__content v-form">
                    <h3 class="contact-us__title white-color">Contact Us</h3>
                    <form @submit.prevent="submit">
                        <div class="contact-us__input-wrapper">
                            <input 
                                class="contact-us__input white-color" 
                                :class="{'contact-us__input--error': $v.userName.$error}"
                                type="text" 
                                id="name"
                                v-model="$v.userName.$model">
                            <label class="contact-us__label" for="name">Name</label>
                            <span v-if="$v.userName.$error && $v.userName.maxLength" class="red-color contact-us__error-message">Field is empty or contains invalid characters</span>
                            <span v-if="!$v.userName.maxLength" class="red-color contact-us__error-message">Maximum field length 30 characters</span>
                        </div>
                        <div class="contact-us__input-wrapper">
                            <the-mask 
                                class="contact-us__input white-color" 
                                :class="{'contact-us__input--error': $v.userPhone.$error}"
                                id="phone"
                                mask="+(380) ##-###-####" 
                                type="tel" 
                                :masked="true"
                                v-model="$v.userPhone.$model"/>
                            <label class="contact-us__label" for="phone">Phone</label>
                            <span v-if="$v.userPhone.$error" class="red-color contact-us__error-message">Field is required</span>
                        </div>
                        <div class="contact-us__input-wrapper">
                            <input 
                            class="contact-us__input white-color" 
                            :class="{'contact-us__input--error': $v.userEmail.$error}"
                            type="text" 
                            id="email"
                            v-model.lazy="$v.userEmail.$model">
                            <label class="contact-us__label" for="email">E-mail</label>
                            <span v-if="$v.userEmail.$error" class="red-color contact-us__error-message">Field is required</span>
                        </div>
                        <div class="contact-us__checkbox-wrapper">
                            <input 
                            class="contact-us__checkbox" 
                            id="checkbox" 
                            type="checkbox"
                            v-model="userPolicy"
                            @change="$v.userPolicy.$touch()">
                            <label 
                                class="contact-us__checkbox-label white-color" 
                                :class="{'contact-us__checkbox-label--error': $v.userPolicy.$error}"
                                for="checkbox">
                            I agree the processing of personal data</label>
                        </div>
                        <button 
                            class="contact-us__button" 
                            type="submit" 
                            :disabled="isDisabled"><span>Get in touch</span></button>
                    </form>
                </div>
                <div class="contact-us__info">
                    <p class="contact-us__text">Please tell us more about your request and give us info about your company and country</p>
                </div>
                <div class="contact-us__loader" v-show="isLoader">
                    <base-loader></base-loader>
                </div>
                <div class="contact-us__result" v-show="isResult">
                    <img v-if="resultStatus" class="contact-us__result-img" src="~@/assets/images/success.png" alt="">
                    <img v-else class="contact-us__result-img" src="~@/assets/images/error.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import baseLoader from './Base/BaseLoader'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    name: 'ContactsForm',
    data() {
        return {
            userPhone: '+(380)',
            userName: '',
            userEmail: '',
            userPolicy: false,
            isLoader: false,
            isDisabled: false,
            isResult: false,
            resultStatus: true
        }
    },
    components: {
        baseLoader
    },
    validations: {
        userPhone: {
            required,
            minLength: minLength(18)
        },
        userName: {
            required,
            correctName:  (value) => {
                if (value.trim().length === 0) return false;
                return value.replace(/[a-zA-z ]/g, "").length === 0
            },
            maxLength: maxLength(30)
        },
        userEmail: {
            required, 
            email
        },
        userPolicy: {
            sameAs: (value) => value
        }
    },
    methods: {
        submit() {
            const axios = require('axios');
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log('Error')
            } else {
                this.isLoader = true;
                this.isDisabled = true;
                axios.post('http://httpbin.org/post', {
                    userName: this.userName,
                    userPhone: this.userPhone,
                    userEmail: this.userEmail
                })
                .then((response) => {
                    console.log(response)
                    this.resultStatus = true;
                    setTimeout(() => {
                        this.isLoader = false;
                        this.isResult = true;
                    }, 1000)
                    setTimeout(()=> {
                        this.isResult = false;
                        this.isDisabled = false;
                    },2500)
                    
                })
                .catch((e) => {
                    console.log(e)
                    this.resultStatus = false;
                    setTimeout(() => {
                        this.isLoader = false;
                        this.isResult = true;
                    }, 1000)
                    setTimeout(()=> {
                        this.isResult = false;
                        this.isDisabled = false;
                    },2500)
                }) 
            }
        }
    }

}
// .replace(/[a-zA-z ]/g, "")
</script>


<style lang="scss" scoped>
@import "~@/assets/css/variables.scss";

.contact-us {
    background-image: url(~@/assets/images/green-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    &__inner {
        display: flex;
        padding: 95px 0 100px;
        position: relative;
    }
    &__info {
        padding: 75px 10px 20px 30px;
        flex-basis: 50%;
    }
    &__content {
        flex-basis: 50%;
        padding-right: 40px;
    }
    &__text {
        font-size: 18px;
        line-height: 34px;
        @media (max-width: 1100px) {
            font-size: 16px;
            line-height: 30px;
        }
    }
    &__title {
        margin-bottom: 30px;
    }
    &__input {
        width: 100%;
        padding: 20px 20px 19px 100px;
        font-size: 18px;
        background: none;
        border: none;
        border-bottom: 1px solid #040707;
        outline: none;
        transition: all .5s;
        &--error {
            border-bottom: 1px solid $base-error-c !important;
        }
        &--error + label {
            color: $base-error-c !important;
        }
        &:focus, &:hover {
            border-bottom: 1px solid $base-white-c;
        }
        &:focus + label, &:hover + label {
            color: $base-white-c
        }
        &:hover + label {
            left: 5px;
        }
    }
    &__input-wrapper {
        position: relative;
    }
    &__label {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        transition: all .5s;
    }
    &__checkbox {
        display: none;
        &:checked + label::before {
            background-image: url(~@/assets/images/checked.png);
            background-position: center;
        }
    }
    &__checkbox-wrapper {
        margin: 20px 0 45px;
    }
    &__checkbox-label {
        display: inline-block;
        position: relative;
        padding-left: 35px;
        cursor: pointer;
        &::before {
            content: "";
            display: inline-block;
            width: 15px;
            height: 15px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            background: $base-white-c;
        }
        &--error {
            &::before {
                width: 13px;
                height: 13px;
                border: 1px solid $base-error-c;
            }
        }
    }
    &__button {
        display: inline-block;
        position: relative;
        width: 220px;
        min-height: 60px;
        text-transform: uppercase;
        font-size: 11px;
        color: #fff;
        background-color: $base-grey-c;
        transition: all 0.5s;
        outline: none;
        cursor: pointer;
        span {
            z-index: 2;
            position: relative;
        }
        &:disabled {
            cursor: not-allowed;
            opacity: .5;
        }
        &:before{
            position: absolute;
            content: '';
            width: 0%; height: 100%;
            background: #008c28;
            top: 0; left: 50%;
            transition: all 300ms ease;
        }
        
        &:hover{
            box-shadow: 0px 4px 10px 2px rgba(black, 0.2);
            &:before{
                width: 100%; height: 100%;
                top: 0; left: 0%;
                transition: all 300ms ease;
            }
        }
    }
    &__error-message {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        font-size: 14px;
    }
    &__loader, &__result {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 50%;
        height: 50%;
        background-image: radial-gradient(#4bffff 0%, transparent 70%);
        border-radius: 50%;
    }
    &__result-img {
        width: 100px;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
        transform: translateY(-50%)
    }
}
@media (max-width:1100px) {
    .contact-us {
        &__inner {
            flex-direction: column;
        }
        &__content {
            padding-right: 0;
        }
        &__info {
            padding: 75px 10px 20px 10px;
            text-align: center;
        }
    }
}
@media (max-width:767px) {
    .contact-us {
        &__loader, &__result {
            width: 100%;
            height: 200px;
        }
        &__result-img {
            width: 80px;
        }
        &__inner {
            padding: 35px 0 55px;
        }
    }
}
@media (max-width: 520px) {
    .contact-us {
        &__title {
            margin-bottom: 20px;
        }
        &__info {
            padding: 45px 10px 10px;
        }
        &__label, &__input {
            font-size: 16px;
        }
        &__input {
            padding: 15px 20px 15px 80px;
        }
        &__checkbox-wrapper {
            margin: 20px 0 35px;
        }
        &__checkbox-label {
            font-size: 12px;
            padding-left: 30px;
            &::before {
                width: 13px;
                height: 13px;
            }
            &--error {
                &::before {
                    width: 11px;
                    height: 11px;
                }
            }
        }
        &__error-message {
            font-size: 12px;
        }
        &__button {
            left: 50%;
            transform: translateX(-50%);
        }
    }
}
</style>