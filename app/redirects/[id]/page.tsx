import { redirect } from "next/navigation";

export default function Redirect(props: { params: { id: string } }) {
  redirect(`/${props.params.id}`);
}
