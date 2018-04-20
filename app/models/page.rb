class Page < ApplicationRecord
    has_many :page_sections
    has_many :panels, through: :page_sections

    validates :name, presence: true
    validates :url, presence: true, uniqueness: true
end
  