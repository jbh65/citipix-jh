// Load entire document before execution
$(document).ready(function(){


  $('form').on('submit',function(event){
    // stop refresh on submit
    event.preventDefault();
    //get text input and store as var city
    var city=$('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();
    console.log(city);
    // if var city is New York OR New York City OR NYC display nyc.jpg
    if(city === 'new york' || city === 'new york city' || city === 'nyc') {
      $('body').attr('class','nyc');
    }
    // else if var city is San Francisco OR SF OR Bay Area display sf.jpg
    else if(city === 'san francisco' || city === 'sf' || city === 'bay area') {
      $('body').attr('class','sf');
    }
    // else if var city is Los Angeles OR LAX OR LA display la.jpg
    else if(city === 'los angeles' || city === 'lax' || city === 'la') {
      $('body').attr('class','la');
    }
    // else if var city is Austin OR ATX diplay austin.jpg
    else if(city === 'austin' || city === 'atx') {
      $('body').attr('class','austin');
    }
    // else var city is Sydney OR SYD display sydney.jpg
    else if(city === 'sydney' || city === 'syd') {
      $('body').attr('class','sydney');
    }


  });













});
