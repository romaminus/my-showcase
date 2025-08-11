import Image from "next/image";
import imageCV from "../public/me.png";

export default function HomePage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-orange-50 px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-800 drop-shadow-md mb-8 text-center">
                Welcome to My Portfolio
            </h1>

            <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-8">
                <Image
                    src={imageCV}
                    alt="cv image"
                    className="rounded-lg shadow-xl border-4 border-orange-200"
                    width={350}
                />

                <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start max-w-lg">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                        Summary
                    </h2>
                    <p className="text-lg text-orange-600 leading-relaxed">
                        Junior Front-end Developer with a solid grasp of HTML, CSS,
                        JavaScript, and React.js. Having successfully completed my training
                        at Hillel IT School and DAN IT education, I am eager to join a team
                        to apply my skills in real-world projects. I am passionate about
                        creating innovative user interfaces and continuously improving my
                        abilities. I am ready for intensive work and committed to achieving
                        shared goals.
                    </p>
                </div>

            </div>
        </main>
    );
}
