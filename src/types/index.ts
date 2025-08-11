import { Metadata } from "next";

export interface MetadataProps {
  title?: string;
  description?: string;
  icons?: Metadata["icons"];
  author?: string;
}
