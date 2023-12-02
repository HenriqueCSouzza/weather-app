import { Box, Typography } from "@mui/material";

export default function TemperatureNumber({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        filter:
          "drop-shadow(-4.510000228881836px 2.259999990463257px 0.75px rgba(0, 0, 0, 0.15))",
        ".MuiTypography-body1": {
          fontSize: "164px",
          lineHeight: 1,
          color: "#fff",
          fontWeight: 100,
        },
      }}
    >
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
}
