class Post < ApplicationRecord  
  validates :post_type, presence: true
  validates :url, presence: true, uniqueness: true
  validates :body, presence: true
end
