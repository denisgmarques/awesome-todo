<template>
  <q-page padding>
    <button
      style="position: absolute; right: 10px"
      @click="counter++"
    >
      {{ counter }}
    </button>
    <input
      v-model="message"
      v-autofocus
      @keyup="handleKeyup"
      @keyup.enter="alertMessage"
      :class="{ 'error' : message.length > 22 }"
      ref="messageInput"
    />
    <button @click="clearMessage">Clear</button>

    <div>{{ message.length }}</div>

    <h5
      v-if="message.length"
      class="border-grey">{{ message }}
    </h5>
    <h6 v-else>No message entered ♊</h6>

    <hr>

    <p>Uppercase message: {{ messageUppercase }}</p>
    <p>Lowercase message: {{ message | messageLowercase }} </p>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      message: 'I love Vue.js so hard!',
      counter: 0
    }
  },

  computed: {
    messageUppercase () {
      console.log('messageUppercase was fired')
      return this.message.toUpperCase()
    }
  },

  methods: {
    clearMessage () {
      this.message = ''
    },

    handleKeyup (e) {
      console.log(e)
      if (e.keyCode === 27) {
        this.clearMessage()
      }
    },

    alertMessage () {
      alert(this.message)
    }
  },

  filters: {
    messageLowercase (value) {
      return value.toLowerCase()
    }
  },

  directives: {
    autofocus: {
      inserted (el) {
        el.focus()
      }
    }
  },

  // beforeCreate () {
  //   console.log('before create')
  // },

  // created () {
  //   console.log('created')
  // },

  // beforeMount () {
  //   console.log('before mount')
  // },

  mounted () {
    console.log(this.$refs)
    this.$refs.messageInput.className = 'bg-green'
  }

  // beforeUpdate () {
  //   console.log('before update')
  // },

  // updated () {
  //   console.log('updated')
  // },

  // beforeDestroy () {
  //   console.log('before destroy')
  // },

  // destroyed () {
  //   console.log('destroyed')
  // }
}
</script>

<style scoped>
  .border-grey {
    border: 1px solid grey
  }
  input, button {
    font-size: 23px;
  }
  .error {
    color: red;
    background: pink;
  }
</style>
