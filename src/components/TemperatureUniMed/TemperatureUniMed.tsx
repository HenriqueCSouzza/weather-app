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
        ".MuiTypography-body2": {
          color: "#fff",
          fontSize: "32px",
          lineHeight: 1.2,
          fontWeight: 400,
          letterSpacing: "-1.6px",
        },
      }}
    >
      <Typography variant="body2">{children}</Typography>
    </Box>
  );
}
