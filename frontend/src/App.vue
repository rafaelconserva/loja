<template>

    <div class="formularioClientes">
        <CadastrarCliente />
    </div>

    <div class="listagemCliente">
        <ListarCliente />
    </div>

    <div class="listagemCarrinho">
        <CadastrarCarrinho/>
    </div>

</template>

<script setup>
import CadastrarCliente from "./components/clientes/CadastrarCliente.vue"
import ListarCliente from "./components/clientes/ListarCliente.vue";
import CadastrarCarrinho from "./components/clientes/CadastrarCarrinho.vue";
</script>

<style>
html {
  font-family: Arial;
}
.listagemCarrinho,
.formularioClientes,
.listagemCliente{
  padding: 10px;
  border:  1px solid rgb(108, 106, 106);
  float: left;
}

.formularioClientes {
  width: 25%; 
  background: #efeeee;
}

.formularioClientes input {
    width: 96%;
    margin-bottom: 10px;
    font-size: 14px;
    padding: 5px;
}

.formularioClientes label {
  width: 80%;
  display: block;
  margin-right: 5px;
  text-transform: uppercase;
}

.listagemClientes {
  width: 50%; 
  margin-left: 10px;
}

.formularioClientes button {
  background-color: aquamarine;
  border: none;
  float: right;
  width: 92px;
  height: 26px;
}
</style>