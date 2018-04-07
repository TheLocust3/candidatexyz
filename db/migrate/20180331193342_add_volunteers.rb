class AddVolunteers < ActiveRecord::Migration[5.1]

  def change
    create_table :volunteers, id: :uuid, default: "uuid_generate_v4()" do |t|
      t.string :email
      t.string :phone_number

      t.string :first_name
      t.string :last_name

      t.string :address
      t.string :zipcode
      t.string :city
      t.string :state

      t.text :help_blurb

      t.references :contact, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
