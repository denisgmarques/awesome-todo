<template>
  <div
    class="row q-mb-sm">
    <q-input
      :value="dueDate"
      @input="$emit('update:dueDate', $event)"
      outlined
      clearable
      label="Due date">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy>
            <q-date
              :value="dueDate"
              @input="$emit('update:dueDate', $event)"
              mask="DD/MM/YYYY"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['dueDate']
}
</script>
