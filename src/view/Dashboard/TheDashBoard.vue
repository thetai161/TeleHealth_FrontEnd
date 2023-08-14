<template>
  <div class="dashboard">
    <div class="header">
      <div class="header-item doctors">
        <div class="header-item__left">
          <i class="fa-solid fa-user-doctor"></i>
        </div>
        <div class="header-item__right">
          <span>{{ numberDoctor }}</span>
          <div class="header-item__title">Bác sĩ</div>
        </div>
      </div>
      <div class="header-item patients">
        <div class="header-item__left">
          <i class="fa-regular fa-user"></i>
        </div>
        <div class="header-item__right">
          <span>{{ numberPatient }}</span>
          <div class="header-item__title">Bệnh nhân</div>
        </div>
      </div>
      <div class="header-item hospital">
        <div class="header-item__left">
          <i class="fa-regular fa-hospital"></i>
        </div>
        <div class="header-item__right">
          <span>{{ numberDepartment }}</span>
          <div class="header-item__title">Bệnh viện</div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="body-chart">
        <ApexCharts
          type="bar"
          :height="500"
          :options="barChartOptions"
          :series="series"
        />
      </div>
      <div class="body-chart">
        <ApexCharts
          type="pie"
          :height="500"
          :options="pieChartOptions"
          :series="pieChartSeries"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ApexCharts from "vue3-apexcharts";
import axios from "axios";

export default {
  name: "TheDashboard",
  components: { ApexCharts },
  computed: {
    numberDoctor() {
      return this.doctors.length ? this.doctors.length : 0;
    },
    numberPatient() {
      return this.patients.length ? this.patients.length : 0;
    },
    numberDepartment() {
      return this.departments.length ? this.departments.length : 0;
    },
    accessToken() {
      return this.$store.getters.accessToken;
    },
    email() {
      return this.$store.getters.email;
    },
    role() {
      return this.$store.getters["role"];
    },
    idProfile() {
      return this.$store.getters["idProfile"];
    },
  },
  methods: {},
  data() {
    return {
      doctors: [],
      patients: [],
      departments: [],
      barChartOptions: {
        xaxis: {
          categories: ["Bác sĩ", "Bệnh nhân", "Bệnh viện"],
        },
        legend: {
          show: false,
        },
        plotOptions: {
          bar: {
            barHeight: "40px",
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: "bottom",
            },
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          style: {
            colors: ["#fff"],
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
          },
          offsetX: 0,
          dropShadow: {
            enabled: true,
          },
        },
        tooltip: {
          theme: "dark",
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function () {
                return "";
              },
            },
          },
        },
      },
      series: [
        {
          data: [0, 0, 0],
        },
      ],
      pieChartOptions: {
        labels: ["Bác sĩ", "Bệnh nhân", "Bệnh viện"],
      },
      pieChartSeries: [0, 0, 0],
    };
  },
  async created() {
    const me = this;
    let urlRole = {};
    // bac si
    if (this.role == "role3") {
      urlRole = {
        urlDoctor: "http://localhost:8000/medical_unit/",
        urlPatient: "http://127.0.0.1:8000/medical_unit/",
        urlDepartment: "http://localhost:8000/medical_unit/",
      };
    } else if (this.role == "role1") {
      urlRole = {
        urlDoctor: "http://localhost:8000/doctor/",
        urlPatient: `http://127.0.0.1:8000/patient_management/`,
        urlDepartment: "http://localhost:8000/medical_unit/",
      };
    } else if (this.role == "role4") {
      urlRole = {
        urlDoctor: "http://localhost:8000/doctor/",
        urlPatient: `http://localhost:8000/patient/`,
        urlDepartment: "http://localhost:8000/medical_unit/",
      };
    }
    if (this.role != "role2" && this.role) {
      await axios
        .get(urlRole.urlDoctor, {
          headers: { Authorization: `Bearer ${me.accessToken}` },
        })
        .then(function (res) {
          me.doctors = res.data;
        })
        .catch(function (err) {
          console.log(err);
        });
      // beenhj nhan
      await axios
        .get(urlRole.urlPatient, {
          headers: { Authorization: `Bearer ${me.accessToken}` },
        })
        .then(function (res) {
          if (me.role == "role3" || me.role=="role4") {
            me.patients = res.data;
          } else if (me.role == "role1") {
            res.data.forEach((item) => {
              me.patients.push(item.patient);
            });
          }
        })
        .catch(function (err) {
          console.log(err);
        });
      // benh vienn
      await axios
        .get(urlRole.urlDepartment, {
          headers: { Authorization: `Bearer ${me.accessToken}` },
        })
        .then((res) => {
          me.departments = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

      this.series = [
        {
          data: [me.doctors.length, me.patients.length, me.departments.length],
        },
      ];

      this.pieChartSeries = [
        me.doctors.length,
        me.patients.length,
        me.departments.length,
      ];
    }
  },
};
</script>

<style scoped>
.iframe {
  margin-top: 20px;
  margin-left: -5px;
  width: 100%;
  height: 800px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.dashboard .header {
  direction: ltr;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}

.dashboard .header-item {
  height: 105px;
  width: 386px;
  padding: 20px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  display: flex;
  justify-content: space-between;
}

.dashboard .header-item .header-item__left {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 40px;
}

.dashboard .header-item .header-item__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.dashboard .header-item .header-item__right span {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 14px;
  line-height: 20px;
}

.dashboard .header-item .header-item__right .header-item__title {
  font-size: 13px;
  border-radius: 4px;
  padding: 5px 10px;
  color: #fff;
  display: flex;
  align-items: center;
}
.dashboard .doctors .header-item__left {
  background-color: #009efb;
}

.dashboard .doctors .header-item__right .header-item__title {
  background-color: #009efb;
}

.dashboard .patients .header-item__left {
  background-color: rgba(0, 227, 150, 0.85);
}

.dashboard .patients .header-item__right .header-item__title {
  background-color: rgba(0, 227, 150, 0.85);
}

.dashboard .hospital .header-item__left {
  background-color: rgba(254, 176, 25, 0.85);
}

.dashboard .hospital .header-item__right .header-item__title {
  background-color: rgba(254, 176, 25, 0.85);
}

.dashboard .body {
  direction: ltr;
  width: 100%;
  display: flex;
  margin-top: 32px;
}

.dashboard .body-chart {
  width: 50%;
}
</style>
