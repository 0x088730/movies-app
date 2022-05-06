import Carousel from "framer-motion-carousel";

const colors = ["#f90", "#ef0", "#e0f", "gray"];

export const Carrousel = () => {
  return (
    <div className="container-carrousel">
      <Carousel
        interval={5000}
        renderArrowLeft={({ activeIndex }) => activeIndex}
        renderArrowRight={({ activeIndex }) => activeIndex}
      >
        {colors.map((item, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "50vh",
              backgroundColor: colors[i],
            }}
          ></div>
        ))}
      </Carousel>
    </div>
  );
};
