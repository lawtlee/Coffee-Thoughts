import React from "react";
import { motion } from "framer-motion";

const HTML404: React.FC = () => {
    return (
        <motion.div
            className="w-screen h-screen flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <img src="/404.png" alt="Sorry this page doesn't exist" />
        </motion.div>
    );
}

export default HTML404;