const VideoShower = ({ remoteVideoRef, localVideoRef }: any) => {
    return (
      <div className='flex flex-col gap-5'>
        <div className='w-[35vw] h-[40vh] border rounded-lg bg-gray-100 shadow'>
          <video autoPlay className="w-[35vw] h-[40vh] object-cover rounded-lg" ref={remoteVideoRef} />
        </div>
        <div className='w-[35vw] h-[40vh] border rounded-lg bg-gray-100 shadow'>
          <video autoPlay className="w-[35vw] h-[40vh] object-cover rounded-lg" ref={localVideoRef} />
        </div>
      </div>
    );
  };
  
  export default VideoShower;