import { Box, MenuItem, TextField } from "@mui/material";
import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { makeDomainFunction } from "domain-functions";
import { z } from "zod";
import { Form } from "~/components/Common/Form/Form";
import { formAction } from "~/components/Common/Form/formAction";
import { getCategory } from "~/utils/category.server";

export const loader: LoaderFunction = async () => {
  const category = await getCategory();
  return json({ category });
};
export const action: ActionFunction = async ({ request }) =>
  formAction({
    request,
    schema,
    mutation,
    successPath: "/dashboard/product" /* path to redirect on success */,
  });

const attribute = z.object({
  name: z.string().min(1),
  price: z.string().min(1),
});

const schema = z.object({
  csrfToken: z.string().min(1),
  firstName: z.string().min(1),
  email: z.string().min(1).email(),
  howYouFoundOutAboutUs: z.enum(["fromAFriend", "google"]),
  message: z.string().optional(),
});

const mutation = makeDomainFunction(schema)(async (values) => {
  console.log(values);
});

function add() {
  const { category } = useLoaderData();
  // let [attribute, setAttribute] = useState([]);

  return (
    <Form schema={schema}>
      {({ Field, Errors, Button }) => (
        <>
          <Field name="csrfToken" value="abc123" hidden />
          <Field name="firstName" placeholder="Your first name" />
          <Field name="email" label="E-mail" placeholder="Your e-mail" />
          <em>You'll hear from us at this address 👆🏽</em>
          <Field
            name="howYouFoundOutAboutUs"
            options={[
              { name: "Friend", value: "fromAFriend" },
              { name: "Search", value: "google" },
            ]}
          />
          <Field name="message" multiline placeholder="Your message" />
          <Errors />
          <Button />
        </>
      )}
    </Form>
  );
}

export default add;
