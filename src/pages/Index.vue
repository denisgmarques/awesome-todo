<template>
  <q-page padding>
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    {{ message }}
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: 'Olá mundão lindo!',
    };
  },
  name: 'PageIndex',
};
</script>
