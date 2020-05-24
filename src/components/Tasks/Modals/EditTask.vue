<template>
  <q-card>
    <modal-header>Edit Task</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section>

        <modal-task-name
          :name.sync="taskToSubmit.name"
          ref="modalTaskName"
        />

        <modal-due-date :dueDate.sync="taskToSubmit.dueDate" />

        <modal-due-time
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
        />

      </q-card-section>

      <modal-buttons />
     </q-form>

  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],
  data () {
    return {
      taskToSubmit: {}
    }
  },

  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm () {
      if (this.submitTask.name) { // if (!this.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      console.log('submitTask')
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.updateTask({ id: this.id, updates: this.taskToSubmit })
        this.$emit('close')
      }
    }
  },

  components: {
    'modal-header': require('components/Tasks/Shared/ModalHeader.vue').default,
    'modal-task-name': require('components/Tasks/Shared/ModalTaskName.vue').default,
    'modal-due-date': require('components/Tasks/Shared/ModalDueDate.vue').default,
    'modal-due-time': require('components/Tasks/Shared/ModalDueTime.vue').default,
    'modal-buttons': require('components/Tasks/Shared/ModalButtons.vue').default
  },

  mounted () {
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>
