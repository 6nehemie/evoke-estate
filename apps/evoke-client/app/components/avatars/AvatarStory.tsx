import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AvatarStoryProps {
  src?: string;
  initials?: string;
  size?: number;
}

const AvatarStory: React.FC<AvatarStoryProps> = ({ src, initials, size }) => {
  const avatarSize = `h-${size} w-${size}`;

  const hasStoriesRemaining = true;
  const storiesStyles = hasStoriesRemaining
    ? 'border-dark-gray-1'
    : 'border-neutral-400';

  return (
    <div
      className={`border-2 ${storiesStyles} p-0.5 h-max w-max rounded-full overflow-hidden`}
    >
      <Avatar className={`h-12 w-12 ${avatarSize}`}>
        <AvatarImage src={src} alt="user profile picture" />
        <AvatarFallback className="bg-dark-gray-1 text-white text-xl font-light">
          {initials || 'CN'}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarStory;
