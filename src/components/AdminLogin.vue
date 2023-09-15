<template>
  <div id="popup" class="overlay">
    <div class="wrapper">
      <a class="close">&times;</a>
      <div class="column details">
        <div class="signin">
          <h1>Admin Sign in</h1>
          <input type="text" v-model="username" placeholder="Username" />
          <input type="password" v-model="password" placeholder="Password" />
          <a @click="forgotPassword">Forgot Password?</a>
          <button @click="onDash">Sign in</button>
        </div>
      </div>

      <div class="column content">
        <div class="signin">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <div class="admin">
      <h1>Admin Sign in</h1>
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <a @click="forgotPassword">Forgot Password?</a>
      <button @click="onDash">Sign in</button>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      username: "user",
      password: "pass",
    };
  },
  methods: {
    onDash() {
      if (this.username === "user" && this.password === "pass") {
        this.$router.push("/dash");
      } else {
        this.$router.push("/adminlogin");
        alert("Username or password is invalid");
      }
    },
    forgotPassword() {
      // Handle forgot password logic here
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #d5dbdb;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  line-height: 1.5em;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #d5dbdb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay:target {
  opacity: 1;
  visibility: visible;
}

.wrapper {
  position: relative;
  width: 50%;
  min-height: 400px;
  display: flex;
}

.close {
  position: absolute;
  right: 20px;
  top: 0;
  font-size: 30px;
  color: black;
  font-weight: bold;
  transition: all 200ms;
}

.column {
  width: 50%;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.details {
  background: #69af4f;
}

.details h1 {
  color: #10213e;
}

.signin {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  background: #eee;
  border: none;
  padding: 12px 15px;
  border: 2px;
  margin: 8px 0;
  width: 100%;
  font-family: inherit;
  color: #0d3e6a;
  font-size: inherit;
}

input:focus {
  outline-color: #0d3e6a;
}

a {
  color: #10213e;
  text-decoration: none;
  font-size: 14px;
  margin: 15px 0;
}

.form-submit {
  background: #10213e;
  border: none;
  border-radius: 20px;
  color: #fff;
  padding: 12px 45px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 80ms ease-in;
}

/* .form-submit:hover{
    background-color:#35e868 ;
    transform: scale(1.1);
} */

/* .signup .form-submit{
    margin-top: 15px;
} */

#signin {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: #10213e;
  font-weight: bold;
  cursor: pointer;
}

/* span{
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.5em;
}*/
.content {
  background: #c7cdc9;
  color: black;
  text-align: center;
}

@media only screen and (max-width: 900px) {
  .wrapper {
    width: 80%;
  }
}

@media only screen and (max-width: 480px) {
  .wrapper {
    width: 80%;
    flex-direction: column-reverse;
  }

  .column {
    width: 100%;
  }
  .close {
    top: 0;
    right: 10px;
    margin: 0;
  }
}
</style>
