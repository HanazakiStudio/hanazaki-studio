import { motion, AnimatePresence } from "framer-motion";

import { modalAnimation, overlayAnimation } from "@/constants/framer/video-modal-animation";
import { SyntheticEvent } from "react";

interface VideoModalProps {
  isModalOpen: boolean;
  CloseModal: (e: SyntheticEvent) => void;
}

export function VideoModal({ isModalOpen, CloseModal }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          onClick={CloseModal}
          key="video-modal-key"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={overlayAnimation}
          className="w-screen h-screen bg-[#0E0E0E]/75 fixed top-0 left-0 right-0 bottom-0 z-[9999] text-center overflow-auto p-6 after:h-full after:content-[''] after:inline-block after:align-middle"
        >
          <motion.div
            onClick={(e: SyntheticEvent) => e.stopPropagation()}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={modalAnimation}
            className="relative w-full max-w-[1000px] max-h-[567.16px] pt-[56.66%] lg:pt-[567.16px] bg-gray-primary rounded-2xl inline-block align-middle overflow-hidden"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://youtube.com/shorts/DT6hKqrgTrs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
