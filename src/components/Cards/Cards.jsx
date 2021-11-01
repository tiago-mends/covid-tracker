import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate }}) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={4} justify="center" sx={{ maxWidth: 1000 }}>
        <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infectados</Typography>
            <Typography variant="h5">
              <CountUp 
                start={0} 
                end={confirmed.value} 
                duration={2.5} 
                separator="." 
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString('pt-BR')}</Typography>
            <Typography variant="body2">Contaminados por Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Mortes</Typography>
            <Typography variant="h5">
              <CountUp 
                start={0} 
                end={deaths.value} 
                duration={2.5} 
                separator="." 
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString('pt-BR')}</Typography>
            <Typography variant="body2">Mortos por Covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;