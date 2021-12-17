<template>
<section class="section">
  <div class="columns">
    <div class="column">
      <h1 class="title has-text-centered">
        เพิ่มรายชื่อห้องปฏิบัติการ
      </h1>
      <b-field>
        <b-input v-model="labName" placeholder="Laboratory Name"></b-input>
      </b-field>
      <div class="buttons is-centered">
        <b-button @click="saveMember" type="is-success" :loading="isLoading">Submit</b-button>
        <b-button @click="$router.back()" type="is-light">Back</b-button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { setDoc, getDoc, doc } from "firebase/firestore";
import {db} from "../firebase";

export default {
  name: "MemberForm",
  data () {
    return {
      labName: '',
      isLoading: false,
    }
  },
  methods: {
    async saveMember() {
      const schemeId = this.$route.params.schemeId
      const ref = doc(db, 'schemes', schemeId)
      const docSnapshot = await getDoc(ref)
      if (docSnapshot.exists()) {
        let data = docSnapshot.data()
        data.members.push(this.labName)
        this.isLoading = true
        setDoc(ref, data).then(() => {
          this.isLoading = false
          alert('New member has been added.')
        }).catch(e => {
          alert(e.toString())
          this.isLoading = false
        })
      }
    }
  },
  async mounted() {
  }
}
</script>

<style scoped>

</style>