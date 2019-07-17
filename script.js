//'d68d0e4d3e8682a82efdc8a98fac6fe2';
const apiKey = '1dedcaa416595569421e9d6c269fc861';

document.addEventListener('DOMContentLoaded', bindButtons);
//api.openweathermap.org/data/2.5/weather?q=Naples,us&appid=1dedcaa416595569421e9d6c269fc861
function bindButtons() {
  document
    .getElementById('zipSubmit')
    .addEventListener('click', function(event) {
      var zipReq = new XMLHttpRequest();
      var zipPayload = { zip: null };
      zipPayload.zip = document.getElementById('zip').value;
      zipReq.open(
        'GET',
        'http://api.openweathermap.org/data/2.5/weather?q=' +
          zipPayload.zip +
          '&appid=' +
          apiKey,
        true
      );
      zipReq.setRequestHeader('Content-Type', 'application/json');

      document.addEventListener('load', event => {
        var zipResponse = JSON.parse(zipReq.responseText);
        console.log(zipResponse);
        document.getElementById('location').textContent = zipResponse.name;
        document.getElementById('weather').textContent = zipResponse.main;
      });
      zipReq.send(JSON.stringify(zipPayload));
      event.preventDefault();
    });

  document
    .getElementById('citySubmit')
    .addEventListener('click', function(event) {
      var cityReq = new XMLHttpRequest();
      var cityPayload = { city: null };
      cityPayload.city = document.getElementById('city').value;
      cityReq.open(
        'GET',
        'http://api.openweathermap.org/data/2.5/weather?q=' +
          cityPayload.city +
          '&appid=' +
          apiKey,
        true
      );
      cityReq.setRequestHeader('Content-Type', 'application/json');

      document.addEventListener('load', event => {
        var cityResponse = JSON.parse(cityReq.responseText);
        document.getElementById('location').textContent = cityResponse.name;
        document.getElementById('weather').textContent = cityResponse.main;
      });
      cityReq.send(JSON.stringify(cityPayload.city));
      event.preventDefault();
    });
}
