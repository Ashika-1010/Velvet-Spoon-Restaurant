import React, { useMemo, useState } from "react";
import { data } from "../restApi.json";

const Menu = () => {
  const dishes = data[0].dishes;

  // Build category list from dishes
  const categories = useMemo(() => {
    const unique = new Set(dishes.map((d) => d.category));
    return ["All", ...Array.from(unique)];
  }, [dishes]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchCategory =
        activeCategory === "All" || dish.category === activeCategory;

      const matchSearch =
        dish.title.toLowerCase().includes(query.toLowerCase().trim());

      return matchCategory && matchSearch;
    });
  }, [dishes, activeCategory, query]);

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            Explore our carefully crafted dishes made with fresh ingredients,
            rich flavors, and culinary passion to deliver a truly unforgettable
            dining experience.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="menu_controls">
          <input
            className="menu_search"
            type="text"
            placeholder="Search dishes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="menu_filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={activeCategory === cat ? "filter_btn active" : "filter_btn"}
                onClick={() => setActiveCategory(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes */}
        <div className="dishes_container">
          {filteredDishes.length === 0 ? (
            <p className="no_results">No dishes found.</p>
          ) : (
            filteredDishes.map((dish) => (
              <div className="card" key={dish.id}>
                <img src={dish.image} alt={dish.title} />
                <h3>{dish.title}</h3>
                <button type="button">{dish.category}</button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;