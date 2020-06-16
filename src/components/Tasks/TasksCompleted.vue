<template>
  <div>
    <list-header
      bgColor="bg-green-4"
    >Completed</list-header>

    <q-list
      separator
      bordered>
      <!-- <q-item-label header>Tasklist</q-item-label> -->
      <task
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
  </div>
</template>

<script>
export default {
  props: ['tasksCompleted'],
  components: {
    task: require('components/Tasks/Task.vue').default,
    listHeader: require('components/Tasks/Shared/ListHeader.vue').default
  }
}
</script>
<style>
  .list-header {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>
