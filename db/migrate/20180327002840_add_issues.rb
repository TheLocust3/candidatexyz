class AddIssues < ActiveRecord::Migration[5.1]
  
  def change
    create_table :issues, id: :uuid, default: "uuid_generate_v4()" do |t|
      t.string :title
      t.string :url
      t.text :body

      t.timestamps
    end
  end
end
