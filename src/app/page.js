
import data from "@/data/data.json";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

const categoryStyles = {
  Cars: {
    accent: "#b91c1c",
    soft: "linear-gradient(145deg, rgba(185,28,28,0.12), rgba(255,255,255,0.84) 58%, rgba(255,255,255,0.95))",
  },
  Bikes: {
    accent: "#7c3aed",
    soft: "linear-gradient(145deg, rgba(124,58,237,0.12), rgba(255,255,255,0.84) 58%, rgba(255,255,255,0.95))",
  },
  Phones: {
    accent: "#0f766e",
    soft: "linear-gradient(145deg, rgba(15,118,110,0.12), rgba(255,255,255,0.84) 58%, rgba(255,255,255,0.95))",
  },
  Computers: {
    accent: "#1d4ed8",
    soft: "linear-gradient(145deg, rgba(29,78,216,0.12), rgba(255,255,255,0.84) 58%, rgba(255,255,255,0.95))",
  },
};

const createSlug = (name) => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

export default function Home() {
  const groupedItems = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }

    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(15,118,110,0.14), transparent 26%), radial-gradient(circle at top right, rgba(245,158,11,0.14), transparent 22%), linear-gradient(180deg, #f7faf8 0%, #eef3f1 100%)",
        py: { xs: 5, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={6}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              p: { xs: 3, md: 5.5 },
              borderRadius: 2,
              background:
                "linear-gradient(130deg, #08111f 0%, #0f3d39 48%, #172033 100%)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 28px 80px rgba(15, 23, 42, 0.22)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 12% 18%, rgba(245,158,11,0.22), transparent 18%), radial-gradient(circle at 88% 24%, rgba(59,130,246,0.24), transparent 22%), radial-gradient(circle at 52% 100%, rgba(15,118,110,0.28), transparent 28%)",
                pointerEvents: "none",
              }}
            />

            <Stack
              spacing={3}
              sx={{
                position: "relative",
                minHeight: { md: 360 },
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Stack
                spacing={3.5}
                sx={{
                  maxWidth: 920,
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.85rem", md: "5.5rem" },
                    lineHeight: 0.95,
                    letterSpacing: "-0.06em",
                    textWrap: "balance",
                    maxWidth: 760,
                  }}
                >
                  Explore the catalog.
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.74)",
                    fontSize: { xs: "1rem", md: "1.08rem" },
                    letterSpacing: "0.01em",
                  }}
                >
                  Choose a category to jump in and start exploring.
                </Typography>

                <Stack
                  direction="row"
                  gap={2}
                  sx={{
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: 860,
                  }}
                >
                  {Object.entries(groupedItems).map(([category, items]) => {
                    const categoryStyle = categoryStyles[category];
                    const categorySlug = createSlug(category);

                    return (
                      <Link
                        key={category}
                        href={`/#${categorySlug}`}
                        style={{ display: "block" }}
                      >
                        <Box
                          sx={{
                            minWidth: { xs: 150, md: 180 },
                            px: { xs: 2.5, md: 3.25 },
                            py: { xs: 1.7, md: 2 },
                            textAlign: "center",
                            borderRadius: 2,
                            cursor: "pointer",
                            border: "1px solid",
                            borderColor: `${categoryStyle?.accent}32`,
                            background:
                              `linear-gradient(135deg, ${categoryStyle?.accent}24, rgba(255,255,255,0.10))`,
                            boxShadow: "0 16px 34px rgba(15, 23, 42, 0.14)",
                            backdropFilter: "blur(12px)",
                            transition:
                              "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease",
                            "&:hover": {
                              transform: "translateY(-5px) scale(1.01)",
                              borderColor: `${categoryStyle?.accent}68`,
                              background:
                                `linear-gradient(135deg, ${categoryStyle?.accent}32, rgba(255,255,255,0.16))`,
                              boxShadow: "0 22px 42px rgba(15, 23, 42, 0.2)",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              color: "white",
                              fontWeight: 800,
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                            }}
                          >
                            {category}
                          </Typography>
                        </Box>
                      </Link>
                    );
                  })}
                </Stack>
              </Stack>
            </Stack>
          </Box>

          {Object.entries(groupedItems).map(([category, items]) => {
            const categoryStyle = categoryStyles[category];
            const categorySlug = createSlug(category);

            return (
              <Box
                key={category}
                id={categorySlug}
                sx={{
                  p: { xs: 2.5, md: 3.5 },
                  borderRadius: 2,
                  background: categoryStyle?.soft || "white",
                  border: "1px solid rgba(255, 255, 255, 0.68)",
                  boxShadow: "0 20px 56px rgba(15, 23, 42, 0.07)",
                  backdropFilter: "blur(10px)",
                  scrollMarginTop: 24,
                }}
              >
                <Stack spacing={3}>
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={2}
                    sx={{
                      justifyContent: "space-between",
                      alignItems: { xs: "flex-start", md: "center" },
                    }}
                  >
                    <Stack spacing={1}>
                      <Chip
                        label={`${items.length} items`}
                        sx={{
                          alignSelf: "flex-start",
                          bgcolor: `${categoryStyle?.accent}18`,
                          color: categoryStyle?.accent,
                          fontWeight: 600,
                        }}
                      />
                      <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}>
                        {category}
                      </Typography>
                    </Stack>

                    <Divider
                      flexItem
                      sx={{
                        display: { xs: "none", md: "block" },
                        borderColor: "rgba(148, 163, 184, 0.2)",
                      }}
                      orientation="vertical"
                    />

                    <Typography
                      color="text.secondary"
                      sx={{ maxWidth: 320, lineHeight: 1.7 }}
                    >
                      A quick preview of the products in the {category.toLowerCase()}{" "}
                      category.
                    </Typography>
                  </Stack>

                  <Grid container spacing={3}>
                    {items.map((item) => {
                      const slug = createSlug(item.itemname);
                      return (
                        <Grid key={item.itemname} size={{ xs: 12, sm: 6, lg: 4 }}>
                          <Link style={{ display: "block", height: "100%" }} href={`/item/${slug}`}>
                            <Card
                              sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: 1.5,
                                overflow: "hidden",
                                background:
                                  "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.96))",
                                border: "1px solid rgba(255,255,255,0.78)",
                                boxShadow: "0 16px 34px rgba(15, 23, 42, 0.08)",
                                transition:
                                  "transform 180ms ease, box-shadow 180ms ease",
                                "&:hover": {
                                  transform: "translateY(-6px)",
                                  boxShadow: "0 24px 48px rgba(15, 23, 42, 0.12)",
                                },
                              }}
                            >
                              <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.itemname}
                                sx={{
                                  height: 220,
                                  objectFit: "cover",
                                  backgroundColor: "rgba(148, 163, 184, 0.12)",
                                  filter: "saturate(1.03) contrast(1.02)",
                                }}
                              />

                              <CardContent sx={{ p: 2.5, display: "grid", gap: 1.6 }}>
                                <Chip
                                  label={item.category}
                                  size="small"
                                  sx={{
                                    justifySelf: "flex-start",
                                    bgcolor: `${categoryStyle?.accent}12`,
                                    color: categoryStyle?.accent,
                                    fontWeight: 600,
                                    border: `1px solid ${categoryStyle?.accent}20`,
                                  }}
                                />

                                <Typography
                                  variant="h6"
                                  sx={{ fontWeight: 700, letterSpacing: "-0.02em" }}
                                >
                                  {item.itemname}
                                </Typography>

                                <Stack
                                  direction="row"
                                  gap={1}
                                  sx={{ flexWrap: "wrap" }}
                                >
                                  {item.itemprops.slice(0, 3).map((prop) => (
                                    <Chip
                                      key={`${item.itemname}-${prop.label}`}
                                      label={`${prop.label}: ${prop.value}`}
                                      variant="outlined"
                                      size="small"
                                      sx={{
                                        borderColor: "rgba(148, 163, 184, 0.28)",
                                        bgcolor: "rgba(255,255,255,0.82)",
                                      }}
                                    />
                                  ))}
                                </Stack>
                              </CardContent>
                            </Card>
                          </Link>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Stack>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
