export type ModelOptions =
  | "gpt-5"
  | "gpt-5-mini"
  | "gpt-5-nano"
  | "gpt-4o"
  | "dall-e-3"
  | "gpt-4o-mini"
  | "gpt-4o-mini-audio-preview"
  | "gpt-4o"
  | "gpt-4o-audio-preview";

export type ModelSize =
  | "no memory"
  | "one message"
  | "low"
  | "medium"
  | "large";

export type isOpenType = "private" | "open";

export type DaleeImageSize =
  | "1024x1792"
  | "1792x1024"
  | "1024x1024"
  | "not installed";

export type DaleeImageQuality = "hd" | "not installed";

export type DaleeImageStyle = "natural" | "vivid" | "not installed";

export interface ModelTuning {
  size?: DaleeImageSize;
  quality?: DaleeImageQuality;
  style?: DaleeImageStyle;
}
