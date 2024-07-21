import styles from "./OurPerformance.module.scss";

const OurPerformance = () => {
  return (
    <section className={styles.OurPerformance}>
      <div className="wrapper">
        <h2>Our Performance</h2>
        <div className="stats-container">
          <div className="stat">
            <p>
              <span>18%</span>Avg. Annual Return
            </p>
          </div>
          <div className="stat">
            <p>
              <span>$1.5B</span>Total Investment Capital
            </p>
          </div>
          <div className="stat">
            <p>
              <span>20%</span>Lower Volatility Rate
            </p>
          </div>
          <div className="stat">
            <p>
              <span>3,000+</span>Jobs Created
            </p>
          </div>
          <div className="stat">
            <p>
              <span>$5B</span>Energy Cost Reduction
            </p>
          </div>
          <div className="stat">
            <p>
              <span>7%</span>Overall Fund Growth
            </p>
          </div>
          <div className="stat">
            <p>
              <span>3.7M tons</span>CO2 Emission Reduction
            </p>
          </div>
          <div className="stat">
            <p>
              <span>796</span>Total Investors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPerformance;
