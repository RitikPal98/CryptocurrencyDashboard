import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";

import DashboardHeader from "../components/DashboardHeader";
import Categories from "../components/statistics/Categories";
import Exchanges from "../components/statistics/Exchanges";
import AssetPlatforms from "../components/statistics/AssetPlatforms";
import MarketIndexes from "../components/statistics/MarketIndexes";
import CoinMarkets from "../components/tables/CoinMarkets";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import PolarAreaChart from "../components/charts/PolarAreaChart";
import LineChart from "../components/charts/LineChart";
import AreaChart from "../components/charts/AreaChart";
import Spacer from "../components/Spacer";

const Dashboard = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Cryptocurrency Dashboard</title>
      </Helmet>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <DashboardHeader />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Categories />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Exchanges />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <AssetPlatforms />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <MarketIndexes />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <CoinMarkets />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <PieChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <DoughnutChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <PolarAreaChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <LineChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <AreaChart />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
