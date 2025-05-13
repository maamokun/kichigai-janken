import Link from "next/link";

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const { decide } = await searchParams;
	const choices = ["グー", "チョキ", "パー"];
	const userChoice = decide as string;
	const translatedChoices = {
		gu: "グー",
		choki: "チョキ",
		pa: "パー",
	};
	const translatedUserChoice = translatedChoices[userChoice as keyof typeof translatedChoices];
	const randomChoice = choices[Math.floor(Math.random() * choices.length)];
	const result =
		userChoice === randomChoice
			? "あいこ"
			: (userChoice === "gu" && randomChoice === "チョキ") ||
					(userChoice === "choki" && randomChoice === "パー") ||
					(userChoice === "pa" && randomChoice === "グー")
				? "勝ち"
				: "負け";
	return (
		<main className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl font-bold text-center py-5">キチガイじゃんけん</h1>
			<h2 className="text-3xl font-bold text-center py-5">あなたの選択: {translatedUserChoice}</h2>
			<h2 className="text-3xl font-bold text-center py-5">相手の選択: {randomChoice}</h2>
			<h2 className="text-3xl font-bold text-center py-5">結果: {result}</h2>
			<Link href="/">
				<button className={"btn btn-warning btn-lg mx-auto min-w-1/3 mt-15"}>戻る</button>
			</Link>
		</main>
	);
}
