class AddPosts < ActiveRecord::Migration[5.1]
  
  def change
    create_table :posts, id: :uuid, default: "uuid_generate_v4()" do |t|
      t.string :title
      t.string :post_type
      t.string :url
      t.text :body

      t.timestamps
    end
  end
end
