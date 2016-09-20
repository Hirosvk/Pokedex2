export const ApiUtils = {
  fetchAllPokemons(successCallback){
    $.ajax({
      url: "/api/pokemon/",
      type: "get",
      success: successCallback
    });
  },

  fetchSinglePokemon(pokemon_id, successCallback){
    $.ajax({
      url: `/api/pokemon/${pokemon_id}`,
      type: "get",
      success: successCallback
    });
  },

  createPokemon(pokemon, successCallback){
    $.ajax({
      url: "/api/pokemon/",
      type: "post",
      data: {
        pokemon: pokemon
      },
      success: successCallback
    });
  },

  sendFile(file, successCallback){
    let xhr = new XMLHttpRequest();
    let fd = new FormData();
    xhr.onreadystatuschange = function(){
      successCallback(xhr.responseText);
    }
    fd.append("picture", file);
    xhr.open("post", "/api/pokemon", true);
    xhr.send(fd)
  }
}
