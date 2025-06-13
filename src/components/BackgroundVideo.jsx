export const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[-2] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover brightness-[0.3]"
      >
      <source src="/vd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
