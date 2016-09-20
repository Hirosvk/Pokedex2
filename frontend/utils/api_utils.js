export const ApiUtils = {
  fetchAllPokemons(successCallback){
    $.ajax({
      url: "/api/pokemon/",
      type: "get",
      success: successCallback
    });
  }
}
