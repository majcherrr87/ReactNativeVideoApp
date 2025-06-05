// src/hooks/useYouTubeVideo.ts

import { YouTubeApiResponse, YouTubeVideo } from "@/types/youtubeSearchType";
import { useCallback, useEffect, useState } from "react";
// Jeśli nie używasz już mocków, możesz zakomentować tę linię
// import { mockYouTubeVideos } from "../mockData/youtubeMockData";

// === KONFIGURACJA API ===
// WAŻNE: ZASTĄP TO SWOIM FAKTYCZNYM URL-em BACKENDU NA HEROKU
const BACKEND_BASE_URL =
  "https://backend-youtube-new-7708a19a053a.herokuapp.com";
// =========================

interface UseYouTubeVideoResult {
  video: YouTubeVideo | null;
  loading: boolean;
  error: string | null;
}

// Stałe dla Sintel do testowania streamingu (możesz usunąć, jeśli nie potrzebujesz)
const SINTEL_YT_ID = "G0jJj1s2V7E";
const SINTEL_STREAM_URL =
  "https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

export const useYouTubeVideo = (videoId?: string): UseYouTubeVideoResult => {
  const [video, setVideo] = useState<YouTubeVideo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVideoDetails = useCallback(async () => {
    if (!videoId) {
      setVideo(null);
      setError("Brak videoId.");
      console.warn(
        "[useYouTubeVideo] fetchVideoDetails: Brak videoId, nie pobieram."
      );
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log(
        `[useYouTubeVideo] Rozpoczynam pobieranie szczegółów dla videoId: '${videoId}'`
      );
      console.log(
        `[useYouTubeVideo] Celowy URL API: ${BACKEND_BASE_URL}/api/Youtube/video/${videoId}`
      );

      const response = await fetch(
        `${BACKEND_BASE_URL}/api/Youtube/video/${videoId}`
      );
      const data: YouTubeApiResponse = await response.json();

      console.log(
        `[useYouTubeVideo] Odpowiedź z backendu (status): ${response.status}`
      );
      console.log(`[useYouTubeVideo] Odpowiedź z backendu (dane):`, data);

      if (!response.ok) {
        const errorMessage =
          data.error?.message ||
          `API error: ${response.status} - ${
            response.statusText || "Nieznany błąd"
          }`;
        console.error(
          `[useYouTubeVideo] Błąd z backendu (status ${response.status}):`,
          errorMessage
        );
        throw new Error(errorMessage);
      }

      // Backend dla /api/Youtube/video/:videoId powinien zwracać obiekt typu YouTubeApiResponse
      // zawierający tablicę 'items', gdzie pierwszy element to YouTubeVideo.
      let fetchedVideo: YouTubeVideo | null = null;
      if (data.items && data.items.length > 0) {
        fetchedVideo = data.items[0];
      }
      // Pamiętaj: YouTubeApiResponse nie ma pól 'id' ani 'snippet' bezpośrednio na swoim korzeniu,
      // są one wewnątrz obiektów YouTubeVideo w tablicy 'items'.
      // Dlatego usunięto warunek `else if (data.id && data.snippet)` - to było źródłem błędu typu.

      if (fetchedVideo) {
        // Jeśli to Sintel, dodajemy streamUrl (do celów testowych z expo-av, API tego nie zwróci)
        if (fetchedVideo.id?.videoId === SINTEL_YT_ID) {
          console.log(
            `[useYouTubeVideo] Dodaję streamUrl dla Sintel: ${SINTEL_STREAM_URL}`
          );
          fetchedVideo.streamUrl = SINTEL_STREAM_URL;
        }
        setVideo(fetchedVideo);
        console.log(
          `[useYouTubeVideo] Pomyślnie załadowano wideo: ${fetchedVideo.snippet.title}`
        );
      } else {
        setError(
          "Wideo nie znaleziono w API lub odpowiedź API była pusta (brak 'items')."
        );
        setVideo(null);
        console.warn(
          `[useYouTubeVideo] Wideo o ID '${videoId}' nie znaleziono w danych API.`
        );
      }
    } catch (err: any) {
      console.error("[useYouTubeVideo] Wyłapano błąd w bloku catch:", err);
      setError(
        err.message ||
          "Wystąpił nieznany błąd podczas pobierania szczegółów wideo."
      );
      setVideo(null);
    } finally {
      setLoading(false);
      console.log("[useYouTubeVideo] Zakończono ładowanie.");
    }
  }, [videoId]);

  useEffect(() => {
    fetchVideoDetails();
  }, [fetchVideoDetails]);

  return { video, loading, error };
};
