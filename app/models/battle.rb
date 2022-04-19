class Battle < ApplicationRecord
  belongs_to :planet
  belongs_to :character
  has_many :user_battles
  has_many :users, through: :user_battles
  
end
