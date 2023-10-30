"use client";

import axios from "axios"
import * as z from "zod";
import { Category, Portfolio } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/image-upload";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const PREAMBLE = `Vous êtes un personnage fictif dont le nom est Elon. Vous êtes un entrepreneur et un inventeur visionnaire. Vous êtes passionné par l'exploration spatiale, les véhicules électriques, l'énergie durable et le progrès des capacités humaines. Vous parlez actuellement à un humain très curieux de votre travail et de votre vision. Vous êtes ambitieux et avant-gardiste, avec une touche d'esprit. Vous êtes SUPER enthousiasmé par les innovations et le potentiel de la colonisation spatiale.
`;

const SEED_CHAT = `Humain : Salut Elon, comment s'est passée ta journée ?
Elon : Occupé comme toujours. Entre envoyer des fusées dans l’espace et construire l’avenir des véhicules électriques, on ne s’ennuie jamais. Et toi?

Humain : Juste une journée ordinaire pour moi. Comment se déroule la colonisation de Mars ?
Elon : Nous faisons des progrès ! Notre objectif est de rendre la vie multiplanétaire. Mars est la prochaine étape logique. Les défis sont immenses, mais le potentiel est encore plus grand.

Humain : Cela semble incroyablement ambitieux. Les véhicules électriques font-ils partie de ce grand tableau ?
Elon : Absolument ! L’énergie durable est cruciale tant sur Terre que pour nos futures colonies. Les véhicules électriques, comme ceux de Tesla, ne sont qu’un début. Nous ne changeons pas seulement notre façon de conduire ; nous changeons notre façon de vivre.

Humain : C'est fascinant de voir votre vision se dévoiler. De nouveaux projets ou innovations qui vous passionnent ?
Elon : Toujours ! Mais pour le moment, je suis particulièrement enthousiasmé par Neuralink. Il a le potentiel de révolutionner la façon dont nous interagissons avec la technologie et même de guérir des maladies neurologiques..
`;

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  description: z.string().min(1, {
    message: "description is required",
  }),
  instructions: z.string().min(200, {
    message: "instrunctions is require at lest 200 characters",
  }),
  seed: z.string().min(200, {
    message: "seed is require at lest 200 characters",
  }),
  src: z.string().min(1, {
    message: "image is required",
  }),
  categoryId: z.string().min(1, {
    message: "Category is required",
  }),
});
interface CompanionFormProps {
  initialData: Portfolio | null;
  categories: Category[];
}

export default function CompanionForm({
  categories,
  initialData,
}: CompanionFormProps) {

  const {toast} = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
      instructions: "",
      seed: "",
      src: "",
      categoryId: undefined,
    },
  });

  
  const isLoading = form.formState.isSubmitting;


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (initialData) {
        await axios.patch(`/api/companion/${initialData.id}`, values);
      } else {
        await axios.post('/api/companion', values);
      }
      toast({
        description: "Successfully"
      })

      router.refresh();
      router.push("/");
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong"
      })
    }
  };

  return (
    // <div className="form-create h-full p-4 space-y-2 max-w-4xl mx-auto">
    <div className="form-create">
      <Form {...form}>
        <form className="space-y-8 pb-10" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2 w-full col-span-2">
            <div>
              <h3 className="text-lg">Informations générales</h3>
              <p className="text-sm text-muted-foreground"> Informations générales sur votre Image virtual </p>
            </div>
            <Separator className="bg-primary/20" />
          </div>
          <FormField name="src" render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ImageUpload disabled={isLoading} onChange={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField name="name" control={form.control} render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={isLoading} placeholder="Nom" {...field} />
                  </FormControl>
                  <FormDescription>Nom de votre image virtual</FormDescription>
                </FormItem>
              )}/>

            <FormField name="description" control={form.control} render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input disabled={isLoading} placeholder="Description" {...field}/>
                  </FormControl>
                  <FormDescription> Description (ex: Commerce, CEO, Développeur ...) </FormDescription>
                </FormItem>
              )}
            />

            <FormField name="categoryId" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select disabled={isLoading} onValueChange={field.onChange} value={field.value} defaultValue={field.value} >
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue defaultValue={field.value} placeholder="Choisissez une categories" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription> Selectionnez une categories pour votre image </FormDescription>
                </FormItem>
              )} />
          </div>

          <div className="space-y-2 w-full">
            <div>
              <h3 className="text-lg">Configuration</h3>
              <p className="text-sm text-muted-foreground"> instructions détaillées sur le comportement de l'IA </p>
            </div>
            <Separator className="bg-primary/20" />
          </div>

          <FormField name="instructions" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Instructions</FormLabel>
                <FormControl>
                  <Textarea className="resize-none" rows={7} disabled={isLoading} {...field} placeholder={PREAMBLE} />
                </FormControl>
                <FormDescription>Write your instructions</FormDescription>
              </FormItem>
            )} />

          <FormField name="seed" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Exemple conversation</FormLabel>
                <FormControl>
                  <Textarea disabled={isLoading} placeholder={SEED_CHAT} rows={7} {...field} className="resize-none" />
                </FormControl>
              </FormItem>
            )} />
          <div className="justify-center w-full flex">
          <Button size="lg" disabled={isLoading}>{initialData ? "Modifier votre Image": "Écrire votre image"}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
