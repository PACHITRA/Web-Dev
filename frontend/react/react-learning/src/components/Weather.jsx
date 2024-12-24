/* eslint-disable react/no-unescaped-entities */

// eslint-disable-next-line react/prop-types
const Weather = ({ temp }) => {
    if (temp < 15) {
      return <div>It's cold</div>;
    } else if (temp >= 15 && temp < 25) {
      return <div>It's nice</div>;
    } else {
      return <div>It's hot</div>;
    }
  };
  
  export default Weather;
  