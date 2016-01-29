require("pry")
require_relative("models/fanny_pack")
module App 
  class Server < Sinatra::Base

    get('/') do
      erb :index
    end

    get('/fanny_packs') do 
      sql = "SELECT * FROM fanny_packs"
      results = $db.execute(sql)
      results.map {|row| FannyPack.new(row)}

      erb :list_fannies
    end

    post('/fanny_packs') do 
      sql = "INSERT INTO fanny_packs (color, material, img_url) VALUES (?, ?)"
      fanny_pack = $db.execute(sql, [params[:color], params[:material], params[:img_url]])
      redirect to('/fanny_packs')
    end

    get('/fanny_packs/new') do
      erb :new_fanny_form
    end

    get('/fanny_packs/:id') do
      sql = "SELECT * FROM fanny_packs WHERE id = ?"
      result = $db.execute(sql, [params[:id]]).first
      @fanny_pack = FannyPack.new(result)
      erb :show_fanny
    end

    get('/fanny_packs/:id/edit') do
      # sql = find_by(:id, "Bob")
      sql = "SELECT * FROM fanny_packs WHERE id = ?"
      result = $db.execute(sql, [params[:id]]).first
      @fanny_pack = FannyPack.new(result)
      erb :edit_fanny_form 
    end

    post('/fanny_packs/:id') do
      sql = "UPDATE fanny_packs SET color = ?, material = ? WHERE id = ?"
      $db.execute(sql, [params[:color], params[:material], params[:id]])
      redirect to("/fanny_packs/#{fanny_pack.id}")
    end

  end
end

