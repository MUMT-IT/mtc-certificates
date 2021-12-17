<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds is-offset-2">
          <nav class="panel">
            <p class="panel-heading">
              Members
            </p>
            <a class="panel-block" v-for="m in members" :key="m.id">
            <span class="panel-icon">
              <i class="fas fa-chevron-circle-right"></i>
            </span>
              {{ m }}
            </a>
          </nav>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <router-link :to="{ name: 'MemberForm', params: { schemeId: $route.params.schemeId}}"
                       class="is-primary button">Add Member</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import {db} from "../firebase";

export default {
  name: "Members",
  data () {
    return {
      members: []
    }
  },
  async mounted() {
    const schemeId = this.$route.params.schemeId
    const ref = doc(db, 'schemes', schemeId)
    const docSnapshot = await getDoc(ref)
    if (docSnapshot.exists()) {
      docSnapshot.data().members.forEach(m=>{
        this.members.push(m)
      })
    }
  }
}
</script>

<style scoped>

</style>