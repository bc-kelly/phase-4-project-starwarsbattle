class CharactersController < ApplicationController

    def index
        characters = Character.all
        render json: character, status: :ok
    end
end
