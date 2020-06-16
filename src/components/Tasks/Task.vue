<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" @input="updateTask({ id: id, updates: { completed: !task.completed } })"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'text-strike' : task.completed }"
      >{{ task.name }}</q-item-label>
    </q-item-section>

    <q-item-section
      v-if="task.dueDate"
      side
      top>
      <div class="row">
        <div class="column justify-center">
          <q-icon
            name="event_note"
            size="18px"
            class="q-mr-xs"
          />
        </div>
        <div class="column">
          <q-item-label
            caption
            class="row justify-end"
          >
            <small>{{ task.dueDate }}</small>
          </q-item-label>
          <q-item-label
            caption
            class="row justify-end"
          >
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side top>
      <div class="row">
        <q-btn
          @click.stop="showEditTask = true"
          flat
          round
          color="primary"
          icon="edit"
          dense
        />
        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          color="red"
          icon="delete"
          dense
        />
      </div>

    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task
        @close="showEditTask = false"
        :task="task"
        :id="id"
      />
    </q-dialog>

  </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],

  data () {
    return {
      showEditTask: false
    }
  },

  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete this task?',
        ok: {
          push: true
        },
        cancel: {
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },

  components: {
    'edit-task': require('components/Tasks/Modals/EditTask.vue').default
  }
}
</script>
