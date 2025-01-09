import { DataList } from "@/client/components/ui/DataList";

type UserDetailsProps = {
  username: string;
  imageUrl: string;
  name: string;
  email: string;
  birthday: number;
  totalFollowers: number;
  totalFollowing: number;
  weight: number;
  height: number;
};

export const UserDetails = (props: UserDetailsProps) => {
  const rowTitles = {
    username: "Username",
    imageUrl: "Image",
    name: "Name",
    email: "Email",
    birthday: "Birthday",
    totalFollowers: "Followers",
    totalFollowing: "Following",
    weight: "Weight",
    height: "Height",
  };

  return (
    <>
      <div className="text-3xl font-bold col-span-12">User Details</div>
      <DataList rowTitles={rowTitles} data={props} />
    </>
  );
};
