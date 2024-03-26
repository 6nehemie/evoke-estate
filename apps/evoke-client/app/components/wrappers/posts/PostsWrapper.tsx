interface PostsWrapperProps {
  children?: React.ReactNode;
}

// ? Gives the corresponding grid to the posts
const PostsWrapper: React.FC<PostsWrapperProps> = ({ children }) => {
  return (
    <div className="posts-grid gap-x-5 max-xl:gap-4 gap-y-6 max-w-wide w-full mx-auto">
      {children}
    </div>
  );
};
export default PostsWrapper;
