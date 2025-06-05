import { BACKEND_BASE_URL } from "@/constants/Api";
import {
  UseYouTubeSearchOptions,
  UseYouTubeSearchResult,
  YouTubeApiResponse,
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

  // Function to load mock data
  const loadMockData = useCallback((count: number) => {
    setVideos(mockYouTubeVideos.slice(0, count));
    setIsUsingMockData(true);
    setError(null);
  }, []);

  // Function to fetch videos from the backend or use mock data
  const fetchVideos = useCallback(
    async (query: string, resultsCount?: number) => {
      if (!query.trim()) {
        setVideos([]);
        setError(null);
        setIsUsingMockData(false);
        return;
      }

      setLoading(true);
      setError(null);
      setIsUsingMockData(false);

      const actualMaxResults = resultsCount || maxResults;
      const targetUrl = `${BACKEND_BASE_URL}/api/Youtube?q=${encodeURIComponent(
        query
      )}&maxResults=${actualMaxResults}`;

      try {
        // Poniższa linia została poprawiona
        const response = await fetch(targetUrl);
        const data: YouTubeApiResponse = await response.json();

        if (!response.ok) {
          const errorMessage =
            data.error?.message || `API error: ${response.status}`;

          if (data.quotaExceeded) {
            console.warn(
              "[useYouTubeSearch] Przekroczono quota API, ładuję mocki."
            );
            setError(
              data.message ||
                "Przekroczono limit API, spróbuj później lub użyj danych z cache."
            );
            loadMockData(actualMaxResults);
            return;
          }

          throw new Error(errorMessage); // Rzuć błąd, który zostanie złapany w catch
        }

        if (data._fromCache) {
          console.log("[useYouTubeSearch] Dane pobrane z cache backendu.");
          setIsUsingMockData(true);
          if (data._quotaExceeded) {
            console.warn(
              "[useYouTubeSearch] Dane z cache z powodu przekroczonej quoty."
            );
          } else if (data._apiError) {
            console.warn(
              "[useYouTubeSearch] Dane z cache z powodu błędu API backendu:",
              data._apiError
            );
          }
        } else {
          console.log(
            "[useYouTubeSearch] Dane pobrane bezpośrednio z YouTube API."
          );
          setIsUsingMockData(false);
        }

        if (
          !data.items ||
          !Array.isArray(data.items) ||
          data.items.length === 0
        ) {
          console.warn(
            "[useYouTubeSearch] Brak wyników 'items' w odpowiedzi lub nieprawidłowa struktura, ładuję mocki."
          );
          loadMockData(actualMaxResults);
          return;
        }

        setVideos(data.items);
        console.log("[useYouTubeSearch] Pomyślnie załadowano filmy z API.");
      } catch (err: any) {
        console.error(
          "[useYouTubeSearch] Wyłapano błąd w bloku catch:",
          err.message
        );
        setError(
          err.message || "Wystąpił nieznany błąd podczas pobierania wideo."
        );
        loadMockData(maxResults);
        console.warn("[useYouTubeSearch] Z powodu błędu, ładuję dane mockowe.");
      } finally {
        setLoading(false);
        console.log("[useYouTubeSearch] Zakończono ładowanie.");
      }
    },
    [maxResults, loadMockData]
  );

  // Effect to fetch videos on initial load if enabled and query provided
  useEffect(() => {
    if (enabled && initialQuery) {
      fetchVideos(initialQuery);
    }
  }, [enabled, initialQuery, fetchVideos]); // Dependencies for useEffect

  // Return the state and functions to be used by the component
  return { videos, loading, error, fetchVideos, isUsingMockData };
};

export default useYouTubeSearch;
