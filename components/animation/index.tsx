import Lottie from "react-lottie";
import animationData from "../../data/animation.json";

export default function MyAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return <Lottie options={defaultOptions} />;
}
