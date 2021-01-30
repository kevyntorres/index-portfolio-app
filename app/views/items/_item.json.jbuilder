json.extract! item, :id, :name, :isin, :price, :type, :category_id, :created_at, :updated_at
json.url item_url(item, format: :json)
