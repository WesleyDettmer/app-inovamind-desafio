import en from "./en.json";
import pt from "./es.json";

const langs = {
  en,
  pt
};

export default function(lang = "pt") {
  return langs[lang];
}
