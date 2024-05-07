import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../common/Filter";
import { setFilter } from "../../store/slice/filterSlice";
import { toTitle } from "../../utils/tools";

const Navbar = () => {
  const { filterSlice } = useSelector((data) => data);
  const dispatch = useDispatch();
  const applyFilter = (key, newval) => {
    dispatch(setFilter({ key, value: newval }));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexWrap: "wrap",
      }}
    >
      {Object.entries(filterSlice).map(([key, val]) => (
        <div style={{ minWidth: "190px" }} key={key}>
          <Filter
            label={toTitle(key)}
            placeholder={toTitle(key)}
            options={val.options}
            value={val.value}
            setValue={(newval) => applyFilter(key, newval)}
          />
        </div>
      ))}
    </div>
  );
};

export default Navbar;
