import data from "@/data/data.json";
import Link from "next/link";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import {
  Box,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

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

export default async function ItemDetailPage({ params }) {
  const { slug } = await params;
  const item = data.find((product) => createSlug(product.itemname) === slug);
  const categoryStyle = categoryStyles[item?.category];

  if (!item) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background:
            "radial-gradient(circle at top left, rgba(15,118,110,0.12), transparent 24%), linear-gradient(180deg, #f7faf8 0%, #eef3f1 100%)",
        }}
      >
        <Container maxWidth="md">
          <Stack
            spacing={2}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 2,
              border: "1px solid rgba(255,255,255,0.8)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.96))",
              boxShadow: "0 20px 56px rgba(15, 23, 42, 0.08)",
            }}
          >
            <Typography variant="h3">Item not found</Typography>
            <Typography color="text.secondary">
              The product you tried to open does not exist in this catalog.
            </Typography>
            <Box>
              <Link href="/">Back to catalog</Link>
            </Box>
          </Stack>
        </Container>
      </Box>
    );
  }

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
        <Stack spacing={4}>
          <Box>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 600,
                padding: "10px 14px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.68)",
                border: "1px solid rgba(255,255,255,0.78)",
                boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
              }}
            >
              <ArrowBackRoundedIcon fontSize="small" />
              Back to catalog
            </Link>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.15fr 0.85fr" },
              gap: 4,
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.72)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.96))",
                boxShadow: "0 22px 60px rgba(15, 23, 42, 0.08)",
                height: "100%",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.itemname}
                sx={{
                  width: "100%",
                  height: { xs: 280, md: 420, lg: 520 },
                  objectFit: "cover",
                  display: "block",
                  filter: "saturate(1.04) contrast(1.02)",
                }}
              />
            </Box>

            <Stack
              spacing={3}
              sx={{
                height: "100%",
                minHeight: { lg: 520 },
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.72)",
                background: categoryStyle?.soft || "white",
                boxShadow: "0 22px 60px rgba(15, 23, 42, 0.08)",
                justifyContent: "space-between",
                backdropFilter: "blur(10px)",
              }}
            >
              <Stack spacing={3}>
                <Stack spacing={1.5}>
                  <Chip
                    label={item.category}
                    sx={{
                      alignSelf: "flex-start",
                      bgcolor: `${categoryStyle?.accent}18`,
                      color: categoryStyle?.accent,
                      fontWeight: 700,
                      borderRadius: 1,
                      border: `1px solid ${categoryStyle?.accent}20`,
                    }}
                  />
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "2.25rem", md: "3.8rem" },
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {item.itemname}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    Category-specific specifications are rendered dynamically from
                    the `itemprops` array so each product can show its own unique
                    attributes.
                  </Typography>
                </Stack>

                <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.2)" }} />
              </Stack>

              <Stack spacing={1.5}>
                {item.itemprops.map((prop) => (
                  <Box
                    key={`${item.itemname}-${prop.label}`}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 2,
                      p: 2,
                      borderRadius: 1.5,
                      border: "1px solid rgba(255,255,255,0.82)",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(248,250,252,0.86))",
                    }}
                  >
                    <Typography sx={{ fontWeight: 700 }}>{prop.label}</Typography>
                    <Typography color="text.secondary" sx={{ textAlign: "right" }}>
                      {prop.value}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
