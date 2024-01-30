import { redirect } from "next/navigation";

export default function Redirect(props: { params: { id: string } }) {
  redirect(`/redirects/${props.params.id}`);
}
