import { getApiEndpoint } from "@/lib/config";
import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export function Todo({ id }: { id: string }) {
  const { data, error, isLoading } = useSWR(
    `${getApiEndpoint()}/todos/${id}`,
    fetcher
  );

  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  // 데이터 렌더링
  return <div>title: {data.title ?? "NO_DATA"}</div>;
}
