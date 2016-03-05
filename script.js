var apiData;
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
      calculateAmount(result);
      var budget;
      $("#submit-button").on("click", function() {
          budget = $("#budget").val();
          console.log(result)
          var spentAmount = calculateAmount(result);
      console.log(spentAmount)
          if (calculateAmount(result) >= budget) {
              $('#budget-message').text('You have overspent your budget!')

          } else {
              $('#budget-message').text('You can have more coffee!')
          }
      });
    }
    ).fail(function() {
    console.log( "error" );}
    )


});


function calculateAmount(apiData) {
    var result = 0;

    for(var i = 0; i < apiData.length; i++) {
        result -= apiData[i].local_amount
    }
    return result;
}

