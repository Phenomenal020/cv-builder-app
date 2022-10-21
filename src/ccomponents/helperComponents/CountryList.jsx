import countries from "./countries";
import styles from "../../static/styles/helpers.module.css";

const CountryList = ({ setSelectedCountry }) => {
  const handleSelectedCountry = value => {
    setSelectedCountry(value);
  };

  return (
    <div className={styles.countryWrapper}>
      {countries.map(country => {
        return (
          <div
            key={Math.random() * 1000}
            onClick={country =>
              handleSelectedCountry(country.target.textContent)
            }
            className={styles.countryItem}
          >
            {country.country}
          </div>
        );
      })}
    </div>
  );
};

export default CountryList;
