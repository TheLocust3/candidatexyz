class CreateContent < ActiveRecord::Migration[5.1]
  def change
    create_table :contents, id: :uuid, default: "uuid_generate_v4()" do |t|
      t.string :content_type
      t.string :identifier
      t.string :content

      t.timestamps
    end
  end
end
