import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => {
          return (
            <li
              key={i}
              onClick={() => setActiveIndex(i)}
              className={activeIndex === i ? "active" : ""}
            >
              {value}
            </li>
          );
        })}
        {/* <li className="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li> */}
        {/* we did this you know */}
      </ul>
    </div>
  );
}

export default Categories;
