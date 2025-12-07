export interface CloudinaryResource {
  asset_id: string;
  secure_url: string;
  width: number;
  height: number;
  context?: {
    custom?: {
      title?: string;
    };
  };
}

export interface CloudinaryImage {
  id: string;
  url: string;
  width: number;
  height: number;
  title: string | null;
}
