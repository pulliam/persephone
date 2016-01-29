require("sqlite3")
$db = SQLite3::Database.new("hogwarts.db")
$db.results_as_hash = true
$db.type_translation = true
