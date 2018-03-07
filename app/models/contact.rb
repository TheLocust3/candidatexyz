class Contact < ApplicationRecord
  before_save :sanitize_phone_number

  validates :email, presence: true
  validates :zipcode, presence: true

  def sanitize_phone_number
    phone_number = phone_number.gsub(/\D/, "") # remove non-numbers
  end
end
