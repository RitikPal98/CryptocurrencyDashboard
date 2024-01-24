import React from 'react';
import './About.css';
function About(props) {
  return (
    <div className='about-main'>
      <section>
        <h2>About Us</h2>
        <p>
          Welcome to Cryptocurrency Dashboard, your go-to destination for
          comprehensive and real-time cryptocurrency information. We strive to
          empower enthusiasts and investors with the latest data, trends, and
          insights in the dynamic world of digital assets.
        </p>
      </section>

      <section class='features'>
        <h2>Key Features</h2>
        <ul>
          <li>
            Live Prices: Stay updated with real-time cryptocurrency prices.
          </li>
          <li>
            Trading Volumes: Explore trading volumes for different
            cryptocurrencies.
          </li>
          <li>
            Historical Data: Analyze historical data for informed
            decision-making.
          </li>
          <li>
            Crypto Categories: Easily identify and categorize various
            cryptocurrencies.
          </li>
          <li>
            Insightful Charts: Visualize data using interactive and insightful
            charts.
          </li>
        </ul>
      </section>

      <section class='technologies'>
        <h2>Technologies We Use</h2>
        <p>Our platform is built using cutting-edge technologies, including:</p>
        <ul>
          <li>
            React: A powerful JavaScript library for building dynamic user
            interfaces.
          </li>
          <li>
            Material UI: A React UI framework for creating modern and responsive
            designs.
          </li>
          <li>
            Chart.js: A versatile JavaScript charting library for data
            visualization.
          </li>
          <li>
            CoinGecko API: Seamless integration for fetching comprehensive
            cryptocurrency data.
          </li>
        </ul>
      </section>

      <section class='mission'>
        <h2>Our Mission</h2>
        <p>
          At Cryptocurrency Hub, our mission is to provide a user-friendly and
          informative platform that empowers individuals to navigate the
          cryptocurrency landscape confidently. We believe in transparency,
          accessibility, and continuous innovation to deliver the best
          experience to our users.
        </p>
      </section>
    </div>
  );
}

export default About;
