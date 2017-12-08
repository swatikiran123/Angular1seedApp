angular.module("MyApp", [])
.controller("MyCtrl", function ($scope) {
  $scope.showData= false;

  $scope.callOne = function (data) {
    console.log("ok")
    console.log(data)
    $scope.showData= true;
    $scope.$broadcast("toggleAnimation", data);

  }

  $scope.clear = function () {
    $scope.showData= false;
  }
})
.directive("myDirOne", function () {

  return {
    restrict : "E",
    template : "<div class='table-responsive'>"+
    "<table align='right' class='table table-bordered'>"+
    "  <tbody>"+
    "    <tr>"+
    "      <td><b>Loan Amount:</b></td>"+
    "      <td align='right'>nbvnb</td>"+
    "    </tr>"+
    "    <tr>"+
    "      <td><b>Number of EMIs:</b></td>"+
    "      <td align='right'>2</td>"+
    "    </tr>"+
    "    <tr>"+
    "      <td><b>Annual Interest Rate:</b></td>"+
    "      <td align='right'>.0800</td>"+
    "    </tr>"+
    "    <tr>"+
    "      <td><b>Monthly Interest Rate:</b></td>"+
    "      <td align='right'>.00667</td>"+
    "    </tr>"+
    "    <tr>"+
    "      <td><b>Monthly EMI Payment:</b></td>"+
    "      <td align='right'>Rs. 25.25</td>"+
    "    </tr>"+
    "    <tr>"+
    "      <td><b>Total Loan Amount Payable:</b></td>"+
    "      <td align='right'>Rs. 50.50</td>"+
    "    </tr>"+
    "    <tr>"+
    "      <td><b>Total Interest Payable:</b></td>"+
    "      <td align='right'>Rs. .50</td>"+
    "    </tr>"+
    "  </tbody>"+
    "</table>"+
             " </div>",
    link : function (scope) {
      scope.$on("toggleAnimation", function (event, args) {
        scope.broadcastedText = args;
      });
    }
  };

})

.directive("myDirTwo", function () {

  return {
    restrict : "E",
    template : " <div class='table-responsive'>"+
    "<table class='table table-bordered' border='1' align='right' cellpadding='5' cellspacing='0' width='100%' style='font-family:arial;font-size:12px'>"+
    "  <tbody>"+
    "    <tr>"+
    "      <td align='center' valign='bottom' bgcolor='white'><b>Period</b></td>"+
    "      <td align='right' valign='middle' bgcolor='white'><b>EMI</b></td>"+
    "      <td align='right' valign='middle' bgcolor='white'><b>Interest</b></td>"+
    "      <td align='right' valign='middle' bgcolor='white'><b>Principal</b></td>"+
    "      <td align='right' valign='middle' bgcolor='white'><b>Balance</b></td>"+
    "    </tr>"+
    "    <tr>"+
    "      <td align='right' valign='middle' bgcolor='white'>0</td>"+
    "      <td align='right' bgcolor='white'>&nbsp;</td>"+
    "      <td align='right' bgcolor='white'>&nbsp;</td>"+
    "      <td align='right' bgcolor='white'>&nbsp;</td>"+
    "      <td align='right' valign='middle' bgcolor='white'>Rs. 50.00</td>"+
    "    </tr>"+
    "    <tr>"+
    "      <td align='right' valign='middle'>1</td>"+
    "      <td align='right' valign='middle' bgcolor='white'>Rs. 25.25</td>"+
    "      <td align='right' valign='middle' bgcolor='white'>Rs. .33</td>"+
    "      <td align='right' valign='middle' bgcolor='white'>Rs. 24.92</td>"+
    "      <td align='right' valign='middle' bgcolor='white'>Rs. 25.08</td>"+
    "    </tr>"+
    "    <tr>"+
    "    </tr>"+
    "    <tr>"+
    "      <td align='right' valign='middle'>2</td>"+
    "      <td align='right' valign='middle' bgcolor='white'>Rs. 25.25</td>"+
    "      <td align='right' valign='middle' bgcolor='white'>Rs. .17</td>"+
    "      <td align='right' valign='middle' bgcolor='white'>Rs. 25.08</td>"+
    "      <td align='right' valign='middle' bgcolor='white'>Rs. .00</td>"+
    "      </tr>"+
    "      <tr>"+
    "      </tr>"+
    "    </tbody>"+
    "  </table>"+
    "</div>",
    link : function (scope) {
      scope.$on("toggleAnimation", function (event, args) {
        scope.broadcastedText = args;
      });
    }
  };

});