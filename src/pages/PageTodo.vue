<template>
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered>
      <q-item-label header>Tasklist</q-item-label>

      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{ 'text-strike' : task.completed }"
          >{{ task.name }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
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
      </q-item>
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
