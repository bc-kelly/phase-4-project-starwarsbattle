class Character < ApplicationRecord
    has_many :battles
    has_many :planets, through: :battles 
    
end
