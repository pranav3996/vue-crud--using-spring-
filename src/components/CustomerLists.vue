<template>
  <div class="container mt-4">
    <h1>Customer List</h1>

    <div class="container mt-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Mobile</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="customerItem in customerArray"
            :key="customerItem.customerid"
          >
            <th scope="row">{{ customerItem.customerid }}</th>
            <td>{{ customerItem.customername }}</td>
            <td>{{ customerItem.customeraddress }}</td>
            <td>{{ customerItem.mobile }}</td>
            <td>
              <router-link
                :to="{
                  name: 'customer-edit',
                  params: { id: customerItem.customerid },
                }"
                class="btn btn-success"
              >
                Edit
              </router-link>
              <button @click="setDelete(customerItem)" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link
      to="/customer-crud"
      class="btn btn-primary"
      style="margin-right: 10px"
      >Add Customer</router-link
    >
    <router-link to="/dash" class="btn btn-primary" style="margin-right: 10px">
      Go to DashBoard
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      customerArray: [],
    };
  },
  mounted() {
    this.getAllCustomer();
  },
  methods: {
    getAllCustomer() {
      var page = "http://localhost:8082/api/v1/customer/getAllCustomer";
      axios.get(page).then(({ data }) => {
        console.log(data);
        this.customerArray = data;
      });
    },
    setUpdate(data) {
      this.customername = data.customername;
      this.customeraddress = data.customeraddress;
      this.mobile = data.mobile;
      this.currentCustomerID = data.customerid;
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
          // this.getAllCustomer();
          this.customername = "";
          this.customeraddress = "";
          this.mobile = 0;
        })
        .catch((error) => {
          console.error("Error updating customer:", error);
        });
    },
    setDelete(data) {
      var url = `http://localhost:8082/api/v1/customer/deletecustomer/${data.customerid}`;
      axios.delete(url);
      alert("Customer Deleted Successfully");
      this.getAllCustomer();
    },
  },
};
</script>

