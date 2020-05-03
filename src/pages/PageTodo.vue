<template>
  <q-page class="q-pa-md">
    <q-list
      v-if="Object.keys(tasks).length"
      separator
      bordered>
      <!-- <q-item-label header>Tasklist</q-item-label> -->
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>

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
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
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
    task: require('components/Tasks/Task.vue').default,
    addTask: require('components/Modals/AddTask.vue').default
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
