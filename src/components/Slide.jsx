import { useState, useEffect, useRef } from "react";
const Slide = () => {
  const [slideWidth, getSlideWidth] = useState();
  const [slides, getslides] = useState([]);
  const [activeSlide, getactiveSlide] = useState([]);
  const [activeImageName, getactiveImageName] = useState([]);
  const track = useRef();
  const prevBtn = useRef();
  const nextBtn = useRef();
  const nameRef = useRef();
  const slideImgName = useRef();
  useEffect(() => {
    const slides = Array.from(track.current.children);
    getactiveSlide(nameRef.current.children);
    getactiveImageName(slideImgName.current.children);
    const width = slides[0].getBoundingClientRect().width;
    prevBtn.current.disabled = true;
    getslides(slides);
    getSlideWidth(width);

    const setSlidePosition = (slide, i) => {
      slide.style.left = slideWidth * i + "px";
    };
    slides.forEach(setSlidePosition);
  }, [slideWidth]);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  const moveNext = () => {
    const currentSlide = track.current.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;

    const activeName = nameRef.current.querySelector(".active-name");
    const nextActiveName = activeName.nextElementSibling;

    const slideImgActiveName =
      slideImgName.current.querySelector(".active-slide-name");

    const nextSlideImgActiveName = slideImgActiveName.nextElementSibling;

    const targetIndex = slides.findIndex((slide) => slide === nextSlide);

    moveToSlide(track.current, currentSlide, nextSlide);

    changeActiveName(activeName, nextActiveName);

    changeImgSlideName(slideImgActiveName, nextSlideImgActiveName);

    updateArrows(slides, prevBtn.current, nextBtn.current, targetIndex);
  };

  const movePrev = () => {
    const currentSlide = track.current.querySelector(".current-slide");
    const previousSlide = currentSlide.previousElementSibling;

    const activeName = nameRef.current.querySelector(".active-name");
    const previousActiveName = activeName.previousElementSibling;

    const slideImgActiveName =
      slideImgName.current.querySelector(".active-slide-name");
    const prevSlideImgActiveName = slideImgActiveName.previousElementSibling;

    const targetIndex = slides.findIndex((slide) => slide === previousSlide);

    moveToSlide(track.current, currentSlide, previousSlide);

    changeActiveName(activeName, previousActiveName);

    changeImgSlideName(slideImgActiveName, prevSlideImgActiveName);

    updateArrows(slides, prevBtn.current, nextBtn.current, targetIndex);
  };

  const updateArrows = (slides, prevBtn, nextBtn, targetIndex) => {
    if (targetIndex === 0) {
      prevBtn.disabled = true;
      nextBtn.disabled = false;
    } else if (targetIndex === slides.length - 1) {
      prevBtn.disabled = false;
      nextBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
      nextBtn.disabled = false;
    }
  };
  const changeActiveName = (currentName, targetName) => {
    currentName.classList.remove("active-name");
    targetName.classList.add("active-name");
  };

  const changeImgSlideName = (currentImgSlideName, targetSlideName) => {
    currentImgSlideName.classList.remove("active-slide-name");
    targetSlideName.classList.add("active-slide-name");
  };

  return (
    <div className="slide grid-container">
      <div className="slide__arrow--container bg-black">
        <div
          ref={nameRef}
          className="slide__name--container text-white fs-slide-title extra-bold"
        >
          <p className="slide__arrow--container__name active-name">
            Brand naming & guidelines
          </p>
          <p className="slide__arrow--container__name">
            Brand identity & merchandise
          </p>
          <p className="slide__arrow--container__name">
            Brand identity & web design
          </p>
        </div>

        <div className="slide__arrow--btn-group">
          <button
            ref={prevBtn}
            className="prev__btn"
            onClick={() => movePrev()}
          >
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <g
                transform="matrix(-1 0 0 1 40 0)"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
              >
                <circle cx="20" cy="20" r="19.5" />
                <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
              </g>
            </svg>
          </button>
          <button
            ref={nextBtn}
            className="next__btn"
            onClick={() => moveNext()}
          >
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <g stroke="currentColor" fill="none" fillRule="evenodd">
                <circle cx="20" cy="20" r="19.5" />
                <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="slide__img--container">
        <div ref={track} className="slide__track">
          <img src="" alt="" className="slide__img current-slide" />
          <img src="" alt="" className="slide__img" />
          <img src="" alt="" className="slide__img" />
        </div>
        <div ref={slideImgName} className="slide__img--name text-white">
          <div className="slide__img--name__div active-slide-name">
            <p className="fs-img-title extra-bold">Lean Product Roadmap </p>
            <p className="fs-img-date">2019 project</p>
          </div>
          <div className="slide__img--name__div ">
            <p className="fs-img-title extra-bold">New Majestic Hotel </p>
            <p className="fs-img-date">2018 Project</p>
          </div>
          <div className="slide__img--name__div ">
            <p className="fs-img-title extra-bold">Crypto Dashboard</p>
            <p className="fs-img-date">2016 Project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
