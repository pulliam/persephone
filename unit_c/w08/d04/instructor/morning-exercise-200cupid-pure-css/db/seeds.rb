require_relative "config"

User.delete_all
Visit.delete_all

u1 = User.create({name: "Philco",          password: 'abcd1234', password_confirmation: 'abcd1234', born_on: "January 2, 1999",  location: "NYC", avatar_img_url: "/img/philco.jpeg"})
u2 = User.create({name: "AscotBoi",        password: 'abcd1234', password_confirmation: 'abcd1234', born_on: "August 11, 1918",  location: "NYC", avatar_img_url: "/img/ascotboi.jpeg"})
u3 = User.create({name: "Bananar",         password: 'abcd1234', password_confirmation: 'abcd1234', born_on: "January 21, 1955", location: "NYC", avatar_img_url: "/img/bananar.jpeg"})
u4 = User.create({name: "SmileyC",         password: 'abcd1234', password_confirmation: 'abcd1234', born_on: "June 13, 1921",    location: "NYC", avatar_img_url: "http://factmag-images.s3.amazonaws.com/wp-content/uploads/2015/07/terry-richardson-miley-cyrus-02-635x372-616x372-616x372.jpg"})
u5 = User.create({name: "NeverOuttaStyle", password: 'abcd1234', password_confirmation: 'abcd1234', born_on: "May 1, 1922",      location: "NYC", avatar_img_url: "http://static3.businessinsider.com/image/54b94d266da811fd05c887c8/john-boehner-trolls-obama-with-a-bunch-of-taylor-swift-gifs.jpg"})
u6 = User.create({name: "BeliebIt",        password: 'abcd1234', password_confirmation: 'abcd1234', born_on: "May 13, 1921",     location: "NYC", avatar_img_url: "http://blogimg.ngfiles.com/510000/510105/158019994_YouTube_Justin_Bieber_Cele.jpg"})
u7 = User.create({name: "Deebles",         password: 'abcd1234', password_confirmation: 'abcd1234', born_on: "October 7, 1928",  location: "NYC", avatar_img_url: "/img/centrodl.jpeg"})
u8 = User.create({name: "admin",           password: 'abcd1234', password_confirmation: 'abcd1234', born_on: "October 7, 1928",  location: "NYC", avatar_img_url: "/img/centrodl.jpeg"})

Visit.create({visitor_id: u1.id, visited_id: u2.id, created_at: DateTime.new(2015,12,01,8,37)})
Visit.create({visitor_id: u1.id, visited_id: u2.id, created_at: DateTime.new(2015,12,01,8,50)})
Visit.create({visitor_id: u1.id, visited_id: u2.id, created_at: DateTime.new(2015,12,01,9,02)})
Visit.create({visitor_id: u2.id, visited_id: u1.id, created_at: DateTime.new(2015,12,01,10,33)})
Visit.create({visitor_id: u3.id, visited_id: u5.id, created_at: DateTime.new(2015,12,01,8,32)})


