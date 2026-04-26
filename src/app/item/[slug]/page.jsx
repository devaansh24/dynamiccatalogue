import data from "@/data/data.json";
import Link from "next/link";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";

const categoryStyles = {
  Cars: {
    accent: "#dc2626",
    tag: "rgba(220,38,38,0.10)",
    icon: "🚗",
    cardGlow: "radial-gradient(ellipse 90% 60% at 20% 50%, rgba(220,38,38,0.09) 0%, transparent 70%)",
  },
  Bikes: {
    accent: "#7c3aed",
    tag: "rgba(124,58,237,0.10)",
    icon: "🏍️",
    cardGlow: "radial-gradient(ellipse 90% 60% at 20% 50%, rgba(124,58,237,0.09) 0%, transparent 70%)",
  },
  Phones: {
    accent: "#0f766e",
    tag: "rgba(15,118,110,0.10)",
    icon: "📱",
    cardGlow: "radial-gradient(ellipse 90% 60% at 20% 50%, rgba(15,118,110,0.09) 0%, transparent 70%)",
  },
  Computers: {
    accent: "#1d4ed8",
    tag: "rgba(29,78,216,0.10)",
    icon: "💻",
    cardGlow: "radial-gradient(ellipse 90% 60% at 20% 50%, rgba(29,78,216,0.09) 0%, transparent 70%)",
  },
};

const createSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

export default async function ItemDetailPage({ params }) {
  const { slug } = await params;
  const item = data.find((product) => createSlug(product.itemname) === slug);
  const s = categoryStyles[item?.category];

  if (!item) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "#f0f4f3",
        }}
      >
        <Container maxWidth="sm">
          <Stack
            spacing={3}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 3,
              background: "#fff",
              border: "1px solid rgba(15,30,25,0.08)",
              boxShadow: "0 20px 60px rgba(15,30,25,0.08)",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h3" sx={{ fontSize: "2rem" }}>
              Item not found
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
              The product you tried to open does not exist in this catalog.
            </Typography>
            <Link href="/">
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2.5,
                  py: 1.25,
                  borderRadius: 99,
                  background: "#0f766e",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  transition: "background 180ms ease",
                  "&:hover": { background: "#115e59" },
                }}
              >
                <ArrowBackRoundedIcon fontSize="small" />
                Back to catalog
              </Box>
            </Link>
          </Stack>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#f0f4f3",
      }}
    >
      {/* ── Navbar ── */}
      <Box
        sx={{
          borderBottom: "1px solid rgba(15,30,25,0.07)",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(16px)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          flexShrink: 0,
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            sx={{ py: 1.75, alignItems: "center", justifyContent: "space-between" }}
          >
            <Link href="/">
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderRadius: 99,
                  border: "1px solid rgba(15,30,25,0.10)",
                  background: "rgba(255,255,255,0.80)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "text.primary",
                  transition: "all 180ms ease",
                  "&:hover": {
                    background: "#fff",
                    borderColor: "rgba(15,30,25,0.18)",
                    boxShadow: "0 4px 12px rgba(15,30,25,0.08)",
                  },
                }}
              >
                <ArrowBackRoundedIcon sx={{ fontSize: "1rem" }} />
                Catalog
              </Box>
            </Link>

            <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
              <Typography sx={{ fontSize: "0.82rem", color: "text.secondary" }}>
                {item.category}
              </Typography>
              <Typography sx={{ fontSize: "0.82rem", color: "rgba(15,30,25,0.22)" }}>
                /
              </Typography>
              <Typography sx={{ fontSize: "0.82rem", fontWeight: 600, color: "text.primary" }}>
                {item.itemname}
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* ── Centered content area ── */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          py: { xs: 4, md: 6 },
        }}
      >
        <Container maxWidth="lg">
          {/* Card wrapper — light border effect */}
          <Box
            sx={{
              borderRadius: "28px",
              p: "1.5px",
              background: `linear-gradient(135deg,
                rgba(255,255,255,0.90) 0%,
                ${s?.accent}60 18%,
                rgba(255,255,255,0.08) 40%,
                rgba(255,255,255,0.04) 60%,
                ${s?.accent}40 82%,
                rgba(255,255,255,0.70) 100%
              )`,
              boxShadow: `
                0 0 0 1px ${s?.accent}10,
                0 4px 8px rgba(15,30,25,0.08),
                0 16px 40px rgba(15,30,25,0.10),
                0 0 40px ${s?.accent}18
              `,
            }}
          >
          {/* Card */}
          <Box
            sx={{
              borderRadius: "27px",
              overflow: "hidden",
              background: `${s?.cardGlow}, #ffffff`,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1.8fr 1fr" },
            }}
          >
            {/* ── Left: Image panel ── */}
            <Box
              sx={{
                position: "relative",
                minHeight: { xs: 360, sm: 560 },
                background: "#111",
                borderRight: { sm: `1px solid ${s?.accent}14` },
                borderBottom: { xs: `1px solid ${s?.accent}14`, sm: "none" },
                overflow: "hidden",
              }}
            >
              {/* Image — natural colours, no tint */}
              <Box
                component="img"
                src={item.image}
                alt={item.itemname}
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "saturate(1.05) contrast(1.02)",
                }}
              />

              {/* Bottom gradient fade */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.52) 0%, transparent 50%)",
                  pointerEvents: "none",
                }}
              />

              {/* Product name on image */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: { xs: 2.5, sm: 3 },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: { xs: "1.2rem", sm: "1.4rem" },
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                    textShadow: "0 2px 12px rgba(0,0,0,0.4)",
                  }}
                >
                  {item.itemname}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    mt: 0.5,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.category}
                </Typography>
              </Box>

            </Box>

            {/* ── Right: Specs panel ── */}
            <Box sx={{ background: "#fff" }}>
              {/* Title row */}
              <Box
                sx={{
                  px: { xs: 3, sm: 3.5 },
                  pt: { xs: 3, sm: 3.5 },
                  pb: 2.5,
                  borderBottom: "1px solid rgba(15,30,25,0.07)",
                }}
              >
                <Chip
                  label={item.category}
                  size="small"
                  sx={{
                    mb: 1.5,
                    bgcolor: s?.tag,
                    color: s?.accent,
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    border: `1px solid ${s?.accent}25`,
                    borderRadius: 99,
                  }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.7rem" },
                    color: "text.primary",
                    lineHeight: 1.1,
                  }}
                >
                  {item.itemname}
                </Typography>
              </Box>

              {/* Specs header */}
              <Box
                sx={{
                  px: { xs: 3, sm: 3.5 },
                  py: 1.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  background: `linear-gradient(90deg, ${s?.accent}0c 0%, transparent 100%)`,
                  borderBottom: "1px solid rgba(15,30,25,0.07)",
                }}
              >
                <Box
                  sx={{
                    width: 3,
                    height: 13,
                    borderRadius: 99,
                    bgcolor: s?.accent,
                    flexShrink: 0,
                    opacity: 0.85,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: s?.accent,
                  }}
                >
                  Specifications
                </Typography>
                <Box
                  sx={{
                    ml: "auto",
                    px: 1,
                    py: 0.25,
                    borderRadius: 99,
                    bgcolor: s?.tag,
                    border: `1px solid ${s?.accent}20`,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: s?.accent,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.itemprops.length}
                  </Typography>
                </Box>
              </Box>

              {/* Spec rows */}
              {item.itemprops.map((prop, index) => (
                <Box
                  key={`${item.itemname}-${prop.label}`}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    px: { xs: 3, sm: 3.5 },
                    py: 2,
                    borderBottom:
                      index < item.itemprops.length - 1
                        ? "1px solid rgba(15,30,25,0.055)"
                        : "none",
                    transition: "background 150ms ease",
                    "&:hover": { background: `${s?.accent}05` },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "text.secondary",
                      flexShrink: 0,
                    }}
                  >
                    {prop.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "text.primary",
                      textAlign: "right",
                    }}
                  >
                    {prop.value}
                  </Typography>
                </Box>
              ))}

              {/* Footer */}
              <Box
                sx={{
                  px: { xs: 3, sm: 3.5 },
                  py: 2,
                  borderTop: "1px solid rgba(15,30,25,0.06)",
                  background: "rgba(15,30,25,0.015)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "text.secondary",
                    fontWeight: 500,
                  }}
                >
                  {item.itemprops.length}{" "}
                  {item.itemprops.length === 1 ? "attribute" : "attributes"} listed
                </Typography>
                <Link href="/">
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: s?.accent,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      transition: "opacity 150ms ease",
                      "&:hover": { opacity: 0.7 },
                    }}
                  >
                    ← All products
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
