class Page < ApplicationRecord
    has_many :page_sections
    has_many :panels, through: :page_sections

    validates :name, presence: true
    validates :url, presence: true, uniqueness: true

    def serializable_hash(options={})
        super({ :include => { :page_sections => {} } }.update(options))
    end
end
  