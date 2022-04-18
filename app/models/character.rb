class Character < ApplicationRecord
    has_many :battles
    has_many :planets, through: :battles 

    validates :name, :image, :movie, presence: true
end
