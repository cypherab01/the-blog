const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      BlogDetailsPage
      <h1>{id}</h1>
    </div>
  );
};
export default BlogDetailsPage;
