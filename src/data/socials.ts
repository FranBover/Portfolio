export type SocialKey = "github" | "linkedin" | "whatsapp" | "instagram";

export type SocialLink = { key: SocialKey; label: string; href: string };

export const socials: SocialLink[] = [
  { key: "github", label: "GitHub", href: "https://github.com/FranBover" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/francisco-bover" },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/5493512308157?text=Hola%20Fran%2C%20te%20escribo%20desde%20tu%20portafolio",
  },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/franfranfranfrna/" },
];

export function getSocial(key: SocialKey) {
  const social = socials.find((s) => s.key === key);
  if (!social) throw new Error(`Social desconocida: ${key}`);
  return social;
}
