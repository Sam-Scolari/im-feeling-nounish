import { redirect } from "next/navigation";
import { links } from "@/utils/fetchLink";

export default function Redirect(props: { params: { id: string } }) {
  const link = links.find((link) => link.id === props.params.id);

  redirect(link?.url ?? "/");
}
