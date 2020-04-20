<template>
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered>
      <q-item-label header>Tasklist</q-item-label>
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('tasks', ['tasks'])
    // tasks () {
    //   return this.$store.getters['tasks/tasks']
    // }
  },

  components: {
    task: require('components/Tasks/Task.vue').default
  }
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
