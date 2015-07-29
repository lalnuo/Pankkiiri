angular.module('banker')
  .service('NordeaParserService', function() {
    this.parse = function(data) {
      var rows = data.replace(/\r/g, '').split('\n');
      rows = rows.filter(function(row) { return row.length !== 0; });
      rows = rows.slice(2, rows.size); // First two lines are header rows

      return rows.map(function(row) {
        row = row.split('\t');
        var date = row[1].split('.');
        date = new Date(date[2], date[1], date[0]);
        return {
          date: date,
          reciever: row[4],
          sum: parseFloat(row[3])
        }
      });
    };
  });
