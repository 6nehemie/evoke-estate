import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserProfileAvatarProps {
  src?: string;
  initials?: string;
  size?: number;
}

const UserProfileAvatar: React.FC<UserProfileAvatarProps> = ({
  src,
  initials,
  size,
}) => {
  const avatarSize = `h-${size} w-${size}`;

  return (
    <Avatar
      className={`h-[88px] w-[88px] max-lg:w-20 max-lg:h-20 ${avatarSize}`}
    >
      <AvatarImage src={src} alt="user profile picture" />
      <AvatarFallback className="bg-dark-gray-1 text-white text-xl font-light">
        {initials || 'CN'}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserProfileAvatar;
