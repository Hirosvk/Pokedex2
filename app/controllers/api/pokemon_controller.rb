class Api::PokemonController < ApplicationController
  def create
    debugger
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def destroy
    @pokemon = Pokemon.find(params[:id])
    @pokemon.destroy
    render :show
  end

  def index
    @pokemon = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  def image
    send_file("./app/assets/images/#{img_file_name}", :disposition => "inline")
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(
      :image_url, :attack, :defense, :name, :poke_type, moves: []
    )
  end

  def img_file_name
    path = (params[:path] == "pokemon_snaps") ? "pokemon_snaps/" : ""
    if params[:format] =~ /png|jpg|jpeg/
      "#{path}#{params[:id]}.#{params[:format]}"
    else
      ""
    end
  end


end
