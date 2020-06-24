<template>
    <div class="container">
        <h2>Gráfico Relacionando Carros x Marcas</h2>
        <GChart
            type="PieChart"
            :data="carrosMarcas"
        />

    </div>
</template>

<script>
import axios from 'axios'
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  },
  data () {
    return {
        carrosMarcas: [['Marca', 'Nº Veículos']]
    }
  },
  mounted() {
      axios.get(this.$urlAPI+'/marcas')
           .then(response => {
               const marcas = response.data

               marcas.forEach(marca => {
                   if (marca.num_carros > 0) {
                       this.carrosMarcas.push([marca.nome, marca.num_carros])
                   }
               }) 

               // console.log(this.carrosMarcas)
           })
  }  
}
</script>

<style scoped>

</style>