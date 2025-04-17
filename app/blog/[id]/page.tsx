const BlogDetailsPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const { id } = params;
  return (
    <div>
      BlogDetailsPage
      <h1>{id}</h1>
    </div>
  );
};
export default BlogDetailsPage;
