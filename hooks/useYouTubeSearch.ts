import {
  UseYouTubeSearchOptions,
  UseYouTubeSearchResult,
  YouTubeApiResponse,
  YouTubeVideo,
} from "@/types/youtubeSearchType";
import { useCallback, useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../constants/Api";
import { mockYouTubeVideos } from "../mockData/youtubeMockData";

const useYouTubeSearch = (
  options?: UseYouTubeSearchOptions
): UseYouTubeSearchResult => {
  const { initialQuery = "", maxResults = 5, enabled = true } = options || {};

  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isUsingMockData, setIsUsingMockData] = useState<boolean>(false);

  const loadMockData = useCallback((count: number) => {
    setVideos(mockYouTubeVideos.slice(0, count));
    setIsUsingMockData(true);
  }, []);

  const fetchVideos = useCallback(
    async (query: string, resultsCount?: number) => {
      if (!query.trim()) {
        setVideos([]);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);
      setIsUsingMockData(false);

      try {
        const actualMaxResults = resultsCount || maxResults;
        const response = await fetch(
          `${BACKEND_BASE_URL}/api/Youtube?q=${encodeURIComponent(
            query
          )}&maxResults=${actualMaxResults}`
        );
        const data: YouTubeApiResponse = await response.json();

        if (!response.ok) {
          throw new Error("API Error");
        }

        if (!data.items?.length) {
          loadMockData(actualMaxResults);
          return;
        }

        setVideos(data.items);
      } catch (err) {
        console.warn("Używam danych mockowych z powodu błędu API");
        loadMockData(maxResults);
      } finally {
        setLoading(false);
      }
    },
    [maxResults, loadMockData]
  );

  useEffect(() => {
    if (enabled && initialQuery) {
      fetchVideos(initialQuery);
    }
  }, [enabled, initialQuery, fetchVideos]);

  return { videos, loading, error, fetchVideos, isUsingMockData };
};

export default useYouTubeSearch;
