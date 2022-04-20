class CharactersController < ApplicationController

    def index
        characters = Character.all
        render json: characters, status: :ok
    end

    def show
        character = Character.find(params[:id])
        render json: character, status: :ok
    rescue ActiveRecord::RecordNotFound
        render json: {error: "Character not found"}, status: :not_found
    end

    def create
        character = Character.create!(character_params)
        render json: character, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def update
        character = Character.find(params[:id])
        character.update!(character_params)
        render json: character, status: :ok
    rescue ActiveRecord::RecordNotFound
        render json: {error: "Character not found"}, status: :not_found
    end

    def destroy
        character = Character.find(params[:id])
        character.destroy
        head :no_content
    rescue ActiveRecord::RecordNotFound
        render json: {error: "Character not found"}, status: :not_found
    end

    private

    def character_params
        params.permit(:name, :image, :movie)
    end
    
end
