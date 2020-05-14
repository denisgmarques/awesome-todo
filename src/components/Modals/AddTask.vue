<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section>

        <modal-task-name :name.sync="taskToSubmit.name" />

        <modal-due-date :dueDate.sync="taskToSubmit.dueDate" />

        <div
          v-if="taskToSubmit.dueDate"
          class="row q-mb-sm">
          <q-input
            v-model="taskToSubmit.dueTime"
            outlined
            clearable
            label="Due time"
            class="col">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy>
                  <q-time
                    v-model="taskToSubmit.dueTime"
                    mask="HH:mm"
                    landscape
                    format24h
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          label="Save"
          color="primary"
          type="submit"
        />
      </q-card-actions>

      <pre>{{ $refs }}</pre>
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
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    }
  },

  components: {
    'modal-header': require('components/Tasks/Shared/ModalHeader.vue').default,
    'modal-task-name': require('components/Tasks/Shared/ModalTaskName.vue').default,
    'modal-due-date': require('components/Tasks/Shared/ModalDueDate.vue').default
  }
}
</script>
