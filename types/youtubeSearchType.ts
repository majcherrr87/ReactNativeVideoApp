export interface UseYouTubeSearchOptions {
  initialQuery?: string;
  maxResults?: number;
  enabled?: boolean;
}

export interface UseYouTubeSearchResult {
  videos: YouTubeVideo[];
  loading: boolean;
  error: string | null;
  fetchVideos: (query: string, resultsCount?: number) => Promise<void>;
  isUsingMockData: boolean;
}

export interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    publishedAt: string;
    description: string;
    views?: number;
    likes?: number;
  };
  streamUrl?: string;
}

export interface YouTubeApiResponse {
  error: any;
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeVideo[];
}
