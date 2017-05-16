$(document).ready(function(){
  $('#search').click(function(){
    var searchTerm = $('#searchQuery').val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    
    $.ajax({
      type: 'GET',
      url: url,
      async: false,
      dataType: 'json',
      success: function(data){
        // console.log(data[1][0]); Gets the heading
        // console.log(data[2][0]); Gets the description
        // console.log(data[3][0]); Gets the link
        $('#output').html('');
      for ( var i = 0; i < data[1].length; i++) {
        $('#output').append("<li><a href="+data[3][i]+"target='_blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
      }  
      },
      error: function(errorMessage){
        alert('Error'); 
        console.log(data);
      } 
      
    });
  });
});