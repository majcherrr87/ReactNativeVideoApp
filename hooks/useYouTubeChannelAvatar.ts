import { BACKEND_BASE_URL } from "@/constants/Api";
import { useEffect, useState } from "react";

type ChannelAvatar = {
  urlAvater: string | null;
  loading: boolean;
  error: string | null;
};

export function useYouTubeChannelAvatar(
  channelId: string | undefined
): ChannelAvatar {
  const [urlAvater, setUrlAvater] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!channelId) return;

    setLoading(true);
    setError(null);

    fetch(`${BACKEND_BASE_URL}/api/Youtube/channel/${channelId}`)
      .then((res) => res.json())
      .then((data) => {
        const avatarUrl =
          data?.items?.[0]?.snippet?.thumbnails?.high?.url ||
          data?.items?.[0]?.snippet?.thumbnails?.default?.url ||
          null;
        setUrlAvater(avatarUrl);
      })
      .catch(() => {
        setError("Nie udało się pobrać avatara kanału.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [channelId]);

  return { urlAvater, loading, error };
}
