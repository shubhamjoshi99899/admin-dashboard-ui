// src/components/Dashboard.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Grid, Paper, Typography, Box, Card, CardContent } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { mockInventoryData } from "../mockData";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Filter from "./Filter";
import Header from "./Header";

const Dashboard: React.FC = () => {
  const inventory = useSelector((state: RootState) => state.inventory);

  const columns: GridColDef[] = [
    { field: "date", headerName: "Date", width: 150 },
    { field: "newInventory", headerName: "New Inventory", width: 150 },
    { field: "newTotalMSRP", headerName: "New Total MSRP", width: 150 },
    { field: "newAvgMSRP", headerName: "New Avg MSRP", width: 150 },
    { field: "usedInventory", headerName: "Used Inventory", width: 150 },
    { field: "usedTotalMSRP", headerName: "Used Total MSRP", width: 150 },
    { field: "usedAvgMSRP", headerName: "Used Avg MSRP", width: 150 },
    { field: "cpoInventory", headerName: "CPO Inventory", width: 150 },
    { field: "cpoTotalMSRP", headerName: "CPO Total MSRP", width: 150 },
    { field: "cpoAvgMSRP", headerName: "CPO Avg MSRP", width: 150 },
  ];

  const recentGatherData = [
    {
      label: "New Units",
      value: mockInventoryData.recentData.newUnits,
    },
    {
      label: "New MSRP",
      value: mockInventoryData.recentData.newMSRP,
    },
    {
      label: "New Avg. MSRP",
      value: mockInventoryData.recentData.newAvgMSRP,
    },
    {
      label: "Used Units",
      value: mockInventoryData.recentData.usedUnits,
    },
    {
      label: "Used MSRP",
      value: mockInventoryData.recentData.usedMSRP,
    },
    {
      label: "Used Avg. MSRP",
      value: mockInventoryData.recentData.usedAvgMSRP,
    },
    {
      label: "CPO Units",
      value: mockInventoryData.recentData.cpoUnits,
    },
    {
      label: "CPO MSRP",
      value: mockInventoryData.recentData.cpoMSRP,
    },
  ];

  return (
    <>
      <Box mx={3}>
        <Header />

        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Paper>
                  <Box p={2}>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      mb={4}
                      gutterBottom
                    >
                      Recent Gathered Data {mockInventoryData.recentData.date}
                    </Typography>
                    <Grid container spacing={2}>
                      {recentGatherData?.map((item) => (
                        <Grid item xs={1.5}>
                          <Card
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              minHeight: "100px",
                            }}
                          >
                            <CardContent>
                              <Typography variant="h5" fontWeight={700}>
                                {item?.value.toLocaleString()}
                              </Typography>
                              <Typography
                                fontSize={"13px"}
                                fontWeight={550}
                                sx={{ color: "#FF9926" }}
                              >
                                {item?.label}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Box p={2}>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      mb={4}
                      gutterBottom
                    >
                      Inventory Count
                    </Typography>
                    <ResponsiveContainer
                      style={{ marginTop: "24px" }}
                      width="100%"
                      height={300}
                    >
                      <BarChart
                        width={100}
                        data={mockInventoryData.inventoryCounts}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="new" fill="#FF9926" barSize={50} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Box p={2}>
                    <Typography variant="caption" fontWeight={600} mb={5}>
                      Inventory Count
                    </Typography>
                    <ResponsiveContainer
                      style={{ marginTop: "24px" }}
                      width="100%"
                      height={300}
                    >
                      <BarChart
                        width={100}
                        data={mockInventoryData.inventoryCounts}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="new" fill="#FF9926" barSize={50} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Box p={2}>
                    <Typography variant="h6">History Log</Typography>
                    <DataGrid
                      rows={inventory.data}
                      columns={columns}
                      autoHeight
                      // pageSize={5}
                    />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={3}>
          <Filter />
        </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
