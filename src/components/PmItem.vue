<template>
  <section v-for="f in filterFigures" :key="f.id">
    <div class="container mt-2 mb-2">
      <div class="row">
        <div class="col-2 offset-1">
          <img
            :src="getImgUrl(f.icon)"
            alt="new_atributte"
            width="25"
            height="25"
          />
        </div>
        <div class="col-4 offset-1">
          <p>{{ f.msg }}</p>
        </div>
        <div class="col-4">
          <input
            id="after"
            class="form-control"
            type="number"
            :value="f.value"
            min="1"
            max="10"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "PmItem",

  data() {
    return {
      figures: [
        {
          id: 1,
          icon: "icon-4",
          msg: "box_corners",
          type: "corners",
          value: 16,
        },
        {
          id: 2,
          icon: "icon-5",
          msg: "box_corners",
          type: "corners",
          value: 0,
        },
        {
          id: 3,
          icon: "icon-6",
          msg: "box_corners",
          type: "corners",
          value: 0,
        },
        {
          id: 4,
          icon: "icon-7",
          msg: "bounding box",
          type: "box",
          value: 0,
        },
        {
          id: 5,
          icon: "icon-8",
          msg: "bounding box",
          type: "box",
          value: 0,
        },
        {
          id: 6,
          icon: "icon-9",
          msg: "person",
          type: "person",
          value: 0,
        },
        {
          id: 7,
          icon: "icon-10",
          msg: "person",
          type: "person",
          value: 0,
        },
      ],
      checked: [],
      filterFigures: [],
    };
  },

  created() {
    this.$bus.on("setCheck", (x) => {
      this.filterFigures = [];

      if (x.checked) {
        this.checked.push(x.value);
      } else {
        this.removeItemOnce(this.checked, x.value);
      }

      if (this.checked.length == 0) {
        this.filterFigures = this.figures;
      } else {
        this.filterArray(this.checked);
      }
      // console.log(x.value, x.checked);
      console.log(`resolved ${this.checked}`);
    });
  },

  mounted() {
    this.filterFigures = this.figures;
  },

  methods: {
    getImgUrl(i) {
      let images = require.context("../assets/", false);
      return images("./" + i + ".png");
    },

    filterArray(checks) {
      let temp = [];

      checks.forEach((x) => {
        temp = this.figures.filter((figure) => figure.type == x);
        temp.forEach((y) => this.filterFigures.push(y));
      });
    },

    removeItemOnce(arr, value) {
      var index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
    },
  },
};
</script>

<style lang="scss">
#after {
  color: #ffff !important;
  outline: none !important;
  border-radius: 5px !important;
  background-color: #282930 !important;
  padding: 0.1rem 0.5rem;
  width: 100%;
}
</style>
