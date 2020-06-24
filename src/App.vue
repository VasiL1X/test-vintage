<template>
  <div id="app">
    <vue-contacts></vue-contacts>
    <vue-office></vue-office>
    <vue-contacts-form></vue-contacts-form>
  </div>
</template>

<script>
import vueContacts from '@/components/Contacts'
import vueOffice from '@/components/OurOffice'
import vueContactsForm from '@/components/ContactsForm'

export default {
  name: 'App',
  components: {
    vueContacts,
    vueOffice,
    vueContactsForm
  }
}
</script>

<style lang="scss">
@import "~@/assets/css/variables.scss";
  #app {
    color: $base-black-c;
  }
</style>
