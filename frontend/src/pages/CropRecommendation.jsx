import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sprout, Loader2, Thermometer, Droplets, FlaskConical, CloudRain } from "lucide-react";
import { toast } from "sonner";

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { N, P, K, temperature, humidity, ph, rainfall } = formData;
    if (!N || !P || !K || !temperature || !humidity || !ph || !rainfall) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/crop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          N: parseFloat(N),
          P: parseFloat(P),
          K: parseFloat(K),
          temperature: parseFloat(temperature),
          humidity: parseFloat(humidity),
          ph: parseFloat(ph),
          rainfall: parseFloat(rainfall),
        }),
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setResult(data.result);
      toast.success("Recommendation received!");
    } catch (err) {
      toast.error("Error getting recommendation. Ensure ML service is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container max-w-4xl px-4 md:px-6">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Sprout className="h-5 w-5" />
            <span className="font-medium">AI-Powered</span>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            Crop Recommendation
          </h1>
          <p className="text-muted-foreground">
            Get AI-powered crop recommendations based on soil nutrients and climate conditions
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Enter Soil & Climate Data</CardTitle>
            <CardDescription>
              Provide accurate values for the best recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="N" className="flex items-center gap-2">
                    <FlaskConical className="h-4 w-4 text-primary" />
                    Nitrogen (N) ppm
                  </Label>
                  <Input
                    id="N"
                    name="N"
                    type="number"
                    min="0"
                    max="150"
                    step="1"
                    placeholder="e.g., 45"
                    value={formData.N}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="P" className="flex items-center gap-2">
                    <FlaskConical className="h-4 w-4 text-primary" />
                    Phosphorus (P) ppm
                  </Label>
                  <Input
                    id="P"
                    name="P"
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    placeholder="e.g., 35"
                    value={formData.P}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="K" className="flex items-center gap-2">
                    <FlaskConical className="h-4 w-4 text-primary" />
                    Potassium (K) ppm
                  </Label>
                  <Input
                    id="K"
                    name="K"
                    type="number"
                    min="0"
                    max="200"
                    step="1"
                    placeholder="e.g., 40"
                    value={formData.K}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="temperature" className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-primary" />
                    Temperature (°C)
                  </Label>
                  <Input
                    id="temperature"
                    name="temperature"
                    type="number"
                    min="0"
                    max="50"
                    step="0.1"
                    placeholder="e.g., 25.5"
                    value={formData.temperature}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="humidity" className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-primary" />
                    Humidity (%)
                  </Label>
                  <Input
                    id="humidity"
                    name="humidity"
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    placeholder="e.g., 65"
                    value={formData.humidity}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ph" className="flex items-center gap-2">
                    <FlaskConical className="h-4 w-4 text-primary" />
                    pH Level
                  </Label>
                  <Input
                    id="ph"
                    name="ph"
                    type="number"
                    min="0"
                    max="14"
                    step="0.1"
                    placeholder="e.g., 6.5"
                    value={formData.ph}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2 md:col-span-2 lg:col-span-1">
                  <Label htmlFor="rainfall" className="flex items-center gap-2">
                    <CloudRain className="h-4 w-4 text-primary" />
                    Rainfall (mm)
                  </Label>
                  <Input
                    id="rainfall"
                    name="rainfall"
                    type="number"
                    min="0"
                    max="5000"
                    step="1"
                    placeholder="e.g., 200"
                    value={formData.rainfall}
                    onChange={handleChange}
                  />
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
                    <Sprout className="h-4 w-4" />
                    Get Recommendation
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
                <Sprout className="h-5 w-5 text-primary" />
                Recommended Crop
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">{result}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CropRecommendation;
