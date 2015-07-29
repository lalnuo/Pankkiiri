angular.module('banker')
  .factory('AnalyzerFactory', function() {
    var totalConsumption = 0;
    var totalChange = 0;
    var totalEarned = 0;

    var calculateTotals = function(transactions) {
      return transactions.map(function(transaction) {
        return transaction.sum;
      }).forEach(function(sum) {
        if (sum < 0) totalConsumption += -1 * sum;
        if (sum > 0) totalEarned += sum;
        totalChange += sum;
      });
    };

    var averageConsumptionPerDay = function(transactions) {
      // Calculate days between the dates
      var first = transactions[0].date;
      var last = transactions[transactions.length - 1].date;
      var dayInMs = 1000 * 60 * 60 * 24;
      var days = (last.getTime() - first.getTime()) / dayInMs + 1;
      return totalConsumption / days;
    };

    return {
      analyze: function(transactions) {
        var result = {};
        calculateTotals(transactions);
        result.totalChange = totalChange;
        result.totalEarned = totalEarned;
        result.totalConsumption = totalConsumption;

        result.averageConsumptionPerDay = averageConsumptionPerDay(transactions);
        console.log(result);
        return result;
      }
    };
  });
