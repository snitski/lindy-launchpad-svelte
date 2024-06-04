<script lang="ts">
    import * as Form from "@/components/ui/form";
    import { Input } from "@/components/ui/input";
    import { newsletterSchema, type NewsletterSchema } from "@/newsletterSchema";
	import { toast } from "svelte-sonner";
    import {
        type SuperValidated,
        type Infer,
        superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
   
    export let data: SuperValidated<Infer<NewsletterSchema>>;
   
    const form = superForm(data, {
        validators: zodClient(newsletterSchema),
        onResult({ result }) {
            if (result.type === "success") {
                toast.success("Thanks for subscribing to our newsletter!");
            } else {
                toast.error("An error occured. Please try again later.");
            }
        },
    });
   
    const { form: formData, enhance } = form;

  </script>
   
  <form method="POST" use:enhance class="flex flex-col max-w-xl">
    <div class="flex gap-3">
        <Form.Field {form} name="name" class="w-full">
            <Form.Control let:attrs>
                <Form.Label>First Name*</Form.Label>
                <Input {...attrs} required bind:value={$formData.name} />
            </Form.Control>
            <Form.FieldErrors />
        </Form.Field>
        <Form.Field {form} name="surname" class="w-full">
            <Form.Control let:attrs>
                <Form.Label>Last Name*</Form.Label>
                <Input {...attrs} bind:value={$formData.surname} />
            </Form.Control>
            <Form.FieldErrors />
        </Form.Field>
    </div>
    <Form.Field {form} name="email">
        <Form.Control let:attrs>
            <Form.Label>Email*</Form.Label>
            <Input {...attrs} bind:value={$formData.email} />
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Button class="self-center px-10 mt-3">Subscribe</Form.Button>
  </form>