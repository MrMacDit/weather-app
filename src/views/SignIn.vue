<template>
  <div class="body">
    <div>
      <!-- User's name -->
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

      <!-- Users Email -->
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

      <!-- User's Password -->
      <div class="form-group row">
        <label for="password" class="col-sm-2 col-form-label">Password:</label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="************"
          />
        </div>
      </div>

      <!-- User's confirm Password -->
      <div class="form-group row">
        <label for="c_password" class="col-sm-2 col-form-label"
          >Confirm Password:</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="c_password"
            placeholder="************"
          />
        </div>
      </div>
      <div>
        <p style="color: grey; text-align: center">
          <em
            ><b
              >Please note, a notification will be sent to the owner of the page
              of your presence?</b
            ></em
          >
        </p>
      </div>
      <div class="button-div">
        <button class="btn btn-primary">Sign In</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SignIn",
  data() {
    return {};
  },
};
</script>

<style scoped>
.body {
  background-color: rgba(61, 125, 128, 0.089);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15vh;
  color: whitesmoke;
}
.row {
  margin: 15px auto;
  padding-top: 12px;
}
.button-div {
  width: 15%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 12px;
}
</style>
