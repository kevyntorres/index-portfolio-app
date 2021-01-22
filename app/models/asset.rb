class Asset < ApplicationRecord
  belongs_to :category
  has_many :operations
end
