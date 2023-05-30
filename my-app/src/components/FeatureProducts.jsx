import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { brandImgArr } from "../utils/brandImgArr";
import "../components/FeatureProducts.css";
import { useNavigate } from "react-router";

export const FeatureProducts = () => {
  const { dispatchFilter } = useContext(FilterContext);
  const navigate = useNavigate();
  return (
    <>
      <h1 className="featurebrands-header">Featured Products </h1>
      <div className="feature-brands-section">
        {brandImgArr.map(({ id, brand, url }) => {
          return (
            <img
              onClick={() => {
                dispatchFilter({ type: "SET_BRAND_FILTER", payload: brand });
                navigate("/products");
              }}
              src={url}
              key={id}
              alt="url"
              width="172px"
              className="brand-image-tile"
            />
          );
        })}
      </div>
    </>
  );
};