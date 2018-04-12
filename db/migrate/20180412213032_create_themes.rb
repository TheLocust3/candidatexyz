class CreateThemes < ActiveRecord::Migration[5.1]
  def change
    create_table :themes, id: :uuid, default: "uuid_generate_v4()" do |t|
      t.string :name
      t.json :styling
      # {
      #   button: {
      #     class_name: '',
      #     style: { width: '100vh' }
      #   }
      # }

      t.timestamps
    end
  end
end
