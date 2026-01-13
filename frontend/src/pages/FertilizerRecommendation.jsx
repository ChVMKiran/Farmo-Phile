import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Droplets, Loader2, FlaskConical } from "lucide-react";
import { toast } from "sonner";
import { crops } from "@/data/crops";

const FertilizerRecommendation = () => {
  const [formData, setFormData] = useState({ crop: "", nitrogen: "", phosphorus: "", potassium: "", ph: "" });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => { const { name, value } = e.target; setFormData((prev) => ({ ...prev, [name]: value })); };
  const handleSelectChange = (name, value) => { setFormData((prev) => ({ ...prev, [name]: value })); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { crop, nitrogen, phosphorus, potassium, ph } = formData;
    if (!crop || !nitrogen || !phosphorus || !potassium || !ph) { toast.error("Please fill all fields"); return; }
    setLoading(true);
    try {
      const response = await fetch("https://farmo-phile-backend.chvmkiran.me/api/fertilizer-recommend", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ crop: formData.crop, nitrogen: parseFloat(formData.nitrogen), phosphorus: parseFloat(formData.phosphorus), potassium: parseFloat(formData.potassium), ph: parseFloat(formData.ph) }) });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
      toast.success("Recommendation received!");
    } catch (err) { toast.error("Error getting fertilizer recommendation"); } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container max-w-4xl px-4 md:px-6">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary"><Droplets className="h-5 w-5" /><span className="font-medium">Smart Farming</span></div>
          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">Fertilizer Recommendation</h1>
          <p className="text-muted-foreground">Get personalized fertilizer recommendations based on soil nutrient levels and crop type</p>
        </div>
        <Card className="shadow-lg">
          <CardHeader><CardTitle>Enter Soil & Crop Data</CardTitle><CardDescription>Provide accurate soil nutrient values for the best recommendations</CardDescription></CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2"><Label htmlFor="crop">Crop Type *</Label><Select value={formData.crop} onValueChange={(value) => handleSelectChange("crop", value)}><SelectTrigger><SelectValue placeholder="Select a crop" /></SelectTrigger><SelectContent>{crops.map((crop) => (<SelectItem key={crop} value={crop}>{crop}</SelectItem>))}</SelectContent></Select></div>
                <div className="space-y-2"><Label htmlFor="nitrogen" className="flex items-center gap-2"><FlaskConical className="h-4 w-4 text-primary" />Nitrogen (N) Level (ppm) *</Label><Input id="nitrogen" name="nitrogen" type="number" min="0" step="1" placeholder="e.g., 45" value={formData.nitrogen} onChange={handleInputChange} /></div>
                <div className="space-y-2"><Label htmlFor="phosphorus" className="flex items-center gap-2"><FlaskConical className="h-4 w-4 text-primary" />Phosphorus (P) Level (ppm) *</Label><Input id="phosphorus" name="phosphorus" type="number" min="0" step="1" placeholder="e.g., 35" value={formData.phosphorus} onChange={handleInputChange} /></div>
                <div className="space-y-2"><Label htmlFor="potassium" className="flex items-center gap-2"><FlaskConical className="h-4 w-4 text-primary" />Potassium (K) Level (ppm) *</Label><Input id="potassium" name="potassium" type="number" min="0" step="1" placeholder="e.g., 40" value={formData.potassium} onChange={handleInputChange} /></div>
                <div className="space-y-2"><Label htmlFor="ph" className="flex items-center gap-2"><FlaskConical className="h-4 w-4 text-primary" />Soil pH Level *</Label><Input id="ph" name="ph" type="number" min="0" max="14" step="0.1" placeholder="e.g., 6.5" value={formData.ph} onChange={handleInputChange} /></div>
              </div>
              <Button type="submit" disabled={loading} className="w-full gap-2 md:w-auto">{loading ? (<><Loader2 className="h-4 w-4 animate-spin" />Getting Recommendations...</>) : (<><Droplets className="h-4 w-4" />Get Recommendations</>)}</Button>
            </form>
          </CardContent>
        </Card>
        {result && (<Card className="mt-6 border-primary/20 bg-accent/50 shadow-lg"><CardHeader><CardTitle className="flex items-center gap-2"><Droplets className="h-5 w-5 text-primary" />Recommended Fertilizers</CardTitle></CardHeader><CardContent className="space-y-6"><div className="flex flex-wrap gap-2">{result.recommended_fertilizers.map((fertilizer, index) => (<span key={index} className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground">{fertilizer}</span>))}</div><div className="border-t border-border pt-4"><p className="text-foreground">{result.reason}</p></div></CardContent></Card>)}
      </div>
    </div>
  );
};

export default FertilizerRecommendation;
