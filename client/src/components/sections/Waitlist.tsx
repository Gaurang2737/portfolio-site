import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Waitlist: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    interests: [] as string[],
  });
  const { toast } = useToast();

  const waitlistMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll notify you when we launch!",
      });
      setFormData({
        name: "",
        email: "",
        profession: "",
        interests: [],
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfessionChange = (value: string) => {
    setFormData({ ...formData, profession: value });
  };

  const handleInterestChange = (value: string, checked: boolean) => {
    setFormData({
      ...formData,
      interests: checked
        ? [...formData.interests, value]
        : formData.interests.filter(i => i !== value),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    waitlistMutation.mutate(formData);
  };

  return (
    <section id="waitlist" className="py-16 bg-gradient-to-br from-primary/10 to-purple-500/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-primary p-8 text-white flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Be the First to Know</h2>
              <p className="mb-6">
                Join our exclusive waitlist for early access to our revolutionary data analysis tool. 
                Be part of the future of data visualization.
              </p>
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <Check className="mr-2 h-5 w-5" />
                  <span>Early access to all features</span>
                </div>
                <div className="flex items-center mb-3">
                  <Check className="mr-2 h-5 w-5" />
                  <span>Special founding member pricing</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5" />
                  <span>Exclusive onboarding support</span>
                </div>
              </div>
              <div className="text-sm opacity-75">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 inline mr-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                156 people already joined
              </div>
            </div>
            
            <div className="md:w-3/5 p-8">
              <h3 className="text-xl font-semibold mb-6">Sign Up for the Waitlist</h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="profession" className="text-sm font-medium text-gray-700">
                    Profession
                  </Label>
                  <Select
                    value={formData.profession}
                    onValueChange={handleProfessionChange}
                  >
                    <SelectTrigger id="profession" className="mt-1">
                      <SelectValue placeholder="Select your profession" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="data_scientist">Data Scientist</SelectItem>
                      <SelectItem value="developer">Software Developer</SelectItem>
                      <SelectItem value="analyst">Business Analyst</SelectItem>
                      <SelectItem value="executive">Executive</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    What are you interested in?
                  </Label>
                  <div className="space-y-2 mt-1">
                    <div className="flex items-center">
                      <Checkbox 
                        id="interest-data" 
                        checked={formData.interests.includes('data_visualization')}
                        onCheckedChange={(checked) => 
                          handleInterestChange('data_visualization', checked === true)
                        }
                      />
                      <Label htmlFor="interest-data" className="ml-2 text-sm text-gray-700">
                        Data Visualization
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="interest-ml" 
                        checked={formData.interests.includes('machine_learning')}
                        onCheckedChange={(checked) => 
                          handleInterestChange('machine_learning', checked === true)
                        }
                      />
                      <Label htmlFor="interest-ml" className="ml-2 text-sm text-gray-700">
                        Machine Learning
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="interest-api" 
                        checked={formData.interests.includes('api_integration')}
                        onCheckedChange={(checked) => 
                          handleInterestChange('api_integration', checked === true)
                        }
                      />
                      <Label htmlFor="interest-api" className="ml-2 text-sm text-gray-700">
                        API Integration
                      </Label>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90"
                    disabled={waitlistMutation.isPending}
                  >
                    {waitlistMutation.isPending ? "Processing..." : "Join Waitlist"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;
