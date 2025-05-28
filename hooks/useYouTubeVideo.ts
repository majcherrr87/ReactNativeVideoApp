import { YouTubeVideo } from "@/types/youtubeSearchType";
import { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../constants/Api";
import { mockYouTubeVideos } from "../mockData/youtubeMockData";

interface UseYouTubeVideoResult {
  video: YouTubeVideo | null;
  loading: boolean;
  error: string | null;
  isUsingMockData: boolean;
}

export const useYouTubeVideo = (videoId: string): UseYouTubeVideoResult => {
  const [video, setVideo] = useState<YouTubeVideo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUsingMockData, setIsUsingMockData] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      if (!videoId) return;

      setLoading(true);
      setError(null);
      setIsUsingMockData(false);

      try {
        const response = await fetch(
          `${BACKEND_BASE_URL}/api/Youtube/video/${videoId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch video");
        }

        const data = await response.json();
        setVideo(data);
      } catch (err) {
        console.warn("Loading mock data for video");
        const mockVideo = mockYouTubeVideos.find(
          (v) => v.id.videoId === videoId
        );
        if (mockVideo) {
          setVideo(mockVideo);
          setIsUsingMockData(true);
        } else {
          setError("Video not found");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [videoId]);

  return { video, loading, error, isUsingMockData };
};
