import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PostAvatarFollowingProps {
  src?: string;
  initials?: string;
  size?: number;
}

const PostAvatarFollowing: React.FC<PostAvatarFollowingProps> = ({
  src,
  initials,
  size,
}) => {
  const avatarSize = `h-${size} w-${size}`;

  return (
    <Avatar className={`h-14 w-14  ${avatarSize}`}>
      <AvatarImage src={src} alt="user profile picture" />
      <AvatarFallback className="bg-dark-gray-1 text-white text-[8px] font-light">
        {initials || 'CN'}
      </AvatarFallback>
    </Avatar>
  );
};

export default PostAvatarFollowing;
