import { motion } from 'framer-motion';
export function AnimatedP({children}) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} 
        >
            {children}
        </motion.p>
    )
}