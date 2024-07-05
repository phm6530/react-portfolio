import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type MotionChildren = ReactNode;

interface MotionProps {
    className?: string;
    children: MotionChildren;
    delay?: number;
}

export const FadeUp: React.FC<MotionProps> = ({
    className,
    children,
    delay = 0,
}) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: delay, // delay 옵션 적용
                ease: [0.6, -0.05, 0.01, 0.99], // 예시 큐빅 베지어 값
            }}
        >
            {children}
        </motion.div>
    );
};

export const FadeInOut: React.FC<MotionProps> = ({ className, children }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: -100 }}
            style={{ width: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99], // 예시 큐빅 베지어 값
            }}
        >
            {children}
        </motion.div>
    );
};

export const Page: React.FC<MotionProps> = ({ className, children }) => {
    const scrollOffsetY = () => {
        window.scrollTo(0, window.scrollY);
    };

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onAnimationStart={scrollOffsetY}
            transition={{
                duration: 0.4,
            }}
        >
            {children}
        </motion.div>
    );
};

const Motion: {
    FadeUp: React.FC<MotionProps>;
    FadeInOut: React.FC<MotionProps>;
    Page: React.FC<MotionProps>;
} = {
    FadeUp: FadeUp,
    FadeInOut: FadeInOut,
    Page: Page,
};

export default Motion;

Motion.FadeInOut = FadeInOut;
Motion.Page = Page;
Motion.FadeUp = FadeUp;
