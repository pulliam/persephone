require_relative "config"

User.delete_all
Visit.delete_all

users = [
  {password: "abcbbd", password_confirmation: "abcbbd", name: "Philco", age: 99, location: "NYC", avatar_img_url: "/img/philco.jpeg"},
  {password: "abcbbd", password_confirmation: "abcbbd", name: "AscotBoi", age: 18, location: "NYC", avatar_img_url: "/img/ascotboi.jpeg"},
  {password: "abcbbd", password_confirmation: "abcbbd", name: "Bananar", age: 55, location: "NYC", avatar_img_url: "/img/bananar.jpeg"},
  {password: "abcbbd", password_confirmation: "abcbbd", name: "SmileyC", age: 21, location: "NYC", avatar_img_url: "http://factmag-images.s3.amazonaws.com/wp-content/uploads/2015/07/terry-richardson-miley-cyrus-02-635x372-616x372-616x372.jpg"},
  {password: "abcbbd", password_confirmation: "abcbbd", name: "NeverOuttaStyle", age: 22, location: "NYC", avatar_img_url: "http://static3.businessinsider.com/image/54b94d266da811fd05c887c8/john-boehner-trolls-obama-with-a-bunch-of-taylor-swift-gifs.jpg"},
  {password: "abcbbd", password_confirmation: "abcbbd", name: "BeliebIt", age: 21, location: "NYC", avatar_img_url: "http://blogimg.ngfiles.com/510000/510105/158019994_YouTube_Justin_Bieber_Cele.jpg"},
  {password: "abcbbd", password_confirmation: "abcbbd", name: "Deebles", age: 28, location: "NYC", avatar_img_url: "/img/centrodl.jpeg"}
]

User.create(users)

visits = [
  {visitor_id: 1, visited_id: 2, created_at: DateTime.new(2015,12,01,8,37)},
  {visitor_id: 1, visited_id: 2, created_at: DateTime.new(2015,12,01,8,50)},
  {visitor_id: 1, visited_id: 2, created_at: DateTime.new(2015,12,01,9,02)},
  {visitor_id: 2, visited_id: 1, created_at: DateTime.new(2015,12,01,10,33)},
  {visitor_id: 3, visited_id: 5, created_at: DateTime.new(2015,12,01,8,32)},
]

Visit.create(visits)
