class PageSection < ApplicationRecord
    belongs_to :page
    belongs_to :panel

    validates :index, presence: true
end
  