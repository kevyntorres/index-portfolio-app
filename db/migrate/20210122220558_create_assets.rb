class CreateAssets < ActiveRecord::Migration[6.0]
  def change
    create_table :assets do |t|
      t.string :name
      t.string :isin
      t.decimal :price, precision: 10, scale: 2
      t.string :type

      t.timestamps
    end
  end
end
