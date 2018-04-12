class CreateThemes < ActiveRecord::Migration[5.1]
  def change
    create_table :themes do |t|
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
