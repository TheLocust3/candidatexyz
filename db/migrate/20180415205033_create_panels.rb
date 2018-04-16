class CreatePanels < ActiveRecord::Migration[5.1]
  def change
    create_table :panels, id: :uuid, default: "uuid_generate_v4()" do |t|
      t.string :name
      t.string :description
      t.json :elements

      t.timestamps
    end
  end
end
