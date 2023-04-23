const apiKey = "aadef87b858759eb3b16e4073cb59e64";
const lat = 51.511135;
const long = -0.146908;
let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`;

const weather = async () => {
  const { data } = await axios.get(url);
  console.log(data);
};

weather();
