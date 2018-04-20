class Panel < ApplicationRecord
    has_and_belongs_to_many :pages

    validates :name, presence: true, uniqueness: true
end
  