<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Área de Vendas</h4>
          </md-card-header>
          <md-card-content>
            <div id="typography">
              <div class="title">
                <h2>Vendas</h2>
              </div>
        
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  }
};
</script>
