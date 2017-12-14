// Desestruturação

const user = {
  nome: 'Diego Fernandes',
  empresa: 'RocketSeat',
  endereco: {
    rua: 'Al. Bela Aliança',
    num: '775',
    cidade: 'Rio do Sul',
  }
};

const { nome, empresa, endereco: { rua, num } } = user
