import { TriviaItem } from "@/interfaces/TriviaItem";
type TriviaResponse = { response_code: string; results: TriviaItem[] };

export default async function fetchTriviaApi(): Promise<TriviaItem[]> {
  let triviaItems: TriviaItem[] = [];

  await fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    .then((res) => res.json())
    .then((res) => res as TriviaResponse)
    .then((res) => (triviaItems = [...res.results]));
  return triviaItems;
}
