import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2, Clock, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => { const { name, value } = e.target; setFormData((prev) => ({ ...prev, [name]: value })); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) { toast.error("Please fill all fields"); return; }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary"><MessageSquare className="h-5 w-5" /><span className="font-medium">Get In Touch</span></div>
          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">Have questions about our agricultural AI tools? We're here to help.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6">
            <Card className="shadow-lg"><CardContent className="flex items-start gap-4 p-6"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"><Mail className="h-6 w-6 text-primary" /></div><div><h3 className="font-semibold text-foreground">Email</h3><p className="text-sm text-muted-foreground">support@farmophile.com</p></div></CardContent></Card>
            <Card className="shadow-lg"><CardContent className="flex items-start gap-4 p-6"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"><Phone className="h-6 w-6 text-primary" /></div><div><h3 className="font-semibold text-foreground">Phone</h3><p className="text-sm text-muted-foreground">+91 1800-XXX-XXXX</p></div></CardContent></Card>
            <Card className="shadow-lg"><CardContent className="flex items-start gap-4 p-6"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"><MapPin className="h-6 w-6 text-primary" /></div><div><h3 className="font-semibold text-foreground">Address</h3><p className="text-sm text-muted-foreground">Agricultural Research Center, New Delhi, India</p></div></CardContent></Card>
            <Card className="shadow-lg"><CardContent className="flex items-start gap-4 p-6"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"><Clock className="h-6 w-6 text-primary" /></div><div><h3 className="font-semibold text-foreground">Working Hours</h3><p className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM</p></div></CardContent></Card>
          </div>
          <div className="lg:col-span-2">
            <Card className="shadow-lg"><CardHeader><CardTitle>Send us a Message</CardTitle><CardDescription>We'll get back to you within 24 hours</CardDescription></CardHeader>
              <CardContent><form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2"><div className="space-y-2"><Label htmlFor="name">Your Name *</Label><Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} /></div><div className="space-y-2"><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} /></div></div>
                <div className="space-y-2"><Label htmlFor="subject">Subject *</Label><Input id="subject" name="subject" placeholder="How can we help?" value={formData.subject} onChange={handleChange} /></div>
                <div className="space-y-2"><Label htmlFor="message">Message *</Label><Textarea id="message" name="message" rows={6} placeholder="Tell us more..." value={formData.message} onChange={handleChange} /></div>
                <Button type="submit" disabled={loading} className="w-full gap-2 md:w-auto">{loading ? (<><Loader2 className="h-4 w-4 animate-spin" />Sending...</>) : (<><Send className="h-4 w-4" />Send Message</>)}</Button>
              </form></CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
