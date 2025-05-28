import fallbackImage from "../assets/images/fotoExample.png";
import { YouTubeVideo } from "../types/youtubeSearchType";

export const mockYouTubeVideos: YouTubeVideo[] = [
  {
    id: { videoId: "video123" },
    snippet: {
      title: "React Native: Getting Started Guide 2024",
      channelTitle: "Code Masters",
      thumbnails: {
        medium: { url: fallbackImage },
        high: { url: fallbackImage },
      },
      publishedAt: "2024-03-28T10:00:00Z",
      description:
        "Complete guide to building mobile apps with React Native in 2024",
      views: 25000,
      likes: 1800,
    },
  },
  {
    id: { videoId: "video456" },
    snippet: {
      title: "TypeScript Best Practices",
      channelTitle: "TypeScript Guru",
      thumbnails: {
        medium: { url: fallbackImage },
        high: { url: fallbackImage },
      },
      publishedAt: "2024-03-27T15:30:00Z",
      description: "Learn the best practices for TypeScript development",
      views: 18000,
      likes: 1500,
    },
  },
  {
    id: { videoId: "video789" },
    snippet: {
      title: "Advanced React Hooks Tutorial",
      channelTitle: "React Masters",
      thumbnails: {
        medium: { url: fallbackImage },
        high: { url: fallbackImage },
      },
      publishedAt: "2024-03-26T14:20:00Z",
      description: "Deep dive into React Hooks and custom hook creation",
      views: 32000,
      likes: 2100,
    },
  },
  {
    id: { videoId: "video101" },
    snippet: {
      title: "Redux Toolkit Crash Course",
      channelTitle: "State Management Pro",
      thumbnails: {
        medium: { url: fallbackImage },
        high: { url: fallbackImage },
      },
      publishedAt: "2024-03-25T09:15:00Z",
      description: "Master state management with Redux Toolkit in React apps",
      views: 15000,
      likes: 1200,
    },
  },
  {
    id: { videoId: "video102" },
    snippet: {
      title: "Mobile App UI Design Principles",
      channelTitle: "Design Masters",
      thumbnails: {
        medium: { url: fallbackImage },
        high: { url: fallbackImage },
      },
      publishedAt: "2024-03-24T16:45:00Z",
      description:
        "Learn essential UI design principles for mobile applications",
      views: 28000,
      likes: 2300,
    },
  },
  {
    id: { videoId: "video103" },
    snippet: {
      title: "API Integration in React Native",
      channelTitle: "Backend Heroes",
      thumbnails: {
        medium: { url: fallbackImage },
        high: { url: fallbackImage },
      },
      publishedAt: "2024-03-23T11:30:00Z",
      description: "Complete guide to integrating REST APIs in React Native",
      views: 21000,
      likes: 1700,
    },
  },
  {
    id: { videoId: "video104" },
    snippet: {
      title: "React Native Navigation Deep Dive",
      channelTitle: "Navigation Ninja",
      thumbnails: {
        medium: { url: fallbackImage },
        high: { url: fallbackImage },
      },
      publishedAt: "2024-03-22T13:20:00Z",
      description: "Advanced navigation patterns in React Native applications",
      views: 19000,
      likes: 1600,
    },
  },
  {
    id: { videoId: "video105" },
    snippet: {
      title: "Performance Optimization in React",
      channelTitle: "Performance Pro",
      thumbnails: {
        medium: { url: fallbackImage },
        high: { url: fallbackImage },
      },
      publishedAt: "2024-03-21T08:45:00Z",
      description:
        "Tips and tricks for optimizing React application performance",
      views: 23000,
      likes: 1900,
    },
  },
  {
    id: { videoId: "video106" },
    snippet: {
      title: "Modern JavaScript Features",
      channelTitle: "JS Academy",
      thumbnails: {
        medium: { url: fallbackImage },
        high: { url: fallbackImage },
      },
      publishedAt: "2024-03-20T15:10:00Z",
      description: "Exploring latest JavaScript features and best practices",
      views: 17000,
      likes: 1400,
    },
  },
  {
    id: { videoId: "video107" },
    snippet: {
      title: "Unit Testing in React Native",
      channelTitle: "Testing Pro",
      thumbnails: {
        medium: { url: fallbackImage },
        high: { url: fallbackImage },
      },
      publishedAt: "2024-03-19T12:00:00Z",
      description: "Master unit testing in your React Native applications",
      views: 12000,
      likes: 950,
    },
  },
];
