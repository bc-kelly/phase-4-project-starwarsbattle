# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_11_201001) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "account_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "battles", force: :cascade do |t|
    t.string "name"
    t.bigint "planet_id", null: false
    t.bigint "character_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_battles_on_character_id"
    t.index ["planet_id"], name: "index_battles_on_planet_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "movie"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "quote"
  end

  create_table "hotels", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "city"
    t.string "state"
    t.string "tag"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "link"
  end

  create_table "planets", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "profiles", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.bigint "account_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_id"], name: "index_profiles_on_account_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "date_start"
    t.string "date_end"
    t.integer "points"
    t.bigint "profile_id", null: false
    t.bigint "hotel_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "booked"
    t.integer "account_id"
    t.index ["hotel_id"], name: "index_trips_on_hotel_id"
    t.index ["profile_id"], name: "index_trips_on_profile_id"
  end

  create_table "user_battles", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "battle_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["battle_id"], name: "index_user_battles_on_battle_id"
    t.index ["user_id"], name: "index_user_battles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "battles", "characters"
  add_foreign_key "battles", "planets"
  add_foreign_key "profiles", "accounts"
  add_foreign_key "trips", "hotels"
  add_foreign_key "trips", "profiles"
  add_foreign_key "user_battles", "battles"
  add_foreign_key "user_battles", "users"
end
