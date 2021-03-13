import { createContext } from 'react';

const VideoContext = createContext({
  state: undefined,
  dispatch: undefined,
});

// function VideoProvider({ children }) {
//   return (
//     <VideoContext.Provider val>
//       {children}
//     </VideoContext.Provider>
//   );
// }

export default VideoContext;
