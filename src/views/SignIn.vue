<template>
  <div class="body">
    <div>
      <div class="form-group row">
        <label for="FirstName" class="col-sm-2 col-form-label">Name:</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="FirstName"
            placeholder="John Doe"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="Signemail" class="col-sm-2 col-form-label">Email:</label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            id="Signemail"
            placeholder="john@doe.com"
          />
        </div>
      </div>
      <div>
        <p>
          <input type="checkbox" name="check" id="check" />
          Do you agree to send notification to the owner of the page of your
          presence?
        </p>
      </div>
      <button class="btn btn-primary">Enter</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SignIn",
  data() {
    return {
      name: "tolulope",
    };
  },
};
</script>

<style scoped>
.body {
  background-color: rgba(61, 125, 128, 0.089);
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  color: whitesmoke;
}
</style>
