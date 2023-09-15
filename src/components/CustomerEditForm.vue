<template>
  <div class="container mt-4">
    <h1>Edit Customer</h1>
    <div class="container mt-4">
      <!-- Add your customer edit form fields here -->
      <form @submit.prevent="updateRecords">
        <div class="form-group">
          <label for="customerName">Name</label>
          <input
            type="text"
            class="form-control"
            id="customerName"
            v-model="customername"
          />
        </div>
        <div class="form-group">
          <label for="customerAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="customerAddress"
            v-model="customeraddress"
          />
        </div>
        <div class="form-group">
          <label for="customerMobile">Mobile</label>
          <input
            type="text"
            class="form-control"
            id="customerMobile"
            v-model="mobile"
          />
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
    </div>
    <div id="test">TEST</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      customername: "",
      customeraddress: "",
      mobile: "",
      currentCustomerID: null,
    };
  },
  methods: {
    getCustomerData(customerID) {
      axios
        .get(`http://localhost:8082/api/v1/customer/getCustomer/${customerID}`)
        .then(({ data }) => {
          this.customername = data.customername;
          this.customeraddress = data.customeraddress;
          this.mobile = data.mobile;
        })
        .catch((error) => {
          console.error("Error fetching customer data:", error);
        });
    },
    updateRecords() {
      const bodyData = {
        customerid: this.currentCustomerID,
        customername: this.customername,
        customeraddress: this.customeraddress,
        mobile: this.mobile,
      };

      axios
        .put(
          `http://localhost:8082/api/v1/customer/${bodyData.customerid}`,
          bodyData
        )
        .then((response) => {
          console.log(response.data);
          alert("Customer Updated Successfully");
          this.customername = "";
          this.customeraddress = "";
          this.mobile = "";
          this.$router.push({ name: "customer-lists" }); // Navigate back to the customer list
        })
        .catch((error) => {
          console.error("Error updating customer:", error);
        });
    },
  },
  mounted() {
    // Fetch customer data for editing when the component is mounted
    this.currentCustomerID = this.$route.params.id;
    this.getCustomerData(this.currentCustomerID);
  },
};
</script>
<style lang="css">
#test {
  color: var(--color-primary);
}
</style> 
