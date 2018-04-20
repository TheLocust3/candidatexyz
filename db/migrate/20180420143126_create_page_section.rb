class CreatePageSection < ActiveRecord::Migration[5.1]
  def change
    create_table :page_sections, id: false do |t|
      t.belongs_to :page, type: :uuid, index: true
      t.belongs_to :panel, type: :uuid, index: true
      t.integer :index
    end
  end
end
