// src/components/Filter.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setFilter } from "../redux/slices/inventorySlice";
import {
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import { mockFilters } from "../mockData";

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.inventory.filter);

  const handleMakeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMakes = event.target.checked
      ? [...filter.make, event.target.name]
      : filter.make.filter((make) => make !== event.target.name);
    dispatch(setFilter({ ...filter, make: newMakes }));
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ ...filter, duration: event.target.name }));
  };

  const handleApplyFilters = () => {
    console.log("Applying filters", filter);
    // Add logic to apply filters
  };

  const handleRemoveAllFilters = () => {
    dispatch(setFilter({ make: [], duration: "" }));
  };

  return (
    <Box>
      <Typography
        p={2}
        variant="h4"
        gutterBottom
        sx={{ borderBottom: "1px solid #f0f0f0" }}
        fontWeight={700}
      >
        Filter Data By
      </Typography>
      <Box sx={{ p: 2, borderBottom: "1px solid #f0f0f0" }}>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend" sx={{ fontWeight: 700 }}>
            Make
          </FormLabel>
          <FormGroup>
            {mockFilters.makes.map((make) => (
              <FormControlLabel
                key={make}
                control={
                  <Checkbox
                    checked={filter.make.includes(make)}
                    onChange={handleMakeChange}
                    name={make}
                  />
                }
                label={make}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
      <Box sx={{ p: 2, borderBottom: "1px solid #f0f0f0" }}>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend" sx={{ fontWeight: 700 }}>
            Duration
          </FormLabel>
          <FormGroup>
            {mockFilters?.durations.map((duration) => (
              <FormControlLabel
                key={duration}
                control={
                  <Checkbox
                    checked={filter.duration === duration}
                    onChange={handleDurationChange}
                    name={duration}
                  />
                }
                label={duration}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          color="primary"
          onClick={handleApplyFilters}
          fullWidth
          sx={{ mr: 2 }}
        >
          Apply Filters
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleRemoveAllFilters}
          fullWidth
        >
          REMOVE ALL FILTERS
        </Button>
      </Box>
    </Box>
  );
};

export default Filter;
