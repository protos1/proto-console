<template>
  <div class="s1-loc__container">
    <div class="s1-U__mg--bt32">
      <h1 class="md-display-1 s1-U__text-color--dark-2 s1-U__align-children--center">
        <md-button
          class="md-dense md-icon-button s1-U__mg--rt16"
          @click="setActivePage('users-by-account')"
        >
          <md-icon>arrow_back</md-icon>
        </md-button>
        <span>Editando perfil</span>
      </h1>
    </div>

    <md-card class="s1-loc__width--900px">
      <md-card-content>
        <div class="s1-U__pd16">
          <span class="s1-U__text-color--dark-2">Icatu MV / Vendas</span>
          <h2 class="s1-U__fw--300 s1-U__mg--bt4">
            <span>Unuseful 3</span>
          </h2>
        </div>
        <md-divider class="s1-U__mg--tp16 s1-U__mg--bt16"/>
        <div class="s1-U__pd--lt16 s1-U__mg--tp32">
          <div class="s1-loc__md-field-wrapper s1-U__width--300px">
            <md-field>
              <label>Nome do perfil</label>
              <md-input v-model="form.Name" required/>
            </md-field>
          </div>
          <div
            class="s1-loc__md-field-wrapper s1-U__width--300px"
            v-for="action in actions"
            :key="action.Key + '-suzuz'"
          >
            <md-checkbox v-model="form[action.Key]">{{action.Name}}</md-checkbox>
          </div>
        </div>
      </md-card-content>
      <md-card-actions class="s1-U__pd16">
        <md-button class="md-primary md-raised" @click="setActivePage('users-by-account')">Salvar</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "EditProfile",
  props: {
    setActivePage: Function
  },
  data: () => ({
    form: {
      Name: "Unuseful 3",
      ProdutosObter: true,
      ProdutosObterLista: false,
      ProdutosCriar: true,
      ProdutosAdicionarImagem: false,
      ProdutosRemoverImagem: true,
      ProdutosObterConfiguração: false,
      ProdutosAtualizarconfiguração: true,
      ProdutosTestarcertificado: false,
      ProdutosTestarcomunicação: false,
      ProdutosDescontinuar: true,
      ProdutosPublicar: false,
      TagsObter: true,
      TagsObterLista: false,
      PublicaçõesObter: false,
      PublicaçõesObterLista: false,
      PublicaçõesCriar: true,
      ClienteObter: false,
      ClienteObterLista: false,
      ClienteCriar: true,
      ClienteAtualizar: false,
      EndereçosObter: false,
      EndereçosObterLista: false,
      EndereçosCriar: false,
      EndereçosAtualizar: false,
      EndereçosExcluir: false,
      ComunicaçõesObter: false,
      ComunicaçõesObterLista: false,
      ComunicaçõesCriar: false,
      ComunicaçõesObterListadeVariáveis: false,
      PagamentosObter: false,
      PagamentosObterLista: false,
      PagamentosCriar: false,
      VendasObter: false,
      VendasObterLista: false,
      VendasCriar: true,
      VendasObterCertificado: false,
      VendasEnviodecertificado: true
    },
    actions: [
      { Name: "Produtos - Obter", Key: "ProdutosObter" },
      { Name: "Produtos - Obter Lista", Key: "ProdutosObterLista" },
      { Name: "Produtos - Criar", Key: "ProdutosCriar" },
      { Name: "Produtos - Adicionar Imagem", Key: "ProdutosAdicionarImagem" },
      { Name: "Produtos - Remover Imagem", Key: "ProdutosRemoverImagem" },
      {
        Name: "Produtos - Obter Configuração",
        Key: "ProdutosObterConfiguração"
      },
      {
        Name: "Produtos - Atualizar configuração",
        Key: "ProdutosAtualizarconfiguração"
      },
      {
        Name: "Produtos - Testar certificado",
        Key: "ProdutosTestarcertificado"
      },
      {
        Name: "Produtos - Testar comunicação",
        Key: "ProdutosTestarcomunicação"
      },
      { Name: "Produtos - Descontinuar", Key: "ProdutosDescontinuar" },
      { Name: "Produtos - Publicar", Key: "ProdutosPublicar" },
      { Name: "Tags - Obter", Key: "TagsObter" },
      { Name: "Tags - Obter Lista", Key: "TagsObterLista" },
      { Name: "Publicações - Obter", Key: "PublicaçõesObter" },
      { Name: "Publicações - Obter Lista", Key: "PublicaçõesObterLista" },
      { Name: "Publicações - Criar", Key: "PublicaçõesCriar" },
      { Name: "Cliente - Obter", Key: "ClienteObter" },
      { Name: "Cliente - Obter Lista", Key: "ClienteObterLista" },
      { Name: "Cliente - Criar", Key: "ClienteCriar" },
      { Name: "Cliente - Atualizar", Key: "ClienteAtualizar" },
      { Name: "Endereços - Obter", Key: "EndereçosObter" },
      { Name: "Endereços - Obter Lista", Key: "EndereçosObterLista" },
      { Name: "Endereços - Criar", Key: "EndereçosCriar" },
      { Name: "Endereços - Atualizar", Key: "EndereçosAtualizar" },
      { Name: "Endereços - Excluir", Key: "EndereçosExcluir" },
      { Name: "Comunicações - Obter", Key: "ComunicaçõesObter" },
      { Name: "Comunicações - Obter Lista", Key: "ComunicaçõesObterLista" },
      { Name: "Comunicações - Criar", Key: "ComunicaçõesCriar" },
      {
        Name: "Comunicações - Obter Lista de Variáveis",
        Key: "ComunicaçõesObterListadeVariáveis"
      },
      { Name: "Pagamentos - Obter", Key: "PagamentosObter" },
      { Name: "Pagamentos - Obter Lista", Key: "PagamentosObterLista" },
      { Name: "Pagamentos - Criar", Key: "PagamentosCriar" },
      { Name: "Vendas - Obter", Key: "VendasObter" },
      { Name: "Vendas - Obter Lista", Key: "VendasObterLista" },
      { Name: "Vendas - Criar", Key: "VendasCriar" },
      { Name: "Vendas - Obter Certificado", Key: "VendasObterCertificado" },
      { Name: "Vendas - Envio de certificado", Key: "VendasEnviodecertificado" }
    ]
  })
};
</script>
