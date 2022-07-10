<template>
  <div class="NavBarMin">
    <NavBar>
      <template v-slot:left></template>
      <template v-slot:center>败 家 之 PUBLIC街</template>
      <template v-slot:right></template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
export default {
  name: "NavBarMin",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.NavBarMin {
  color: #fff;
  font-size: 0.5333rem;
  font-weight: 700;
  background-color: rgb(217, 167, 191);
}
</style>