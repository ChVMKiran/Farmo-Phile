import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCw, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { crops, seasons } from "@/data/crops";

const CropRotation = () => {
  const [formData, setFormData] = useState({
    crop: "",
    season: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.crop || !formData.season) {
      toast.error("Please select both crop and season");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://farmo-phile-backend.chvmkiran.me/api/crop-rotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          crop: formData.crop,
          season: formData.season,
        }),
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
      toast.success("Recommendation received!");
    } catch (err) {
      toast.error("Error getting crop rotation recommendation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container max-w-4xl px-4 md:px-6">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <RefreshCw className="h-5 w-5" />
            <span className="font-medium">Smart Farming</span>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            Crop Rotation
          </h1>
          <p className="text-muted-foreground">
            Get recommendations for the next crop in your rotation to maintain soil health
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Select Current Crop & Season</CardTitle>
            <CardDescription>
              Tell us what you're currently growing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="crop">Current Crop *</Label>
                  <Select
                    value={formData.crop}
                    onValueChange={(value) => handleSelectChange("crop", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a crop" />
                    </SelectTrigger>
                    <SelectContent>
                      {crops.map((crop) => (
                        <SelectItem key={crop} value={crop}>
                          {crop}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="season">Season *</Label>
                  <Select
                    value={formData.season}
                    onValueChange={(value) => handleSelectChange("season", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select season" />
                    </SelectTrigger>
                    <SelectContent>
                      {seasons.map((season) => (
                        <SelectItem key={season} value={season}>
                          {season}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full gap-2 md:w-auto">
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Getting Recommendation...
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-4 w-4" />
                    Get Crop Rotation Advice
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {result && (
          <Card className="mt-6 border-primary/20 bg-accent/50 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-primary" />
                Crop Rotation Recommendation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground">Current Crop</p>
                <p className="text-xl font-semibold text-foreground">{result.current_crop}</p>
              </div>
              
              <div>
                <p className="mb-3 text-sm font-medium text-muted-foreground">Recommended Next Crops</p>
                <div className="flex flex-wrap gap-2">
                  {result.recommended_next_crops.map((crop, index) => (
                    <span
                      key={index}
                      className="rounded-lg border-2 border-primary bg-card px-4 py-2 font-semibold text-primary"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-muted-foreground">Why?</p>
                <p className="mt-1 text-foreground">{result.reason}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CropRotation;
