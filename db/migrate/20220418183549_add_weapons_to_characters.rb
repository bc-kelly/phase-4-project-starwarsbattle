class AddWeaponsToCharacters < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :weapons, :string
  end
end
