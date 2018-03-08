class Content < ApplicationRecord
  validates :content_type, presence: true
  validates :identifier, presence: true, uniqueness: true
end
