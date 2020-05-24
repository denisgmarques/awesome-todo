<template>
  <q-card>
    <modal-header>Add Task</modal-header>

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
  data () {
    return {
      taskToSubmit: {
        name: '',
        completed: false,
        dueDate: '',
        dueTime: ''
      }
    }
  },

  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm () {
      if (this.submitTask.name) { // if (!this.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      console.log('submitTask')
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.addTask(this.taskToSubmit)
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
  }
}
</script>
