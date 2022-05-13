import { useEffect, useState } from "react";
import { getVideo } from "../services/getVideo";
import Modal from "react-modal";

export const Trailer = ({ id, showVideo, setShowVideo }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    getVideo(id).then((res) => setVideo(res));
  }, []);

  const closeModal = () => {
    setShowVideo(false);
  };

  return (
    <Modal
      isOpen={showVideo}
      className="mx-auto h-screen flex items-center bg-black bg-opacity-80 "
    >
      <div className="bg-black w-7/12 mx-auto p-20 rounded-lg">
        <svg
          className="w-6 h-6 float-right mb-5 close-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={closeModal}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        {!video ? (
          <img
            src="https://res.cloudinary.com/dp9zv16le/image/upload/v1651813457/sprint-3/Rolling-1s-197px_atxpcp.svg"
            alt=""
            className="mx-auto"
          />
        ) : (
          <iframe
            className="w-full"
            width="560"
            height="325"
            src={`https://www.youtube.com/embed/${video.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </Modal>
  );
};
