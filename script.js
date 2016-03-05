$( document ).ready(function() {
  var mondoData = $.ajax({
    type: "GET",
    beforeSend: function(request) {
      request.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2SU5ER3pUM2s2dHo4anAiLCJleHAiOjE0NTcyMDM1MjMsImlhdCI6MTQ1NzE4MTkyMywianRpIjoidG9rXzAwMDA5NXF2bUVQMWJWbGN0Z1dFR2YiLCJ1aSI6InVzZXJfMDAwMDk1cW9mQkRzS1MxUmZFOWpWSiIsInYiOiI0In0.zWm9uYTG8MCJTBeJb4XEZdZroFoX55wKQcvhRbA8ve4" );
    },
      url: "https://staging-api.getmondo.co.uk/transactions?expand[]=merchant&account_id=acc_000095qofBZ93NkAfWYqK9&since=2009-11-10T23:00:00Z" }
    ).done(function(response) {
      var result = _.filter(response.transactions, function(transaction){ 
        if(transaction.merchant){
          return transaction.merchant.metadata.foursquare_category == "Coffee Shop";          
        }
        return false;
      })
      console.log(result);
    }
    ).fail(function() {
    console.log( "error" );}
    )
});

//$("#menu > #keys1,#keys2,#keys3").function(){
//
//}