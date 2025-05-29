import {
  UseYouTubeSearchOptions,
  UseYouTubeSearchResult,
  YouTubeVideo,
} from "@/types/youtubeSearchType";
import { useCallback, useEffect, useState } from "react";
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
    setError(null); 
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

      loadMockData(resultsCount || maxResults);
      setLoading(false);
      return; 
      // --------------------------------------------------------

      // PONIŻSZY KOD BĘDZIE AKTYWNY, GDY SERVER ZACZNIE DZIAŁAĆ
      // try {
      //   const actualMaxResults = resultsCount || maxResults;
      //   const response = await fetch(
      //     `<span class="math-inline">\{BACKEND\_BASE\_URL\}/api/Youtube?q\=</span>{encodeURIComponent(
      //       query
      //     )}&maxResults=${actualMaxResults}`
      //   );
      //   const data: YouTubeApiResponse = await response.json();

      //   if (!response.ok) {
      //     const errorMessage =
      //       data.error?.message || `API error: ${response.status}`;
      //     throw new Error(errorMessage);
      //   }

      //   if (!data.items?.length) {
      //     console.warn("Brak wyników API, używam danych mockowych.");
      //     loadMockData(actualMaxResults);
      //     return;
      //   }

      //   setVideos(data.items);
      // } catch (err: any) {
      //   console.warn("Używam danych mockowych z powodu błędu API:", err.message);
      //   setError(err.message || "Wystąpił nieznany błąd podczas pobierania wideo.");
      //   loadMockData(maxResults);
      // } finally {
      //   setLoading(false);
      // }
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
