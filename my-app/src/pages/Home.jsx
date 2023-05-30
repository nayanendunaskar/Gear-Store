import { useContext, useEffect } from "react";
import { GenderSection } from "../components/GenderSection";
import { Header } from "../components/Header";
import { DataContext } from "../context/DataContext";
import { FilterContext } from "../context/FilterContext";
import { FeatureProducts } from "../components/FeatureProducts";

export const Home = () => {
  const { dispatchData } = useContext(DataContext);
  const { dispatchFilter } = useContext(FilterContext);
  useEffect(() => {
    dispatchData({
      type: "SET_SHOWSEARCH_FALSE",
      payload: false,
    });
    dispatchFilter({
      type: "CLEAR_ALL_FILTERS",
      payload: "",
    });
  }, []);
  return (
    <>
      <Header />
      <GenderSection />
      <FeatureProducts />
    </>
  );
};