class CreateOperations < ActiveRecord::Migration[6.0]
  def change
    create_table :operations do |t|
      t.references :asset, null: false, foreign_key: true
      t.string :type
      t.decimal :tax, precision: 10, scale: 2
      t.integer :quantity
      t.decimal :price, precision: 10, scale: 2
      t.string :platform
      t.datetime :operated_at

      t.timestamps
    end
  end
end
