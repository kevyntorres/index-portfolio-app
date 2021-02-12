class ChangeTypeToOperationType < ActiveRecord::Migration[6.0]
  def change
    rename_column :operations, :type, :operation_type
    rename_column :operations, :asset_id, :item_id
  end
end
