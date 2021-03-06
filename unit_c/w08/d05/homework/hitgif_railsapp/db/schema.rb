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

ActiveRecord::Schema.define(version: 20151214001151) do

  create_table "articles", force: :cascade do |t|
    t.string   "name"
    t.string   "content"
    t.integer  "user_id"
    t.integer  "category_id"
    t.datetime "time_created"
    t.string   "gif",          default: "empty"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
  end

  create_table "records", force: :cascade do |t|
    t.string   "name"
    t.string   "content"
    t.integer  "user_id"
    t.integer  "category_id"
    t.datetime "time_created"
    t.integer  "article_id"
    t.string   "gif",          default: "empty"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.string "about_me",        default: "empty"
  end

end
