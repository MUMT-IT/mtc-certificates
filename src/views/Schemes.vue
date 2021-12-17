<template>
<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds is-offset-2">
        <nav class="panel">
          <p class="panel-heading">
            Schemes
          </p>
          <router-link :to="{ name: 'Members', params: {schemeId: s.id }}"
                       class="panel-block" v-for="s in schemes" :key="s.id">
            <span class="panel-icon">
              <i class="fas fa-chevron-circle-right"></i>
            </span>
            {{ s.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
export default {
  name: "Schemes",
  data () {
    return {
      schemes: []
    }
  },
  async mounted() {
    const ref = collection(db, 'schemes')
    const querySnapshot = await getDocs(ref)
    querySnapshot.forEach(d => {
      let data = d.data()
      data.id = d.id
      this.schemes.push(data)
    })
  }
}
</script>

<style scoped>

</style>