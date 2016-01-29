var fetchLeo = function(event){
  $.ajax({
      url: '/leo',
      type: 'GET',
      dataType: 'json'
    }).done(renderLeo);
};

var renderLeo = function(leo) {
  $leoDiv = $('<div>');
  $img = $('<img>');
  $img.attr('src', leo.img);
  $h1 = $('<h1>')
  $h1.text(leo.name)
  $leoDiv.append($h1);
  $leoDiv.append($img);
  $('body').append($leoDiv);
}

var rendercolor = function(color) {
  console.log(color);
}

var getRandomColor = function(event) {
  $.ajax({
    url: "/random_color",
    dataType: "json",
    type: "POST"
  }).done(rendercolor);
}

var addTemplate = function(event){
  var temp = $('#entry-template').html();
  var template = Handlebars.compile(temp);
  var html = template({greeting: "Hello from Handlebars"});
  $('body').append(html);
}

$(document).ready(function(){
  $('#leo-me').on('click', fetchLeo);
  $('#random-color').on('click', getRandomColor);
  $('#handle-me').on('click', addTemplate);
});
