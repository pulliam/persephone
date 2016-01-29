json.array!(@barns) do |barn|
  json.extract! barn, :id, :name
  json.url barn_url(barn, format: :json)
end
