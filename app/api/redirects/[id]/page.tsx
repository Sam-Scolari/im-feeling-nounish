import { redirect } from "next/navigation";

export default function Redirect(props: { params: { id: string } }) {
  redirect(`/api/redirects/${props.params.id}`);
}
