import SubPage from "@/components/subpage";

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <SubPage params={params} page="work" />;
}
