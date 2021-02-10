class Category < ApplicationRecord
  has_many :items, dependent: :destroy
  validates_presence_of :name, :goal
  validate :validate_goal_percent

  def validate_goal_percent
    total = Category.all.map(&:goal).sum + goal
    errors.add(:company, 'Invalid Company ID') if total > 100
  end
end
