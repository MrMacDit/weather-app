<template>
  <div class="body">
    <div class="row">
      <div class="col-md-4">
        <AboutTolu />
      </div>
      <div class="col-md-5">
        <div v-if="condition == 'Partly cloudy'">
          <img
            src="../images/gifs/RiningVoyage.gif"
            height="660"
            width="900"
            alt="Partly CLoudy"
          />
        </div>
        <div v-else>
          <img
            src="../images/gifs/Sunny.gif"
            height="660"
            width="900"
            alt="Sunny"
          />
        </div>
      </div>
      <div class="col-md-3 second-col">
        <div>
          <p>Today is: {{ day }} in {{ locationRegion }}</p>
          <p>{{ condition }} in {{ locationName }} city</p>
          <section>{{ temperature }}oC</section>
        </div>
        <hr style="color: white" />
        <h4>Weather Details</h4>
        <div class="weather-details">
          <p>Humidity:</p>
          <span>{{ humidity }}%</span>
        </div>
        <div class="weather-details">
          <p>Air Pressure:</p>
          <span>{{ pressure }}PS</span>
        </div>
        <div class="weather-details">
          <p>Wind Speed:</p>
          <span>{{ windSpeed }}KM/H</span>
        </div>
        <div class="weather-details">
          <p>Wind Direction:</p>
          <span>{{ windDirection }}</span>
        </div>
        <a href="http://google.com" target="_blank"
          ><button class="btn btn-outline-primary btn-lg" href="google.com">
            Let's go!
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AboutTolu from "./AboutTolu.vue";
export default {
  name: "WeatherApp",
  data() {
    return {
      lat: 0,
      long: 0,
      condition: "",
      temperature: 0,
      day: "",
      humidity: 0,
      pressure: 0,
      windDirection: "",
      windSpeed: "",
      isDay: "",
      locationName: "",
      locationRegion: "",
    };
  },
  components: {
    AboutTolu,
  },
  methods: {
    // API CALLS
    getLocation() {
      navigator.geolocation.getCurrentPosition(this.weatherAPI);
    },
    async weatherAPI(collect: any) {
      this.lat = collect.coords.latitude;
      this.long = collect.coords.longitude;
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${this.lat}%2C${this.long}`;
      //   console.log(`URL: ${url}`);
      const parameters = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "b6399befd9mshbca83284f68630bp1ae66ejsn459e60b17b0d",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };
      try {
        let getResponse = await fetch(url, parameters);
        let responseData = await getResponse.json();
        this.condition = responseData.current.condition.text;
        this.temperature = responseData.current.feelslike_c;
        this.day = responseData.current.last_updated;
        this.humidity = responseData.current.humidity;
        this.pressure = responseData.current.pressure_mb;
        this.windDirection = responseData.current.wind_dir;
        this.windSpeed = responseData.current.wind_kph;
        this.isDay = responseData.current.is_day;
        this.locationName = responseData.location.name;
        this.locationRegion = responseData.location.region;
      } catch (error) {
        alert(error);
      }
    },
  },
  async mounted() {
    this.getLocation();
  },
};
</script>

<style>
.weather-details {
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
}
p {
  margin: 0; /* Remove default margin from <p> */
}
.second-col {
  min-height: 600px;
  background-color: rgba(0, 0, 0, 0.863);
  font-weight: bold;
  padding: 40px;
  text-align: center;
}
.body {
  color: whitesmoke;
}
</style>
