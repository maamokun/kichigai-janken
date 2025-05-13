"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Home() {
	const [userChoice, setUserChoice] = useState("");
	const router = useRouter();

	const choices = ["gu", "choki", "pa"];

	const decide = () => {
		if (userChoice === "") {
			return toast.error("選択しろよボケェ！");
		}

		router.push(`/hantei?decide=${userChoice}`);
	};

	return (
		<main className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl font-bold text-center py-5">キチガイじゃんけん</h1>
			<div className="flex flex-col md:flex-row w-full gap-5">
				<button
					className={"btn btn-primary btn-lg mx-auto min-w-1/6"}
					onClick={() => setUserChoice("gu")}
					disabled={userChoice == "gu"}
				>
					グー
				</button>
				<button
					className={"btn btn-secondary btn-lg mx-auto min-w-1/6"}
					onClick={() => setUserChoice("choki")}
					disabled={userChoice == "choki"}
				>
					チョキ
				</button>
				<button
					className={"btn btn-success btn-lg mx-auto min-w-1/6"}
					onClick={() => setUserChoice("pa")}
					disabled={userChoice == "pa"}
				>
					パー
				</button>
			</div>
			<button className={"btn btn-warning btn-lg mx-auto min-w-1/3 mt-15"} onClick={decide}>
				いざ、勝負！
			</button>
		</main>
	);
}
