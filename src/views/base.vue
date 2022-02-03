<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      arr1: [1, 2, 3, 4],
    };
  },
  components: {},
  methods: {
    fn() {
      let a1 = [12, 3, 4];
      a1.filter((item) => item > 1);
    },
  },
};
</script>

<style scoped>
</style>
