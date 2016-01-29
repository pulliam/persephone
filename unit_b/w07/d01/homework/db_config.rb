require 'sqlite3'
$db = SQLite3::Database.new("fanny_pack_db.sqlite3")
$db.results_as_hash = true
$db.type_translation = true
