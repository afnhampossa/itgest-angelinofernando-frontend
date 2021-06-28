<template>
  <div>
  
  <table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">PRODUTO</th>
      <th scope="col">FORNECEDOR</th>
      <th scope="col">QUANTIDADE</th>
      <th class="text-center" scope="col">ACÇÕES</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="produto in produtos" :key="produto.id">
      <th scope="row">{{produto.id}}</th>
      <td>{{produto.name}}</td>
      <td>{{produto.fornecedor}}</td>
      <td>{{produto.quantidade}}</td>
       <td class="text-center">
        <button type="button" class="btn btn-outline-secondary"><i class="fas fa-eye"></i></button>
        <button type="button" class="btn btn-outline-success"><i class="far fa-edit"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
      </td>
    </tr>
    
  </tbody>
</table>

  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      produtos: [
        {
          id: 1,
          name: "Arroz",
          fornecedor: "Niger Paulo",
          quantidade: 30
        },
        {
          id: 2,
          name: "Feijão",
          fornecedor: "Catarina Artur",
          quantidade: 20
        },
        {
          id: 3,
          name: "Arroz",
          fornecedor: "Niger Paulo",
          quantidade: 30
        },
        {
          id: 4,
          name: "Arroz",
          fornecedor: "Niger Paulo",
          quantidade: 30
        },
        {
         id: 5,
          name: "Arroz",
          fornecedor: "Niger Paulo",
          quantidade: 30
        },
        {
          id: 6,
          name: "Arroz",
          fornecedor: "Niger Paulo",
          quantidade: 30
        }
      ]
    };
  }
};
</script>
