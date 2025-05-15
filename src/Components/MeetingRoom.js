import { useParams } from "react-router-dom";
import { useEffect } from "react";

const MeetingRoom = () => {
  const { meetingId } = useParams();

  useEffect(() => {
    const domain = "meet.jit.si";
    const options = {
      roomName: meetingId,
      width: "100%",
      height: 600,
      parentNode: document.getElementById("jitsi-container"),
    };
    const api = new window.JitsiMeetExternalAPI(domain, options);
    return () => api.dispose();
  }, [meetingId]);

  return <div id="jitsi-container"></div>;
};

export default MeetingRoom;
