import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Loader2, CloudRain, Droplets, Bug } from "lucide-react";
import { toast } from "sonner";
import { crops, seasons, states } from "@/data/crops";

const YieldPrediction = () => {
  const [formData, setFormData] = useState({
    crop: "",
    season: "",
    state: "",
    area_acres: "",
    annual_rainfall: "",
    fertilizer: "0",
    pesticide: "0",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { crop, season, state, area_acres, annual_rainfall } = formData;
    if (!crop || !season || !state || !area_acres || !annual_rainfall) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/predict-yield", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Crop: formData.crop,
          Season: formData.season,
          State: formData.state,
          Area: parseFloat(formData.area_acres),
          Annual_Rainfall: parseFloat(formData.annual_rainfall),
          Fertilizer: parseFloat(formData.fertilizer || "0"),
          Pesticide: parseFloat(formData.pesticide || "0"),
        }),
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
      toast.success("Prediction received!");
    } catch (err) {
      toast.error("Error predicting yield. Backend may be down.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container max-w-4xl px-4 md:px-6">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <TrendingUp className="h-5 w-5" />
            <span className="font-medium">AI-Powered</span>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            Yield Prediction
          </h1>
          <p className="text-muted-foreground">
            Predict crop yield based on crop type, area, and environmental factors
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Enter Crop & Environmental Data</CardTitle>
            <CardDescription>
              Fields marked with * are required
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="crop">Crop *</Label>
                  <Select
                    value={formData.crop}
                    onValueChange={(value) => handleSelectChange("crop", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop" />
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

                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Select
                    value={formData.state}
                    onValueChange={(value) => handleSelectChange("state", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area_acres">Area (acres) *</Label>
                  <Input
                    id="area_acres"
                    name="area_acres"
                    type="number"
                    min="0.1"
                    step="0.1"
                    placeholder="e.g., 5"
                    value={formData.area_acres}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="annual_rainfall" className="flex items-center gap-2">
                    <CloudRain className="h-4 w-4 text-primary" />
                    Annual Rainfall (mm) *
                  </Label>
                  <Input
                    id="annual_rainfall"
                    name="annual_rainfall"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="e.g., 1200"
                    value={formData.annual_rainfall}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fertilizer" className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-primary" />
                    Fertilizer (kg)
                  </Label>
                  <Input
                    id="fertilizer"
                    name="fertilizer"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="e.g., 100"
                    value={formData.fertilizer}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pesticide" className="flex items-center gap-2">
                    <Bug className="h-4 w-4 text-primary" />
                    Pesticide (kg)
                  </Label>
                  <Input
                    id="pesticide"
                    name="pesticide"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="e.g., 10"
                    value={formData.pesticide}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full gap-2 md:w-auto">
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Predicting...
                  </>
                ) : (
                  <>
                    <TrendingUp className="h-4 w-4" />
                    Predict Yield
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
                <TrendingUp className="h-5 w-5 text-primary" />
                Prediction Result
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Yield</p>
                <p className="text-3xl font-bold text-primary">
                  {result.predicted_yield.toFixed(2)} tons/hectare
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Estimated Production</p>
                <p className="text-2xl font-bold text-foreground">
                  {(result.predicted_yield * parseFloat(formData.area_acres)).toFixed(2)} tons
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default YieldPrediction;
