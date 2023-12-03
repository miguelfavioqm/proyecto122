import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="flex justify-around p-4 flex-wrap gap-2">
      <Card
        title={"SALAR DE UYUNI"}
        url={
          "https://www.civitatis.com/f/bolivia/potosi/excursion-salar-uyuni-589x392.jpg"
        }
      ></Card>
      <Card
        title={"ALTIPLANO"}
        url={
          "https://viajandoporahi.com/wp-content/uploads/2013/12/uyuni-bolivia-aniko-villalba-341.jpg"
        }
      ></Card>
      <Card
        title={"YUNGAS BOLIVIANO"}
        url={
          "https://www.parlamentoandino.org/images/actualidad/conoce-tu-region/Los-yungas.jpg"
        }
      ></Card>
    </div>
  );
};

export default CardContainer;
