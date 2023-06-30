export const getColorStyle = (color: string): string => {
  switch (color) {
    case "green":
      return "bg-[#01A039]";
    case "blue":
      return "bg-[#007AB3]";
    case "red":
      return "bg-[#F40000]";
    case "black":
      return "bg-[#010101]";
    default:
      return "";
  }
};
export const getSizeStyle = (size: string): string => {
  switch (size) {
    case "small":
      return "w-16 h-16 md:w-20 md:h-20  text-center";
    case "medium":
      return "w-20 h-20  text-center";
    case "large":
      return "w-60 h-60 text-center";
    default:
      return "";
  }
};
export const getFontStyle = (fontSize: string): string => {
  switch (fontSize) {
    case "small":
      return "text-caption6";
    case "medium":
      return "text-[11px] md:text-[14px]";
    case "large":
      return "text-[14px]";
    default:
      return "";
  }
};
