import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        src={`${process.env.REACT_APP_BASE_URL}/assets/kristin-o-karlsen-toK0L4TybPU-unsplash.jpg`}
        width="100%"
        height="auto"
        alt="advert"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Horse</Typography>
        <Typography color={medium}>MyHousePet.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        All animals are our friends
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
