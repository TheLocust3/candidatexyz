class Theme < ApplicationRecord  
    validates :name, presence: true
    validates :styling, presence: true
end
  