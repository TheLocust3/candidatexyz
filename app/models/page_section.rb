class PageSection < ApplicationRecord
    belongs_to :page
    belongs_to :panel

    validates :index, presence: true

    def serializable_hash(options={})
        super({ :include => { :panel => {} } }.update(options))
    end
end
  