
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Namn måste vara minst 2 tecken." }),
  email: z.string().email({ message: "Vänligen ange en giltig e-postadress." }),
  message: z.string().min(10, { message: "Meddelandet måste vara minst 10 tecken." })
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Email configuration
      const emailSubject = "REWETTING!!";
      const emailTo = "orjan.berglund@slu.se";
      
      // Prepare email content
      const emailBody = `
        Namn: ${values.name}
        E-post: ${values.email}
        Meddelande: ${values.message}
      `;
      
      // Simple mailto link approach
      const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open the email client
      window.open(mailtoLink, "_blank");
      
      // Show success toast
      toast({
        title: "Meddelande skickat!",
        description: "Tack för ditt meddelande, vi återkopplar till dig inom några dagar.",
        duration: 5000,
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Något gick fel",
        description: "Det gick inte att skicka meddelandet. Försök igen senare.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 section-animate">
        <h2 className="section-title text-center">Kontakta oss</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-8">
          Är ni redo att återställa värdefulla våtmarker och ta del av de möjligheter som ges? Tveka inte att kontakta oss.
        </p>
        <div className="max-w-md mx-auto mt-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Namn</FormLabel>
                    <FormControl>
                      <Input placeholder="Ditt namn" {...field} />
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
                    <FormLabel>E-post</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="din.email@exempel.se" {...field} />
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
                    <FormLabel>Meddelande</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Skriv ditt meddelande här..." 
                        rows={4} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="hero-button w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Skickar...
                  </>
                ) : (
                  "Skicka meddelande"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
