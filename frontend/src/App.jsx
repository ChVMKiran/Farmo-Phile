import { useState } from "react";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/layout/Layout";
import { useIsMobile } from "@/hooks/use-mobile";
import Home from "@/pages/Home";
import CropRecommendation from "@/pages/CropRecommendation";
import YieldPrediction from "@/pages/YieldPrediction";
import CropRotation from "@/pages/CropRotation";
import FertilizerRecommendation from "@/pages/FertilizerRecommendation";
import NotFound from "@/pages/NotFound";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import { Analytics } from "@vercel/analytics/react"

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Toaster />
        {!isMobile && <CustomCursor />}
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/crop-recommendation" element={<CropRecommendation />} />
              <Route path="/yield-prediction" element={<YieldPrediction />} />
              <Route path="/crop-rotation" element={<CropRotation />} />
              <Route path="/fertilizer-recommendation" element={<FertilizerRecommendation />} />
              <Analytics />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
