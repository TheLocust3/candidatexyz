class Post < ApplicationRecord  
  validates :post_type, presence: true
  validates :body, presence: true
  validates :url, presence: true, post_url: true
end
