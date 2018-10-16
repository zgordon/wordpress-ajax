( function( $ ){

  $( '#secondary' ).prepend( '<p><a href="#like" class="btn jsforwp-like">Like This Site</a> <span class="jsforwp-count"></span> Likes</p>' );

  // Change the html() value to jsforwp_globals.total_likes
  $( '.jsforwp-count' ).html( 'Total # Here' );

  $('.jsforwp-like').click( function(){

    event.preventDefault();

    // Change url to jsforwp_globals.ajax_url
    // Change data.action to 'jsforwp_add_like'
    // Change data._ajax_nonce to jsforwp_globals.nonce
    $.ajax({
      type : 'post',
      dataType : 'json',
      url : 'url',
      data : {
        action: 'data.action',
        _ajax_nonce: 'data._ajax_nonce'
      },
      success: function( response ) {

         if( 'success' == response.type ) {

           // Change the html() value to response.total_likes
           $(".jsforwp-count").html( 'Total # Likes Here' );

         }
         else {
            alert( 'Something went wrong!' );
         }

      }
    })

  } );

} )( jQuery );
