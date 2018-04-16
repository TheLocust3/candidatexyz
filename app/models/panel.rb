class Panel < ApplicationRecord  
    validates :name, presence: true, uniqueness: true
end
  