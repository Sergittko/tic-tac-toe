export const resizeWidth = (size) => {
  switch (size) {
    case 9:
      return {
        maxWidth: "435px",
        height: "435px",
      };
    case 16:
      return {
        maxWidth: "510px",
        height: "510px",
      };
    case 25:
      return {
        maxWidth: "570px",
        height: "570px",
      };

    default:
      return {
        maxWidth: "435px",
        height: "435px",
      };
  }
};

export const resizeBoard = (size) => {
  switch (size) {
    case 9:
      return {
        gridTemplateColumns: "1fr 1fr 1fr ",
        gridTemplateRows: "1fr 1fr 1fr",
        maxWidth: "435px",
        height: "435px",
      };
    case 16:
      return {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr",
        maxWidth: "510px",
        height: "510px",
      };
    case 25:
      return {
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
        maxWidth: "570px",
        height: "570px",
      };

    default:
      return {
        gridTemplateColumns: "1fr 1fr  ",
        gridTemplateRows: "1fr 1fr  ",
      };
  }
};
