class AddProtectedToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :protected, :boolean, default: false
  end
end
