import { createContext } from 'react';

const VideoContext = createContext({
  selectedVideo: {},
  setSelectedVideo: () => {},
  isLoading: true,
  data: [],
  doFetch: () => {},
});

// function VideoProvider({ children }) {
//   return (
//     <VideoContext.Provider val>
//       {children}
//     </VideoContext.Provider>
//   );
// }

export default VideoContext;
