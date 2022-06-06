import { Button } from "./Button";
import { useFetch } from "../Hooks/useFetch";
import { useButtons } from "../Hooks/useButtons";

export function Slider() {
  const { images, loading } = useFetch();
  const { slideIndex, showClickSlide, nextSlide, prevSlide } = useButtons(
    images,
    loading
  );

  return (
    <div className="carousel slide">
      <div className="carousel-indicators">
        {loading === false &&
          Array.from({ length: images.length }).map((item, index) => {
            return (
              <button
                type="button"
                className={slideIndex === index + 1 ? "active" : ""}
                onClick={() => showClickSlide(index + 1)}
                data-bs-target
                key={index}
              ></button>
            );
          })}
      </div>
      <div className="carousel-inner">
        {loading === false &&
          images.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  slideIndex === index + 1
                    ? "sliderItem nowActive"
                    : "sliderItem"
                }
              >
                <img
                  src={item}
                  index={index}
                  className="img d-block w-100"
                  alt="..."
                />
              </div>
            );
          })}
      </div>
      <Button direction={"prev"} onClick={prevSlide} />
      <Button direction={"next"} onClick={nextSlide} />
    </div>
  );
}
