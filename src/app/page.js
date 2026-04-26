import data from "@/data/data.json";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

const categoryStyles = {
  Cars: {
    accent: "#dc2626",
    tag: "rgba(220,38,38,0.10)",
    glow: "rgba(220,38,38,0.07)",
    icon: "🚗",
  },
  Bikes: {
    accent: "#7c3aed",
    tag: "rgba(124,58,237,0.10)",
    glow: "rgba(124,58,237,0.07)",
    icon: "🏍️",
  },
  Phones: {
    accent: "#0f766e",
    tag: "rgba(15,118,110,0.10)",
    glow: "rgba(15,118,110,0.07)",
    icon: "📱",
  },
  Computers: {
    accent: "#1d4ed8",
    tag: "rgba(29,78,216,0.10)",
    glow: "rgba(29,78,216,0.07)",
    icon: "💻",
  },
};

const createSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

const categoryOrder = ["Cars", "Bikes", "Phones", "Computers"];

export default function Home() {
  const groupedItems = data.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const orderedCategories = categoryOrder.filter((c) => groupedItems[c]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f0f4f3",
        position: "relative",
      }}
    >
      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(140deg, #071a17 0%, #0c3632 45%, #111827 100%)",
        }}
      >
        {/* Ambient blobs */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 8% 30%, rgba(245,158,11,0.18) 0%, transparent 28%), radial-gradient(circle at 92% 20%, rgba(59,130,246,0.18) 0%, transparent 24%), radial-gradient(circle at 50% 110%, rgba(15,118,110,0.30) 0%, transparent 36%)",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Stack
            spacing={0}
            sx={{
              pt: { xs: 10, md: 16 },
              pb: { xs: 10, md: 16 },
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Eyebrow label */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.75,
                mb: 4,
                borderRadius: 99,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,0.45)",
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.50)",
                }}
              >
                {data.length} products across {orderedCategories.length} categories
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", sm: "4.5rem", md: "6.5rem" },
                color: "#ffffff",
                maxWidth: 820,
                textWrap: "balance",
                mb: 3,
              }}
            >
              Explore the{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #14b8a6 0%, #34d399 50%, #a3e635 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                catalog.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.52)",
                fontSize: { xs: "1rem", md: "1.15rem" },
                maxWidth: 480,
                lineHeight: 1.7,
                mb: 6,
              }}
            >
              Pick a category below and dive into detailed specs for every product.
            </Typography>

            {/* Category nav */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, auto)" },
                p: "5px",
                borderRadius: { xs: 4, md: 99 },
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(16px)",
                gap: "4px",
                mb: { xs: 5, md: 0 },
                width: { xs: "100%", md: "auto" },
                maxWidth: { xs: 340, md: "none" },
              }}
            >
              {orderedCategories.map((category) => {
                const s = categoryStyles[category];
                return (
                  <Link key={category} href={`/#${createSlug(category)}`}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "center", md: "flex-start" },
                        gap: 1,
                        px: { xs: 2, md: 2.5 },
                        py: { xs: 1.25, md: 1.25 },
                        borderRadius: 99,
                        cursor: "pointer",
                        transition: "all 180ms ease",
                        position: "relative",
                        "&:hover": {
                          background: `linear-gradient(135deg, ${s.accent}30 0%, ${s.accent}14 100%)`,
                          boxShadow: `0 0 0 1px ${s.accent}40, 0 4px 16px ${s.accent}22`,
                          "& .cat-label": { color: "#fff" },
                          "& .cat-count": { color: "rgba(255,255,255,0.55)" },
                          "& .cat-dot": { opacity: 1 },
                        },
                      }}
                    >
                      {/* Accent dot */}
                      <Box
                        className="cat-dot"
                        sx={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          bgcolor: s.accent,
                          flexShrink: 0,
                          opacity: 0.7,
                          transition: "opacity 180ms ease",
                          boxShadow: `0 0 6px ${s.accent}`,
                        }}
                      />
                      <Typography
                        className="cat-label"
                        sx={{
                          color: "rgba(255,255,255,0.72)",
                          fontWeight: 600,
                          fontSize: { xs: "0.82rem", md: "0.88rem" },
                          letterSpacing: "0.02em",
                          transition: "color 180ms ease",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {category}
                      </Typography>
                      <Typography
                        className="cat-count"
                        sx={{
                          color: "rgba(255,255,255,0.28)",
                          fontWeight: 500,
                          fontSize: "0.76rem",
                          transition: "color 180ms ease",
                        }}
                      >
                        {groupedItems[category]?.length}
                      </Typography>
                    </Box>
                  </Link>
                );
              })}
            </Box>
          </Stack>
        </Container>

        {/* Bottom fade into page */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background:
              "linear-gradient(to bottom, transparent, #f0f4f3)",
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* Catalog sections */}
      <Container maxWidth="xl" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 14 } }}>
        <Stack spacing={12}>
          {orderedCategories.map((category) => {
            const items = groupedItems[category];
            const s = categoryStyles[category];

            return (
              <Box key={category} id={createSlug(category)} sx={{ scrollMarginTop: 32 }}>
                {/* Section header */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  sx={{ alignItems: { sm: "flex-end" }, justifyContent: "space-between", mb: 5 }}
                  spacing={2}
                >
                  <Stack spacing={1.5}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: 1.5,
                          bgcolor: s.tag,
                          border: `1px solid ${s.accent}25`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1rem",
                        }}
                      >
                        {s.icon}
                      </Box>
                      <Chip
                        label={`${items.length} items`}
                        size="small"
                        sx={{
                          bgcolor: s.tag,
                          color: s.accent,
                          border: `1px solid ${s.accent}22`,
                          fontWeight: 700,
                          fontSize: "0.75rem",
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "2.2rem", md: "3rem" },
                        color: "text.primary",
                      }}
                    >
                      {category}
                    </Typography>
                  </Stack>

                  <Typography
                    color="text.secondary"
                    sx={{
                      fontSize: "0.92rem",
                      maxWidth: 280,
                      lineHeight: 1.7,
                      pb: { sm: 0.5 },
                    }}
                  >
                    Browse all {items.length} products in the{" "}
                    {category.toLowerCase()} category.
                  </Typography>
                </Stack>

                {/* Divider accent line */}
                <Box
                  sx={{
                    height: 2,
                    mb: 5,
                    borderRadius: 99,
                    background: `linear-gradient(90deg, ${s.accent}60 0%, ${s.accent}10 60%, transparent 100%)`,
                  }}
                />

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
                              borderRadius: 2.5,
                              overflow: "hidden",
                              background: "#ffffff",
                              border: "1px solid rgba(15,30,25,0.07)",
                              boxShadow:
                                "0 1px 2px rgba(15,30,25,0.04), 0 8px 24px rgba(15,30,25,0.06)",
                              transition: "transform 200ms ease, box-shadow 200ms ease",
                              "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: `0 4px 6px rgba(15,30,25,0.04), 0 20px 40px rgba(15,30,25,0.10), 0 0 0 1px ${s.accent}18`,
                              },
                            }}
                          >
                            {/* Image */}
                            <Box sx={{ position: "relative", overflow: "hidden" }}>
                              <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.itemname}
                                sx={{
                                  height: 210,
                                  objectFit: "cover",
                                  backgroundColor: "#f0f4f3",
                                  filter: "saturate(1.05) contrast(1.02)",
                                  transition: "transform 400ms ease",
                                  ".MuiCard-root:hover &": {
                                    transform: "scale(1.04)",
                                  },
                                }}
                              />
                              {/* Category badge on image */}
                              <Box
                                sx={{
                                  position: "absolute",
                                  top: 12,
                                  left: 12,
                                  px: 1.25,
                                  py: 0.5,
                                  borderRadius: 99,
                                  background: "rgba(255,255,255,0.92)",
                                  backdropFilter: "blur(8px)",
                                  border: `1px solid ${s.accent}20`,
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0.75,
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    bgcolor: s.accent,
                                  }}
                                />
                                <Typography
                                  sx={{
                                    fontSize: "0.7rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                    color: s.accent,
                                  }}
                                >
                                  {item.category}
                                </Typography>
                              </Box>
                            </Box>

                            <CardContent
                              sx={{
                                p: 2.5,
                                pt: 2.25,
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: 1.5,
                              }}
                            >
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: "1.02rem",
                                  fontWeight: 700,
                                  color: "text.primary",
                                  lineHeight: 1.3,
                                }}
                              >
                                {item.itemname}
                              </Typography>

                              {/* Key specs */}
                              <Stack spacing={0.75} sx={{ mt: "auto" }}>
                                {item.itemprops.slice(0, 3).map((prop) => (
                                  <Box
                                    key={`${item.itemname}-${prop.label}`}
                                    sx={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      gap: 1,
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        fontSize: "0.78rem",
                                        color: "text.secondary",
                                        fontWeight: 500,
                                      }}
                                    >
                                      {prop.label}
                                    </Typography>
                                    <Typography
                                      sx={{
                                        fontSize: "0.78rem",
                                        fontWeight: 600,
                                        color: "text.primary",
                                        textAlign: "right",
                                      }}
                                    >
                                      {prop.value}
                                    </Typography>
                                  </Box>
                                ))}
                              </Stack>

                              {/* Footer CTA hint */}
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "flex-end",
                                  pt: 1.25,
                                  borderTop: "1px solid rgba(15,30,25,0.06)",
                                  gap: 0.5,
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: "0.78rem",
                                    fontWeight: 600,
                                    color: s.accent,
                                    letterSpacing: "0.01em",
                                  }}
                                >
                                  View specs
                                </Typography>
                                <Typography sx={{ fontSize: "0.78rem", color: s.accent }}>
                                  →
                                </Typography>
                              </Box>
                            </CardContent>
                          </Card>
                        </Link>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
