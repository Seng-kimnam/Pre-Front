import OwnerComponent from "./owner/page";
type Quiz = {
  // type here is use for defind depend on our each objects
  id: number;
  title: string;
  description: string;
  totalScore: number;
};
export default async function Home() {
  return (
    <>
      <div>
        <OwnerComponent />
      </div>
    </>
  );
}
