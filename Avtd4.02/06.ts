interface Restaurante {
    nome: string;
    cidade: string;
  }
  
  interface RestaurantesPorCidade {
    [cidade: string]: string[];
  }
  
  export const resultado06 = (restaurantes: Restaurante[]): RestaurantesPorCidade => {
    const restaurantesPorCidade: RestaurantesPorCidade = {};
  
    for (const restaurante of restaurantes) {
      if (!restaurantesPorCidade[restaurante.cidade]) {
        restaurantesPorCidade[restaurante.cidade] = [];
      }else{
        restaurantesPorCidade[restaurante.cidade].push(restaurante.nome);
      }
    }
    return restaurantesPorCidade;
  }  
