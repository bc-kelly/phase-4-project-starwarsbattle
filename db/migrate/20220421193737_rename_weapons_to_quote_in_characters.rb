class RenameWeaponsToQuoteInCharacters < ActiveRecord::Migration[6.1]
  def change
    rename_column :characters, :weapons, :quote
  end
end
