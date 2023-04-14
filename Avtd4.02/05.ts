interface City {
    nome: string;
    estado: string;
    alcunha?: string;
    coordenadas: {
      latitude: [number, number, number];
      longitude: [number, number, number];
    };
  }

  function descreveCidade(city: City): string {
    const lat = converteCoordenada(city.coordenadas.latitude);
    const lon = converteCoordenada(city.coordenadas.longitude);
    const desc = city.alcunha ? `* "${city.alcunha}"\n` : "";
    return `${city.nome}, ${city.estado}\n${desc}* Localizada em ${lat} ${lon}`;
  }
  
  function converteCoordenada(coord: [number, number, number]): string {
    const [graus, minutos, segundos] = coord;
    const dir = graus >= 0 ? "N" : "S";
    const absGraus = Math.abs(graus);
    return `${absGraus}° ${minutos}' ${segundos}" ${dir}`;
  }
  
  const City = {
    nome: "Cajazeiras",
    estado: "Paraíba",
    alcunha: "A terra que ensinou a Paraíba a ler.",
    coordenadas: {
      latitude: [6, 53, 24],
      longitude: [38, 33, 43],
    },
   
  };
  
  console.log(descreveCidade(City));
  // Cajazeiras, Paraíba
  // * "A terra que ensinou a Paraíba a ler."
  // * Localizada em 6° 53' 24" S 38° 33' 43" O
  