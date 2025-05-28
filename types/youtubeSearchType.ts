export interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: {
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
    };
    publishedAt: string;
    description: string;
    views: number;
    likes: number;
  };
}

export interface YouTubeApiResponse {
  items: YouTubeVideo[];
  nextPageToken?: string;
  error?: string;
}

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
  isUsingMockData: boolean; // Dodajemy tę linię
}

const o = [
  {
    id: { videoId: "video123" },
    snippet: {
      channelTitle: "Programming Channel",
      publishedAt: "2024-03-28T10:00:00Z",
      thumbnails: [Object],
      title: "Learn React Native in 2024 - Complete Tutorial",
    },
  },
  {
    id: { videoId: "video456" },
    snippet: {
      channelTitle: "Coding Tutorials",
      publishedAt: "2024-03-27T15:30:00Z",
      thumbnails: [Object],
      title: "TypeScript Basics - Getting Started",
    },
  },
];
