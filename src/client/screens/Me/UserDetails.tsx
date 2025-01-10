import { DataList } from "@/client/components/ui/DataList";
import { UserDetails as UserDetailsType } from "@/common/types/Me";

type UserDetailsProps = UserDetailsType;

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
