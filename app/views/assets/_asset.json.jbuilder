json.extract! asset, :id, :name, :isin, :price, :type, :created_at, :updated_at
json.url asset_url(asset, format: :json)
