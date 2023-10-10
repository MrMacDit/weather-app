<template>
  <div class="body" style="border: solid 2px white">
    <div class="row">
      <div class="col-md-6">
        <p>Today is: {{ day }} in {{ locationRegion }}</p>
        <p>{{ condition }} in {{ locationName }} city</p>
        <section>{{ temperature }}oC</section>
      </div>
      <!-- <div class="col-md-6"></div> -->
      <div class="col-md-6">
        <p>Humidity: {{ humidity }}</p>
        <p>Air Pressure: {{ pressure }}</p>
        <p>Wind Speed: {{ windSpeed }}</p>
        <p>Wind Direction: {{ windDirection }}</p>
      </div>
    </div>
    <!-- <div class="row"></div> -->
  </div>
</template>

<script lang="ts">
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
  methods: {
    // API CALLS
    getLocation() {
      navigator.geolocation.getCurrentPosition(this.weatherAPI);
    },
    async weatherAPI(collect: any) {
      console.log("DATA OO!!!!", collect);
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
        console.log(
          `condition: ${this.condition}, temperature: ${this.temperature}, day: ${this.day}, humidity: ${this.humidity}, pressure: ${this.pressure}, windDirection: ${this.windDirection}, windSpeed: ${this.windSpeed}, isDay: ${this.isDay}, locationName: ${this.locationName}, locationRegion: ${this.locationRegion}`
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getLocation();
    // this.weatherAPI();
  },
};
</script>

<style>
.body {
  display: flex;
}
</style>
