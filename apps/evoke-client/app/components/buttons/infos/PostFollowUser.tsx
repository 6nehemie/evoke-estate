import Link from 'next/link';

interface PostFollowUserProps {
  username: string;
  fullName: string;
  isFollowing: boolean;
}

const PostFollowUser: React.FC<PostFollowUserProps> = ({
  username,
  fullName,
  isFollowing,
}) => {
  return (
    <div className="font-light ">
      <Link href={`/${username}`} className="leading-none mr-2">
        {fullName}
      </Link>
      {/* <span className="mr-2">-</span> */}
      {/* <button className="hover:underline">
        {isFollowing ? 'Following' : 'follow'}
      </button> */}
    </div>
  );
};
export default PostFollowUser;
