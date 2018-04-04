class Volunteer < ApplicationRecord
  before_validation :sanitize_phone_number

  default_scope { order(:created_at) }
  belongs_to :contact

  validates :email, presence: true, email: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :zipcode, presence: true, zipcode: true

  validates :mobile_number, number: true
  validates :home_number, number: true

  def save
    self.contact = Contact.new( email: self.email, first_name: self.first_name, last_name: self.last_name, zipcode: self.zipcode, phone_number: self.mobile_number )

    super
  end

  private
  def sanitize_phone_number
    unless self.mobile_number.nil?
      self.mobile_number = self.mobile_number.gsub('-', '').gsub('(', '').gsub(')', '') # (123)-123-1234
    end

    unless self.home_number.nil?
      self.home_number = self.home_number.gsub('-', '').gsub('(', '').gsub(')', '') # (123)-123-1234
    end
  end
end
