$(":header").each(function(){
  var $that = $(this)
  var sentence = $that.text().trim().split(' ').join('+')
  $.ajax({
    url: "https://yoda.p.mashape.com/yoda?sentence="+sentence+".",
    headers: {"X-Mashape-Key": "L9DrylEomamshzA5ctxe19HmQWH7p12iswPjsnYQOk3KYvs5Jr",
      "Accept": "text/plain"}
    })
  .done(function(resp){
      $that.text(resp);
  })
})
