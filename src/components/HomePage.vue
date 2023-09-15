<template>
  <div class="container">
    <div class="homepage">
      <form>
        <h1>Welcome to Clover Bank!</h1>
        <div class="button_cont">
          <button @click="onAdmin" class="bt1">Admin Login</button>
          <button @click="onCustomer" class="bt2">Customer Login</button>
        </div>
      </form>
    </div>
    <div class="image" style="background-color: white">
      <img src="../assets/home1.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // You can define data properties here if needed
      // For example:
      showAdminLogin: false,
      showCustomerLogin: false,
    };
  },
  methods: {
    onAdmin() {
      this.$router.push("/adminlogin");
    },
    onCustomer() {
      // this.$router.push('/customerlogin');
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: poppins;
}

body {
  background: #69af4f;
}
div.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: white;
  padding: 30px;
  width: 650px;
  height: 400px;
  box-shadow: 5px 10px rgb(26, 26, 26);
}
h1 {
  padding-bottom: 20px;
  text-align: center;
  padding-bottom: 60%;
  color: #69af4f;
  background-color: white;
}
.button_cont {
  display: grid;
  place-items: center;
  justify-content: center;
  bottom: 120px;
  position: absolute;
  margin-left: 13%;
  background-color: white;
}
.bt1 {
  color: black;
  padding: 8px 8px 8px 8px;
  font-size: 16px;
  background-color: white;
  border-radius: 18px;
  text-decoration: none;
}
.bt2 {
  color: black;
  padding: 8px 8px 8px 8px;
  font-size: 16px;
  background-color: white;
  border-radius: 18px;
}
.bt1:hover {
  background-color: #69af4f;
}
.bt2:hover {
  background-color: #69af4f;
}

img {
  width: 300px;
  background-color: white;
}
</style>
