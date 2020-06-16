<template>
  <div>
    <list-header
      bgColor="bg-orange-4"
    >Todo</list-header>

    <q-list
      separator
      bordered>
      <!-- <q-item-label header>Tasklist</q-item-label> -->
      <task
        v-for="(task, key) in tasksTodo"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
  </div>
</template>

<script>
export default {
  props: ['tasksTodo'],
  components: {
    task: require('components/Tasks/Task.vue').default,
    listHeader: require('components/Tasks/Shared/ListHeader.vue').default
  }
}
</script>
