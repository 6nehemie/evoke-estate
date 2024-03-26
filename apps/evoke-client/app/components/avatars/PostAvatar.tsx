import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PostAvatarProps {
  src?: string;
  initials?: string;
  size?: number;
}

const PostAvatar: React.FC<PostAvatarProps> = ({ src, initials, size }) => {
  const avatarSize = `h-${size} w-${size}`;

  return (
    <Avatar className={`h-5 w-5  ${avatarSize}`}>
      <AvatarImage src={src} alt="user profile picture" />
      <AvatarFallback className="bg-dark-gray-1 text-white text-[8px] font-light">
        {initials || 'CN'}
      </AvatarFallback>
    </Avatar>
  );
};

export default PostAvatar;
