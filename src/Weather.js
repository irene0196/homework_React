import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}`
    );
  }
  let apikey = "1fd8093fa5ff12d796d7de756cc9d6b9";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apikey}&units=metric`;
  axios.get(url).then(handleResponse);
}
