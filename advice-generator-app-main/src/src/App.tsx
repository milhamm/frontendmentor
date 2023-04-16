import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Advice from "./components/Advice/Advice";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Advice />
    </QueryClientProvider>
  );
}

export default App;
