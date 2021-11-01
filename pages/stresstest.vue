<template>
  <div>

    <p>{{$data.components.length * $data.items}} lyne components rendered on this page</p>

    <div
      v-for="(component, index) in $data.components"
      :key="index"
    >

      <div
        v-for="item in $data.items"
        :key="item"
      >
        <p>{{component}} {{item}}</p>
        <component v-bind:is="component"></component>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      components: [
        'Accordion',
        'Button',
        'Clock',
        'Heroteaser',
        'ImageWrapper',
        'Logo',
        'Panel',
        'Pearlchain',
        'Signet',
        'Title'
      ],
      items: 50
    };
  }
}
</script>
