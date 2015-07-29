angular.module('banker')
  .controller('BankerCtrl', function($scope, NordeaParserService, AnalyzerFactory) {
    $scope.readFile = function(data) {
      data = NordeaParserService.parse(data);
      $scope.analysis = AnalyzerFactory.analyze(data);
    };
  });
