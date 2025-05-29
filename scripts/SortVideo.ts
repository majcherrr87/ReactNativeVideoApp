import { SortOption } from "@/components/SortModal";
import { YouTubeVideo } from "@/types/youtubeSearchType";

export const sortVideos = (
  videos: YouTubeVideo[],
  sortBy: SortOption
): YouTubeVideo[] => {
  const sortedVideos = [...videos];

  switch (sortBy) {
    case "latest":
      return sortedVideos.sort(
        (a, b) =>
          new Date(b.snippet.publishedAt).getTime() -
          new Date(a.snippet.publishedAt).getTime()
      );

    case "oldest":
      return sortedVideos.sort(
        (a, b) =>
          new Date(a.snippet.publishedAt).getTime() -
          new Date(b.snippet.publishedAt).getTime()
      );

    case "popular":
      return sortedVideos.sort((a, b) => {
        const viewsDiff = (b.snippet.views || 0) - (a.snippet.views || 0);
        if (viewsDiff !== 0) return viewsDiff;
        return (b.snippet.likes || 0) - (a.snippet.likes || 0);
      });

    default:
      return sortedVideos;
  }
};
