class Issue < ApplicationRecord  
  validates :title, presence: true
  validates :url, presence: true, uniqueness: true
  validates :body, presence: true
end
