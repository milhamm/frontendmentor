import { getAdvice } from "../../api/advice";
import {
  AdviceNumber,
  AdviceText,
  Button,
  Card,
  Container,
} from "../../components/Advice";
import { useQuery } from "@tanstack/react-query";

function Advice() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["advice"],
    queryFn: () => getAdvice(),
    refetchOnWindowFocus: false,
  });

  if (isLoading) return null;

  return (
    <Container>
      <Card>
        <AdviceNumber>ADVICE # {data?.slip.id}</AdviceNumber>
        <AdviceText>"{data?.slip.advice}"</AdviceText>
        <Button onClick={() => refetch()}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </Button>
      </Card>
    </Container>
  );
}

export default Advice;
