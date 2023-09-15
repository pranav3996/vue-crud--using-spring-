<template>
  <div class="container mt-4">
    <div class="card">
      <h1>Customer Registration</h1>
      <form>
        <div class="form-group">
          <label>Name</label>
          <input
            v-model="customername"
            class="form-control"
            id="name"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <label>Address</label>
          <input
            v-model="customeraddress"
            class="form-control"
            id="address"
            placeholder="Enter Address"
          />
        </div>
        <div class="form-group">
          <label>Mobile</label>
          <input
            v-model="mobile"
            class="form-control"
            id="mobile"
            placeholder="Enter Mobile"
          />
        </div>
        <button @click.prevent="save" class="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  </div>

  <div class="container mt-4">
    <h1>View Customer</h1>

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
            <button @click="setUpdate(customerItem)" class="btn btn-success">
              Edit
            </button>
            <button @click="setDelete(customerItem)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link
      to="/dash"
      class="btn btn-primary mt-4"
      style="margin-right: 10px"
    >
      Go to DashBoard
    </router-link>
    <router-link
      to="/customer-lists"
      class="btn btn-primary mt-4"
      style="margin-right: 10px"
    >
      Customer Lists
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      customerArray: [],
      customername: "",
      customeraddress: "",
      mobile: 0,
      currentCustomerID: "",
    };
  },
  mounted() {
    // this.getAllCustomer();
  },
  methods: {
    getAllCustomer() {
      var page = "http://localhost:8082/api/v1/customer/getAllCustomer";
      axios.get(page).then(({ data }) => {
        console.log(data);
        this.customerArray = data;
      });
    },

    // getAllCustomer() {
    //   axios
    //     .get("http://localhost:8082/api/v1/customer/getAllCustomer")
    //     .then((response) => {
    //       this.customerArray = response.data;
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching customer data:", error);
    //     });
    // },

    register() {
      const bodyData = {
        customername: this.customername,
        customeraddress: this.customeraddress,
        mobile: this.mobile,
      };

      axios
        .post("http://localhost:8082/api/v1/customer/save", bodyData)
        .then((response) => {
          console.log(response.data);
          alert("Customer Registered Successfully");

          this.customerArray = [response.data];
          this.clearCustomer();
          console.log(this.customerArray);

          //   console.log(response.data);
          // alert("Customer Registered Successfully");
          // this.getAllCustomer();
          // this.customername = "";
          // this.customeraddress = "";
          // this.mobile = 0;
        })
        .catch((error) => {
          console.error("Error registering customer:", error);
        });
    },
    clearCustomer() {
      this.customername = "";
      this.customeraddress = "";
      this.mobile = 0;
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
          console.log("This is updated data" + response.data);
          alert("Customer Updated Successfully");
          this.customerArray = [response.data];
          this.customername = "";
          this.customeraddress = "";
          this.mobile = 0;
          // this.customerArray = [response.data];
        })
        .catch((error) => {
          console.error("Error updating customer:", error);
        });
    },
    save() {
      if (this.currentCustomerID === "") {
        this.register();
      } else {
        this.updateRecords();
      }
    },
    setDelete(data) {
      var url = `http://localhost:8082/api/v1/customer/deletecustomer/${data.customerid}`;
      axios.delete(url);
      alert("Customer Deleted Successfully");
      this.getAllCustomer();
    },
    // setDelete(data) {
    //   axios
    //     .delete(
    //       `http://localhost:8082/api/v1/customer/deletecustomer/${data.customerid}`
    //     )
    //     .then((response) => {
    //       console.log(response.data);
    //       alert("Customer Deleted Successfully");
    //       this.getAllCustomer();
    //       this.customername = "";
    //       this.customeraddress = "";
    //       this.mobile = 0;
    //     })
    //     .catch((error) => {
    //       console.error("Error deleting customer:", error);
    //     });
    // },
  },
};
</script>
