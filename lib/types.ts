export type ContentType = "concept" | "theorem" | "proof";

export type ContentStatus = "skeleton" | "draft" | "complete";

export interface ContentItem {
  id: string;
  type: ContentType;
  titleKo: string;
  titleEn?: string;
  status: ContentStatus;
}

export interface Chapter {
  id: string;
  number: number;
  titleKo: string;
  titleEn?: string;
  description?: string;
  concepts: ContentItem[];
  theorems: ContentItem[];
  proofs: ContentItem[];
}

export interface Subject {
  id: string;
  titleKo: string;
  titleEn: string;
  description: string;
  color: string;
  chapters: Chapter[];
}
