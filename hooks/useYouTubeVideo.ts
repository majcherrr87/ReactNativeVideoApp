import { YouTubeVideo } from "@/types/youtubeSearchType";
import { useCallback, useEffect, useState } from "react";
import { mockYouTubeVideos } from "../mockData/youtubeMockData";
interface UseYouTubeVideoResult {
  video: YouTubeVideo | null;
  loading: boolean;
  error: string | null;
}

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
      return;
    }

    setLoading(true);
    setError(null);

    console.log(`Ładowanie szczegółów dla wideo: '${videoId}' z mocków.`);
    const foundVideo = mockYouTubeVideos.find((v) => v.id.videoId === videoId);

    if (foundVideo) {
      const videoWithStreamUrl = { ...foundVideo };
      if (videoId === SINTEL_YT_ID) {
        videoWithStreamUrl.streamUrl = SINTEL_STREAM_URL;
      }
      setVideo(videoWithStreamUrl);
    } else {
      setError(`Wideo o ID '${videoId}' nie znaleziono w mockach.`);
      setVideo(null);
    }
    setLoading(false);
    return;

    // PONIŻSZY KOD BĘDZIE AKTYWNY, GDY SERVER ZACZNIE DZIAŁAĆ
    // try {
    //   const response = await fetch(`<span class="math-inline">\{BACKEND\_BASE\_URL\}/api/Youtube/video/</span>{videoId}`);
    //   const data: YouTubeApiResponse = await response.json(); // Załóżmy, że ten endpoint zwraca YouTubeApiResponse

    //   if (!response.ok) {
    //     const errorMessage = data.error?.message || `API error: ${response.status}`;
    //     throw new Error(errorMessage);
    //   }

    //   // API zwraca listę items, my chcemy pierwszy element
    //   if (data.items && data.items.length > 0) {
    //     const fetchedVideo = data.items[0];
    //     // Jeśli to Sintel, dodajemy streamUrl (bo API go nie zwróci)
    //     if (fetchedVideo.id === SINTEL_YT_ID) {
    //       fetchedVideo.streamUrl = SINTEL_STREAM_URL;
    //     }
    //     setVideo(fetchedVideo);
    //   } else {
    //     setError("Wideo nie znaleziono w API.");
    //     setVideo(null);
    //   }
    // } catch (err: any) {
    //   console.error("Błąd pobierania szczegółów wideo:", err);
    //   setError(err.message || "Wystąpił nieznany błąd podczas pobierania szczegółów wideo.");
    //   setVideo(null);
    // } finally {
    //   setLoading(false);
    // }
  }, [videoId]); // Dodaj videoId jako zależność

  useEffect(() => {
    fetchVideoDetails();
  }, [fetchVideoDetails]);

  return { video, loading, error };
};
