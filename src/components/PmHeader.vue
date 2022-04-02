<template>
  <div class="container mw-100" id="menu">
    <div class="row pt-2 pb-1 ps-xl-5 ms-lg-5 ps-lg-4 ms-md-5">
      <div class="col-3 ms-4 offset-xl-1 ms-xl-5 ps-xl-5 col-md-3">
        <div class="form-check">
          <input
            class="form-check-input p-2"
            type="checkbox"
            value="box"
            id="box"
            v-model="checked"
            @change="sendCheck($event)"
          />
          <label class="form-check-label" for="box">
            <span>
              <img
                class="mb-1"
                src="@/assets/icon-1.png"
                alt="new_atributte"
                value="box"
                width="15"
                height="15"
              />
            </span>
          </label>
        </div>
      </div>
      <div class="col-3 ms-4 ms-lg-4 col-md-3">
        <div class="form-check">
          <input
            class="form-check-input p-2"
            type="checkbox"
            value="person"
            id="person"
            v-model="checked"
            @change="sendCheck($event)"
          />
          <label class="form-check-label" for="person">
            <span
              ><img
                class="mb-1"
                src="@/assets/icon-2-disable.png"
                alt="new_atributte"
                width="15"
                height="15"
            /></span>
          </label>
        </div>
      </div>
      <div class="col-3 ms-4 ps-lg-5 col-md-3 ms-md-5">
        <div class="form-check">
          <input
            class="form-check-input p-2"
            type="checkbox"
            value="corners"
            id="corners"
            v-model="checked"
            @change="sendCheck($event)"
          />
          <label class="form-check-label" for="corners">
            <span
              ><img
                class="mb-1"
                src="@/assets/icon-3.png"
                alt="new_atributte"
                width="15"
                height="15"
            /></span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PmHeader",

  data() {
    return {
      checked: [],
    };
  },

  methods: {
    sendCheck(event) {
      this.$bus.emit("setCheck", event.target);
    },
  },
};
</script>

<style lang="scss">
#menu {
  background-color: #282930;
  color: #ffff;
  border-bottom: 1px solid #ffff;
}
</style>
