import { Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths }, country }) => {

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infectados', 'Mortes'],
          datasets: [
            {
              label: 'Pessoas',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Estado atual em ${country}` },
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {barChart}
    </div>
  );
};

export default Chart;