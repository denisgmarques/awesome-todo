<template>
  <q-page padding>
    <ul>
      <task
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        :index="index"
      >
      </task>
    </ul>
  </q-page>
</template>
<script>
// import Task from 'components/Task.vue'

export default {
  data () {
    return {
      tasks: [
        {
          id: 1,
          name: 'Lavar a corrente',
          dueDate: '2020/03/25',
          dueTime: '18:30'
        },
        {
          id: 2,
          name: 'Passar óleo',
          dueDate: '2020/03/25',
          dueTime: '18:40'
        },
        {
          id: 3,
          name: 'Esticar a corrente',
          dueDate: '2020/03/25',
          dueTime: '18:55'
        }
      ]
    }
  },

  methods: {
    deleteTask (index) {
      this.tasks.splice(index, 1)
    }
  },

  components: {
    task: require('components/Task.vue').default
  }
}
</script>

<style scoped>
</style>
