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
            className="relative max-w-[90vw] max-h-[85vh] aspect-[9/16] bg-gray-primary rounded-2xl inline-block align-middle overflow-hidden"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://player.vimeo.com/video/1186260977?h=bb4ba16741&autoplay=1&title=0&byline=0&portrait=0"
              title="Sala Imersiva Hanazaki Studio"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
