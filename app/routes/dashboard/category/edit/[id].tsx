import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useLocation } from "@remix-run/react";

import { makeDomainFunction } from "domain-functions";
import { z } from "zod";
import { Form } from "~/components/Common/Form/Form";
import { formAction } from "~/components/Common/Form/formAction";
import { addCategory } from "~/utils/category.server";

export const action: ActionFunction = async ({ request }) =>
  formAction({
    request,
    schema,
    mutation,
    successPath: "/dashboard/category" /* path to redirect on success */,
  });
const schema = z.object({
  name: z.string().min(1),
});
const mutation = makeDomainFunction(schema)(async (values) => {
  const { name } = values;
  addCategory(name);
});

export const loader: LoaderFunction = async ({ request }) => {
  const route = useLocation();
  console.log(route);
};
function edit() {
  return (
    <Form schema={schema}>
      {({ Field, Errors, Button }) => (
        <>
          <Field name="name" label="First name" />
          <Errors />
          <Button />
        </>
      )}
    </Form>
  );
}

export default edit;
