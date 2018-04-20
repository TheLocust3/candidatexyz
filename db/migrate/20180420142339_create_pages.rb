class CreatePages < ActiveRecord::Migration[5.1]
  def change
    create_table :pages, id: :uuid, default: "uuid_generate_v4()" do |t|
      t.string :name
      t.string :description
      t.string :url

      t.timestamps
    end
  end
end
