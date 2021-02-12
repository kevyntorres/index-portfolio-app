class DeleteTableAssets < ActiveRecord::Migration[6.0]
  def change
    drop_table :assets if table_exists? :assets
  end
end
