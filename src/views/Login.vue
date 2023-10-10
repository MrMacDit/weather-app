<template>
  <div>
    <div>
      <label for="email">Email: {{ name }}</label>
      <input type="text" name="email" id="email" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="text" name="password" id="password" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Login",
  data() {
    return {
      name: "tolulope",
    };
  },
};
</script>
