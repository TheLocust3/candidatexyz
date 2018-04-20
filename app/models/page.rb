class Page < ApplicationRecord
    has_and_belongs_to_many :panels

    validates :name, presence: true
    validates :url, presence: true, uniqueness: true
end
  