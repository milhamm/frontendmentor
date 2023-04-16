import { http } from "../lib/api";

type Advice = {
  slip: {
    id: number;
    advice: string;
  };
};

export const getAdvice = async () => {
  return http.get("advice").json<Advice>();
};
