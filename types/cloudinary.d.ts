export interface CloudinaryResource {
  asset_id: string;
  secure_url: string;
  width: number;
  height: number;
  context?: {
    caption?: string;
    custom?: {
      title?: string;
    };
  };
  metadata?: {
    title?: string;
    [key: string]: unknown;
  };
}

export interface CloudinaryImage {
  id: string;
  url: string;
  width: number;
  height: number;
  title: string | null;
}
