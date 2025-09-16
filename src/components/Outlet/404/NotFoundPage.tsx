import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as classes from "./style";
import theme from "@/constants/theme";

// Іконка шини як SVG-компонент для відповідності тематиці сайту
const TireIcon = () => (
  <svg
    css={classes.icon}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
    <line x1="19.07" y1="4.93" x2="16.24" y2="7.76" />
    <line x1="7.76" y1="16.24" x2="4.93" y2="19.07" />
  </svg>
);

export default function NotFoundPage() {
  return (
    <main css={classes.container}>
      <TireIcon />
      <Typography variant="h1" component="h1" css={classes.title(theme)}>
        404
      </Typography>
      <Typography variant="h5" component="p" css={classes.subtitle(theme)}>
        Сторінку не знайдено
      </Typography>
      <Typography variant="body1" css={classes.description}>
        Схоже, ви звернули не туди. Можливо, сторінку було видалено, переміщено
        або адреса введена неправильно.
      </Typography>
      <Button variant="contained" href="/" css={classes.button}>
        Повернутись на головну
      </Button>
    </main>
  );
}
