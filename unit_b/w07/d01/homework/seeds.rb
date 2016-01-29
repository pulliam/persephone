require_relative("db_config")

funnypacks = [
  ["floral", "canvas", "fp_philliplim.jpg"],
  ["black", "leather", "fp_leather.png"],
  ["black", "polyester", "fp_prada.jpg"],
  ["blue", "snakeskin", "fp_python.jpg"],
  ["black", "leather", "fp_awang.jpg"],
]

sql = "INSERT INTO fanny_packs (color, material, img_url) VALUES (?, ?, ?)"
funnypacks.each do |funnypack|
	$db.execute(sql, funnypack)
end