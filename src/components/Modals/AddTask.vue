<template>
  <q-card>
    <q-card-section
      class="row"
    >
      <div class="text-h6">Add Task </div>
      <q-space />
      <q-btn
        flat
        round
        dense
        icon="close"
        v-close-popup
      />
    </q-card-section>

    <q-card-section>
      <div class="row q-mb-sm">
        <q-input
          v-model="taskToSubmit.name"
          outlined
          class="col"
          label="Name" />
      </div>

      <div class="row q-mb-sm">
        <q-input
          v-model="taskToSubmit.dueDate"
          outlined
          label="Due date">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy>
                <q-date
                  v-model="taskToSubmit.dueDate"
                  mask="DD/MM/YYYY"
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="row q-mb-sm">
        <q-input
          v-model="taskToSubmit.dueTime"
          outlined
          label="Due time">
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
        flat
        label="Save"
        color="primary"
        v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
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
  }
}
</script>
