class AddImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images, id: :uuid, default: "uuid_generate_v4()" do |t|
      t.string :identifier

      t.timestamps
    end
  end
end
