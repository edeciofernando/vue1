<template>
<nav class="navbar navbar-expand-sm bg-primary navbar-dark mb-3">
  <!-- Brand -->
  <img src="herbie.png" alt="Herbie" class="mx-3">
  <router-link to="/" class="navbar-brand">Revenda Herbie</router-link>

  <!-- Links -->
  <ul class="navbar-nav">
    <!-- Dropdown -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Cadastros
      </a>
      <div class="dropdown-menu">
        <router-link to="/cadcarros" class="dropdown-item">Veículos</router-link>
        <a class="dropdown-item" href="#">Marcas</a>
        <a class="dropdown-item" href="#">Usuários</a>
      </div>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Pesquisas
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Veículos</a>
        <a class="dropdown-item" href="#">Propostas</a>
      </div>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Gráficos
      </a>
      <div class="dropdown-menu">
        <router-link to="/grafcarros" class="dropdown-item">Veículos x Marcas</router-link>
        <router-link to="/grafcarroscores" class="dropdown-item">Veículos x Cores</router-link>
        <router-link to="/grafcadastros" class="dropdown-item">Veículos x Data Cadastro</router-link>
        <a class="dropdown-item" href="#">Veículos x Propostas</a>
        <a class="dropdown-item" href="#">Propostas Mensais</a>
      </div>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="#">Utilitários</a>
    </li>
  </ul>

  <ul class="navbar-nav ml-auto">
    <!-- Dropdown -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        <i class="fas fa-user mr-1"></i> 
        <span v-if="user">{{user}}</span>
        <span v-else>(Não Logado)</span>              
      </a>
      <div class="dropdown-menu">
        <router-link to="/login" class="dropdown-item">Login</router-link>
        <a class="dropdown-item" href="#" @click="sair">Logout</a>
      </div>
    </li>
  </ul>

</nav>    
</template>

<script>
export default {
  methods: {
    sair() {
      localStorage.removeItem('token')
      this.$parent.mudaUser(null)
    }
  },
  props: {
    user: String    
  }    
}
</script>

<style scoped>
img {
    width: 60px;
    height: 40px;
}
</style>