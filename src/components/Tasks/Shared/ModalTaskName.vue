<template>
  <div class="row q-mb-sm">
    <q-input
      :value="name"
      @input="$emit('update:name', $event)"
      :rules="[val => !!val || 'Field is required']"
      ref="name"
      outlined
      class="col"
      autofocus
      clearable
      label="Name" />
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>
