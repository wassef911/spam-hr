const data = require("./in/data.json");
const { composeAsync ,send} = require("./utils");

(async () => {
  try {
    await composeAsync(
      data.companies,
      send
    );
  } catch (err) {
    console.log(err);
  }
})();
