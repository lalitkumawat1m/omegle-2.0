import ChatSection from "./MainSection/ChatSection";
import VideoShower from "./MainSection/VideoShower";

const Main = ({
  name,
  remoteVideoRef,
  localVideoRef,
}: {
  name: string;
  remoteVideoRef: any;
  localVideoRef: any;
}) => {
  return (
    <div className="flex gap-5 px-2 sm:px-4 lg:px-6">
      <VideoShower
        remoteVideoRef={remoteVideoRef}
        localVideoRef={localVideoRef}
      />
      <ChatSection name={name} />
    </div>
  );
};

export default Main;
