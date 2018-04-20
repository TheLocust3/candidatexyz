class CreatePagesPanelsJoinTable < ActiveRecord::Migration[5.1]
  def change
    create_table :pages_panels, id: false do |t|
      t.belongs_to :page, type: :uuid, index: true
      t.belongs_to :panel, type: :uuid, index: true
    end
  end
end
