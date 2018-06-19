class RemoveOldStuff < ActiveRecord::Migration[5.1]
  def change
    remove_foreign_key :volunteers, :contacts

    drop_table :contacts
    drop_table :messages
    drop_table :volunteers
    drop_table :users
    drop_table :perishable_tokens
  end
end
