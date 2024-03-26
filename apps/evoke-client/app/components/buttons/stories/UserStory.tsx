import AvatarStory from '../../avatars/AvatarStory';

interface UserStoryProps {
  src?: string;
  initials?: string;
  size?: number;
  username?: string;
}

const UserStory: React.FC<UserStoryProps> = ({ src, initials, username }) => {
  return (
    <div className="flex flex-col items-center gap-2 w-max">
      <button>
        <AvatarStory src={src} initials={initials} />
      </button>
      <p className="text-xs font-light">@{username || '6nehemie'}</p>
    </div>
  );
};
export default UserStory;
