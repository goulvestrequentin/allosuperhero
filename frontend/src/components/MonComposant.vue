<template>
  <div class="mon-composant">
    <h1>Liste des utilisateurs</h1>
    <div class="user-list">
      <div class="user" v-for="(user, index) in apiResponse.users" :key="index">
        <div class="name">Nom: {{ user.name }}</div>
        <div class="age">Age: {{ user.age }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MonComposant',
  data() {
    return {
      apiResponse: {
        users: [],
      },
    };
  },
  created() {
    axios.get('http://localhost:3000/api/v1/users')
      .then((res) => {
        this.apiResponse = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mon-composant{
  width: 100%;
  .user-list{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .user{
      width: 30%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name,.age{
        flex-basis: 50%;
        display: flex;
        justify-content: flex-start;
      }
    }
  }
}
</style>
