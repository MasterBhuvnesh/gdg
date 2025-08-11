import { MetadataProps } from "@/types";
import { Metadata } from "next";

export const generateMetadata = ({
  title = "GDG RBU",
  description = "Google Developer Group on Campus - Ramdeobaba Institute of Technology",
  icons,
  author = "GDG RBU",
}: MetadataProps = {}): Metadata => {
  return {
    title,
    description,
    icons: icons ?? {
      icon: "/icons/gdgico.svg",
      shortcut: "/icons/gdgico.svg",
      apple: "/icons/gdgico.svg",
    },
    authors: [{ name: author }],
  };
};
