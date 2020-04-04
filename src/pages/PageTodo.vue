<template>
  <q-page class="q-pa-md">
    <q-list bordered>
      <q-item-label header>Tasklist</q-item-label>

      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ task.name }}</q-item-label>
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
export default {
  data () {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to supermarket',
          completed: false,
          dueDate: '05/04/2020',
          dueTime: '18:30'
        },
        {
          id: 2,
          name: 'Get bananas',
          completed: false,
          dueDate: '05/04/2020',
          dueTime: '18:31'
        },
        {
          id: 3,
          name: 'Get apples',
          completed: false,
          dueDate: '05/04/2020',
          dueTime: '18:32'
        }
      ]
    }
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
