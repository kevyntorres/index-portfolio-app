class ChangeTableOperations < ActiveRecord::Migration[6.0]
  def change
    drop_table :operations if table_exists? :operations
    create_table :operations do |t|
      t.references :item, null: false, foreign_key: true
      t.string :operations_type
      t.decimal :tax, precision: 10, scale: 2
      t.integer :quantity
      t.decimal :price, precision: 10, scale: 2
      t.string :platform
      t.datetime :operated_at

      t.timestamps
    end
  end
end
