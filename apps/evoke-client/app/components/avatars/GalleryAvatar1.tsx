import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface GalleryAvatar1Props {
  src?: string;
  initials?: string;
  size?: number;
}

const GalleryAvatar1: React.FC<GalleryAvatar1Props> = ({
  src,
  initials,
  size,
}) => {
  const avatarSize = `h-${size} w-${size}`;

  return (
    <Avatar className={`h-11 w-11 max-lg:w-9 max-lg:h-9 ${avatarSize}`}>
      <AvatarImage src={src} alt="user profile picture" />
      <AvatarFallback className="bg-dark-gray-1 text-white font-light">
        {initials || 'CN'}
      </AvatarFallback>
    </Avatar>
  );
};

export default GalleryAvatar1;
