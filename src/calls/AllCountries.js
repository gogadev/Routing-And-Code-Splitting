export const getAllCountries = async () => {
  try {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const resCountries = await res.json();
    return resCountries;
  } catch (err) {
    console.log(err);
  }
};
