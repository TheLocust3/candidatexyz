class AddClassNamePrefixToThemes < ActiveRecord::Migration[5.1]
  def change
    add_column :themes, :class_name_prefix, :string
  end
end
