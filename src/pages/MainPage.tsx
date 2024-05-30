import { useEffect, useState } from "react";
import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { fuels, years } from "../constants";
import { useSearchParams } from "react-router-dom";
import { fetchCars } from "../utils";
import { CarType } from "../types";
import ShowMore from "../components/ShowMore";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[]>([]);

  const params = useSearchParams();

  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());

    fetchCars(paramsObj).then((res: CarType[]) => setCars(res));
  }, [params]);

  return (
    <div>
      <Hero />

      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container ">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Discover cars you might like</p>
        </div>
        {/* Filter Area */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fuel Type" options={fuels} />
            <CustomFilter title="Year" options={years} />
          </div>
        </div>
        {!cars || cars.length < 1 ? (
          <div className="home__error-container">
            <h2>Sorry No Results Found</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card car={car} key={i} />
              ))}
            </div>
          </section>
        )}
        <ShowMore />
      </div>
    </div>
  );
};

export default MainPage;
