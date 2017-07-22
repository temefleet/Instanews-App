$(function(){
  //on selecting category
  $('#selector').on('change', function(event) {

    //prevent defaults
    event.preventDefault();

    // variable declarations
    var userInput = "",
        url = "",
        result = {},
        hasImage = {},
        twelveArticles = {},
        articleImage = "";

    // clear articles
    $('.articles').empty();

    // show loader    
    $('#loader').show();
    
    // = user selection
    userInput = $('#selector').val();
    
    // nyt api address creation
    url = 'https://api.nytimes.com/svc/topstories/v2/';
    url += userInput + '.json?';
    url += $.param({
      'api-key': '90324784f44b48cd8cd582865f7b09d2'
    }); // end of url declaration
    
    //make ajax call
    $.ajax({
      url: url,
      method: 'GET',
    })
    .done(function(data) {
      
      result = data.results;
      hasImage = result.filter(function(filterArray) {
        return filterArray.multimedia.length > 0;
      });
      twelveArticles = hasImage.slice(0, 12);
        
      console.log(twelveArticles);

      $('.articles').show();
      
      $.each(twelveArticles, function(key, value){
        $('.articles').append(
          '<li>' +
            '<a href="' + value.url + '">' +
              '<div class="article-text">' +
                '<p>' + value.abstract + '</p>' +
              '</div' +
            '</a>' +
          '</li>'
        ); //end append
      }); //end each
    }) //end done
    
    .fail(function(err) {
      alert("Sorry! We've encountered a problem! Abandon Ship!");
      throw err;
    })
    .always(function(){
      //remove load
      $('#loader').hide();
    }); //end ajax call
  }); // end selector
}); //end main