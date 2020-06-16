<template>
  <q-page class="q-pa-md">
    <tasks-todo
      v-if="Object.keys(tasksTodo).length"
      :tasksTodo="tasksTodo"
    />

    <tasks-completed
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted"
    />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      showAddTask: true
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
    // tasks () {
    //   return this.$store.getters['tasks/tasks']
    // }
  },

  methods: {
    created () {
      console.log('mapGetters')
      console.log(this.mapGetters)
    }
  },

  components: {
    addTask: require('components/Tasks/Modals/AddTask.vue').default,
    tasksTodo: require('components/Tasks/TasksTodo.vue').default,
    tasksCompleted: require('components/Tasks/TasksCompleted.vue').default
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
