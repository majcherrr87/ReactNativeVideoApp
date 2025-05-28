import { useCallback, useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../constants/Api";

interface YouTubeVideo {
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
  };
}

interface YouTubeApiResponse {
  items: YouTubeVideo[];
  nextPageToken?: string;
  error?: string;
}

interface UseYouTubeSearchOptions {
  initialQuery?: string;
  maxResults?: number;
  enabled?: boolean;
}

interface UseYouTubeSearchResult {
  videos: YouTubeVideo[];
  loading: boolean;
  error: string | null;
  fetchVideos: (query: string, resultsCount?: number) => Promise<void>;
}

const useYouTubeSearch = (
  options?: UseYouTubeSearchOptions
): UseYouTubeSearchResult => {
  const { initialQuery = "", maxResults = 5, enabled = true } = options || {};

  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVideos = useCallback(
    async (query: string, resultsCount?: number) => {
      if (!query.trim()) {
        setVideos([]);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const actualMaxResults = resultsCount || maxResults;
        const response = await fetch(
          `${BACKEND_BASE_URL}/api/Youtube?q=${encodeURIComponent(
            query
          )}&maxResults=${actualMaxResults}`
        );
        const data: YouTubeApiResponse = await response.json();

        if (!response.ok) {
          const errorMessage =
            data.error ||
            "Wystąpił nieznany błąd podczas pobierania danych z backendu.";
          throw new Error(errorMessage);
        }

        setVideos(data.items || []);
      } catch (err: any) {
        console.error("Błąd w useYouTubeSearch:", err);
        setError(err.message || "Wystąpił błąd podczas wyszukiwania filmów.");
        setVideos([]);
      } finally {
        setLoading(false);
      }
    },
    [maxResults]
  );

  useEffect(() => {
    if (enabled && initialQuery) {
      fetchVideos(initialQuery);
    }
  }, [enabled, initialQuery, fetchVideos]);

  return { videos, loading, error, fetchVideos };
};

export default useYouTubeSearch;
