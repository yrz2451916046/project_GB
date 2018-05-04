<template>
  <div class="wrapper">
      <!-- <div class="wrapper"> -->
        <mainhead></mainhead>
        <mainaside></mainaside>
      <!-- </div> -->
  </div>
</template>
<script>
  import Header from '@/components/Back_stage_management/Header'
  import Aside from '@/components/Back_stage_management/Aside'
export default {
  name: 'admin_index',
  components: {
    mainhead: Header,
    mainaside: Aside
  }
}
// $(function(){
//   $("html").height()
//   console.log($("html").height())
// })
</script>