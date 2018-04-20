class CreatePagesPanelsJoinTable < ActiveRecord::Migration[5.1]
  def change
    create_table :pages_panels, id: false do |t|
      t.belongs_to :pages, index: true
      t.belongs_to :panels, index: true
    end
  end
end
