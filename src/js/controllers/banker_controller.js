angular.module('banker')
  .controller('BankerCtrl', function($scope, NordeaParserService, AnalyzerFactory) {
    $scope.readFile = function(data) {
      var data = NordeaParserService.parse(data);
      $scope.analysis = AnalyzerFactory.analyze(data);
    }
  });
