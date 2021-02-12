# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_12_192659) do

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.integer "goal"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "isin"
    t.decimal "price", precision: 10, scale: 2
    t.string "item_type"
    t.integer "category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_items_on_category_id"
  end

  create_table "operations", force: :cascade do |t|
    t.integer "item_id", null: false
    t.string "operations_type"
    t.decimal "tax", precision: 10, scale: 2
    t.integer "quantity"
    t.decimal "price", precision: 10, scale: 2
    t.string "platform"
    t.datetime "operated_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_id"], name: "index_operations_on_item_id"
  end

  add_foreign_key "items", "categories"
  add_foreign_key "operations", "items"
end
