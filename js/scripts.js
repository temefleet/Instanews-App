$(function(){
  
  //on selecting category
  $('#selector').on('change', function(event) {

    //prevent defaults
    event.preventDefault();

    // variable declarations
    var userInput = '',
        url = '',
        result = {},
        hasImage = {},
        twelveArticles = {},
        articleImage = '';

    // clear articles and footer error
    $('.articles').empty();
    $('#error').empty();

    // show loader    
    $('#loader').show();

    // keep footer on bottom
    $('footer').addClass('absolute-footer');

    // move header top
    $('header').removeClass('clean').addClass('busy');
  
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

      $('.articles').show();
      
      $.each(twelveArticles, function(key, value){
        //get image url
        articleImage = value.multimedia[4].url;
        
        //append markup
        $('.articles').append(
          '<li>' +
            '<a href="' + value.url + '">' +
              '<div class="article-box"' +
                'style="background-image: url(' + articleImage + ')">' +
                  '<p>' + value.abstract + '</p>' +
              '</div>' +
            '</a>' +
          '</li>'
        ); //end append
      }); //end each
    }) //end done
    
    .fail(function(err) {
      $('header').removeClass('busy').addClass('clean');
      
      // error message in footer
      $('footer').prepend(
          '<p id="error">Sorry! There a problem, please try again.</p>'
      ); //end append
      throw err;
    })
    .always(function(){
      //remove absolute footer
      $('footer').removeClass('absolute-footer');

      //remove load
      $('#loader').hide();

    }); //end ajax call
  }); // end selector
}); //end main
