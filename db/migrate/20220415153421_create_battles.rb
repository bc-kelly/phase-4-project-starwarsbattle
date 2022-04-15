class CreateBattles < ActiveRecord::Migration[6.1]
  def change
    create_table :battles do |t|
      t.string :name
      t.belongs_to :planet, null: false, foreign_key: true
      t.belongs_to :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
