angular
  .module("promisingApp", ["flakyHttp"])
  .constant("flakyHttpSettings", {
    // randomized $http failure rate (and delay)
    // so you can test your success/error callbacks
    FAIL_RATE: 0, // 0-100 percent
    min_delay_ms: 0,
    max_delay_ms: 900
  })
  .controller("ApiDashboardController", ApiDashboardController)


ApiDashboardController.$inject = ["$http"];
function ApiDashboardController($http){
  var vm = this;

  this.popular_endpoints = [
    "https://api.spotify.com/v1/search?q=never+gonna+give+you+up&type=track",
    "https://www.reddit.com/r/Rick_Astley/.json",
    "https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=4ef070a1a5e8d5fd19faf868213c8bd0&nojsoncallback=1&text=rick+astley"
  ];

  this.api_endpoint = ""; // user inputed url
  this.display_data = null; // JSON response data
  this.display_error = "";
  this.display_title = "";
  this.pending = false;

  this.getEndpoint = function(endpoint){
    this.api_endpoint = endpoint || this.api_endpoint;
    if (!this.api_endpoint) { return; }

    this.pending = true;

    $http
      .get(this.api_endpoint)
      .then(
        function onSuccess(response){
          vm.display_error = "";
          vm.display_data = response.data;
          vm.pending = false;
          vm.display_title = vm.api_endpoint;
          vm.api_endpoint = ""
        },

        function onError(error){
          vm.display_error = "Error - Request Failed"
          vm.display_data = null;
          vm.display_title = vm.api_endpoint;
          vm.pending = false;
        }
      );

  };

}
