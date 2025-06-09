import { useEffect, useState } from "react";

type ChannelAvatar = {
  url: string | null;
  loading: boolean;
  error: string | null;
};

const YOUTUBE_API_KEY = "TWOJ_KLUCZ_API"; // <-- podmień na swój klucz

export function useYouTubeChannelAvatar(
  channelId: string | undefined
): ChannelAvatar {
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!channelId) return;

    setLoading(true);
    setError(null);

    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${YOUTUBE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const avatarUrl =
          data?.items?.[0]?.snippet?.thumbnails?.high?.url ||
          data?.items?.[0]?.snippet?.thumbnails?.default?.url ||
          null;
        setUrl(avatarUrl);
      })
      .catch((e) => {
        setError("Nie udało się pobrać avatara kanału.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [channelId]);

  return { url, loading, error };
}
// Dodać absługę api to zostało wygenerowane automatycznie

// Jak użyć hooka?

// const { url, loading, error } = useYouTubeChannelAvatar(video.snippet.channelId);

// if (loading) return <ActivityIndicator />;
// if (error) return <Text>{error}</Text>;

// return url ? <Image source={{ uri: url }} style={{ width: 40, height: 40, borderRadius: 20 }} /> : null;
