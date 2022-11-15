import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { makeDomainFunction } from "domain-functions";
import { z } from "zod";
import { Form } from "~/components/Common/Form/Form";
import { formAction } from "~/components/Common/Form/formAction";
import {
  addCategory,
  getCategoryById,
  updateCategoryById,
} from "~/utils/category.server";

export const action: ActionFunction = async ({ request }) =>
  formAction({
    request,
    schema,
    mutation,
    successPath: "/dashboard/category" /* path to redirect on success */,
  });
const schema = z.object({
  id: z.string(),
  name: z.string().min(1),
});
export const loader: LoaderFunction = async ({ params }) => {
  const category = await getCategoryById(params.id as string);
  console.log(category);

  return json({ category });
};
const mutation = makeDomainFunction(schema)(async (values) => {
  const { id, name } = values;
  // console.log(values);
  // console.log(values);

  updateCategoryById(id, name);
});

function add() {
  const {
    category: { name, id },
  } = useLoaderData();
  console.log(id, name);

  return (
    <Form
      schema={schema}
      values={{
        id: id,
        name: name,
      }}
    >
      {({ Field, Errors, Button }) => (
        <>
          <Field name="id" label="First name" hidden />
          <Field name="name" label="First name" />
          <Errors />
          <Button />
        </>
      )}
    </Form>
  );
}

export default add;
