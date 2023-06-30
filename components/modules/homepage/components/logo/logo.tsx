'use client';

import Image from "next/image";
import { motion } from "framer-motion";

import imgLogo from "£/img/logo/logo-poupet.svg"
import { Container } from "@/components/container/container";

export const Logo = () => {

    return (
        <>
            <Container className="relative">
                <motion.div className="relative w-1/2 h-screen flex justify-center items-center"
                initial={{ scale: 0, y: 100}}
                animate={{ scale: 1.2, y: 20 }}
                transition={{ duration: 1 }}
                >
                    <Image src={imgLogo} alt="Logo Mont Poupet Bike Park" fill />
                </motion.div>
            </Container>
        </>
    )

};