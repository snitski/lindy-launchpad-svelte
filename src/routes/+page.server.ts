import { MAILER_API } from "$env/static/private";

import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { newsletterSchema } from "@/newsletterSchema";
import { zod } from "sveltekit-superforms/adapters";
 
export const load : PageServerLoad = async () => {
    return {
        form: await superValidate(zod(newsletterSchema)),
    };
};

export const actions : Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(newsletterSchema));

        if (!form.valid) {
            return fail(400, { form });
        }

        const mailerURL = new URL('https://connect.mailerlite.com/api/subscribers');

        const mailerRes = await fetch(mailerURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${MAILER_API}`,
            },
            body: JSON.stringify({
                email: form.data.email,
                fields: {
                    name: form.data.name,
                    last_name: form.data.surname,
                },
            }),
        });

        console.log(mailerRes.json());

        if (!mailerRes.ok) {
            return fail(500, { form });
        }

        return { form };
    }
}