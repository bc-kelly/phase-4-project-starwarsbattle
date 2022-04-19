class User < ApplicationRecord
    has_many :user_battles
    has_many :battles, through: :user_battles

    has_secure_password

    validates :username, presence: true, uniqueness: :true
end
