import { AspectRatio } from '@/components/ui/aspect-ratio';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const AspectRatioPost: React.FC<IProps> = ({ children, className }) => {
  return (
    <AspectRatio
      ratio={16 / 12}
      className={`bg-muted flex items-center object-center`}
    >
      {children}
    </AspectRatio>
  );
};
export default AspectRatioPost;
