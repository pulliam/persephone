# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151211141824) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bands", force: :cascade do |t|
    t.string   "name"
    t.string   "has_explicit_lyrics"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "bands_genres", id: false, force: :cascade do |t|
    t.integer "band_id"
    t.integer "genre_id"
  end

  create_table "events", force: :cascade do |t|
    t.date     "performs_on"
    t.boolean  "is_alcohol_served", default: true
    t.integer  "band_id"
    t.integer  "venue_id"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
  end

  create_table "genres", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "venues", force: :cascade do |t|
    t.string   "name"
    t.string   "city"
    t.string   "state"
    t.boolean  "is_family_friendly", default: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

end
