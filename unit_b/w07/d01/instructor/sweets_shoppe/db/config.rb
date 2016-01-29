require "sqlite3"

$db = SQLite3::Database.new('db/sweets.db')
$db.results_as_hash = true
$db.type_translation = true