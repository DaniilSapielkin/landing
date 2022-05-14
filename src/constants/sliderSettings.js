export const settingsSlider = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  className: "slider variable-width",
  variableWidth: true,

  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        className: "slider variable-width",
        variableWidth: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        className: "slider variable-width",
        variableWidth: true,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        className: "slider variable-width",
        variableWidth: true,
      },
    },
    {
      breakpoint: 669,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        className: "slider variable-width",
        variableWidth: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slider variable-width",
        variableWidth: true,
      },
    },
  ],
};
