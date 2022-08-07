import { useRouter } from "next/router";
import Footer from "./components/Footer";

export default function Home() {
	const Router = useRouter();

	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div className="text-center">
					<h1 className="text-3xl font-bold text-white">Next.js</h1>
					<p className="text-white">This is a simple Next.js project.</p>

					<button
						className="mt-4 pointer-events-auto rounded-md bg-violet-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-violet-500 transition-all"
						onClick={() => Router.push("/api/echo")}
					>
						Go to /api/echo
					</button>
					<Footer />
				</div>
			</div>
		</>
	);
}
