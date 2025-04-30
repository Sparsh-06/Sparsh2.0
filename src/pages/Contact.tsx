
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Github, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  }

  const socials = [
    { 
      name: "GitHub", 
      url: "https://github.com/Sparsh-06", 
      icon: <Github className="h-5 w-5" />,
      username: "@Sparsh-06" 
    },
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/sparshdev", 
      icon: <Linkedin className="h-5 w-5" />,
      username: "@sparshdev" 
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/", 
      icon: <Twitter className="h-5 w-5" />,
      username: "@sparshsharma" 
    },
  ];

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact</h1>
      <p className="text-muted-foreground mb-8">
        Have a question or want to work together? Get in touch!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <Card>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can I help you?" 
                            className="min-h-32 resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info & Socials */}
        <div className="space-y-6">
          {/* Direct Contact */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg mb-4">Direct Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-muted p-2 rounded-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:sparshsharmadav@gmail.com" className="font-medium animated-link">
                      sparshsharmadav@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-muted p-2 rounded-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+918700486704" className="font-medium animated-link">
                      +91 8700486704
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Socials */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg mb-4">Social Profiles</h3>
              <div className="space-y-3">
                {socials.map((social) => (
                  <div key={social.name} className="flex items-center gap-3">
                    <div className="bg-muted p-2 rounded-md">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{social.name}</p>
                      <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium animated-link"
                      >
                        {social.username}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
